"use strict"

let lista = document.getElementById("lista");

const productos = ["Fideos Tallarines Matarazzo", "Arroz Luchetti", "Asado", "Destergente Magistral", "Fideos Spaghettis Luchetti", "Lavandina Ayudin", "Leche Protein", "Leche Liviana", "Queso Cremon", "Queso Rallado"];

let stock = [20, 10, 11, 23, 4, 6, 21, 2, 1, 5];

const precios = [1300, 1200, 7000, 2000, 1500, 1000, 1600, 1450, 5000, 1300];

let imagenes = ["imagenes/Matarazzo-forati.webp", "imagenes/arroz-luche.png", "imagenes/asado.png", "imagenes/destergente.png", "imagenes/fideos-spa.png", "imagenes/lavandina.png", "imagenes/leche-sere.png", "imagenes/leche-sere2.png", "imagenes/queso-cremoso.png", "imagenes/queso-rallado.png"];

let alt = ["fideos matarazzo", "arroz luchetti", "asado", "destergente", "fideos spaghe luche", "lavandina ayudin", " leche sere protein", "leche sere liviana", "queso cremoso cremon", "queso rallado serenisima"];

let total = [0,0,0,0,0,0,0,0,0,0];

function listaProductos(arrayProductos, arrayPrecios, arrayStock, arrayImagenes, arrayAlt) {
    for (let i = 0; i < arrayProductos.length; i++) {
        lista.innerHTML += `
        <li class="tamanio" id="tamanio">
        <img src="${arrayImagenes[i]}" alt="${arrayAlt[i]}" class="imagenes"></img>
        <p class="prod">${arrayProductos[i]}</p> 
        <p class="precio">$${arrayPrecios[i]} </p>
        <span class="stock" id="stock"> Stock: ${arrayStock[i]} </span>
        <input type="number" id="entrada" min="0" placeholder="Ingrese cantidad" class="inpt">
        <button id="btn" class="btn">Comprar</button>
        <span class="total" id="total"> Total: $${total[i]}</span>
    </li>`};
};

listaProductos(productos, precios, stock, imagenes, alt);


let btn = document.querySelectorAll("#btn");
let entrada = document.querySelectorAll("#entrada");
let stockElements = document.querySelectorAll("#stock");
let totalElement = document.querySelectorAll("#total");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        let cantidad = parseInt(entrada[i].value);
        if (cantidad > 0 && (stock[i] - cantidad) >= 0) {
            stock[i] -= cantidad;
            stockElements[i].innerText =`Stock: ${stock[i]}`;
            total[i] += cantidad * precios[i];   
            totalElement[i].innerText =`Total: $${total[i]}`;
            alert("Compra exitosa");
        }else if(cantidad > 0 && stock[i] == 0){
            alert("No hay mas stock");
        }
         else {
            alert("Ingrese una cantidad mayor a 0 ó Menor al stock");
        };
    });
};


