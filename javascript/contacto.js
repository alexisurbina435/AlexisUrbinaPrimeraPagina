
let nombreYapellido = document.getElementById("nombre");
let correo = document.getElementById("email");
let telefono = document.getElementById("telefono");
let consulta = document.getElementById("consulta");
let btn = document.getElementById("btn");
let informacion = [];

btn.addEventListener("click", (e) => {
    informacion[0] = `Su nombre y apellido es: ${nombreYapellido.value} `;
    informacion[1] = `El correo electronico es: ${correo.value} `;
    informacion[2] = `El numero de telefono es: ${telefono.value} `;
    informacion[3] = `Su consulta es: ${consulta.value}`;
    validar(e);
})
function validar(e) {
    let invalidacion = /^[a-zA-ZéÉáÁíóúÍÓÚÑñ\s]*$/;
    let invalidacion2 = /^([0-9])*$/;
    let email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{3,63}$/i;
    if (nombreYapellido.value == "" || correo.value == "" || telefono.value == "" || consulta.value == "") {
        e.preventDefault();
        alert("Por favor, completar todas las casillas");
    } else if (nombreYapellido.value.length < 5) {
        e.preventDefault();
        alert("Ingrese un nombre con 6 caracteres o más ");
    } else if (!invalidacion.test(nombreYapellido.value)) {
        e.preventDefault();
        alert("Nombre no valido");
    } else if (!email.test(correo.value)) {
        e.preventDefault();
        alert("Correo no valido ");
    } else if (telefono.value.length < 9) {
        e.preventDefault();
        alert("Ingrese telefono con 10 o más numeros");
    } else if (!invalidacion2.test(telefono.value)) {
        e.preventDefault();
        alert("Numero de telefono no valido");
    } else if (consulta.value.length < 9) {
        e.preventDefault();
        alert("Ingrese 10 caracteres o mas para su consulta");
    } else {
        alert("Formulario enviado");
        let blob = new Blob([informacion], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "contacto.txt");
    }
}
