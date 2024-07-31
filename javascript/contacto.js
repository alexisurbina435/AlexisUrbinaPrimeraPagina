
let nombreYapellido = document.getElementById("nombre");
let correo = document.getElementById("email");
let telefono = document.getElementById("telefono");
let consulta = document.getElementById("consulta");
let btn = document.getElementById("btn");
let informacion = [];

btn.addEventListener("click", (e) =>{
    informacion[0] = `Su nombre y apellido es: ${nombreYapellido.value} `;
    informacion[1] = `El correo electronico es: ${correo.value} `;
    informacion[2] = `El numero de telefono es: ${telefono.value} `;
    informacion[3] = `Su consulta es: ${consulta.value}`;

    let blob = new Blob([informacion], {type: "text/plain;charset=utf-8"});

    saveAs(blob, "contacto.txt");
})    