// NAVBAR SCROLL

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.classList.add("scroll");
    }else{
        header.classList.remove("scroll");
    }

});

// MENU HAMBURGUESA

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// VALIDACION FORMULARIO

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let valido = true;

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");

    limpiarErrores();

    // VALIDAR NOMBRE

    if(nombre.value.trim() === ""){
        mostrarError(nombre, "El nombre es obligatorio");
        valido = false;
    }

    // VALIDAR EMAIL

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.value.trim() === ""){
        mostrarError(email, "El correo es obligatorio");
        valido = false;
    }else if(!regexEmail.test(email.value)){
        mostrarError(email, "Ingrese un correo válido");
        valido = false;
    }

    // VALIDAR MENSAJE

    if(mensaje.value.trim() === ""){
        mostrarError(mensaje, "El mensaje es obligatorio");
        valido = false;
    }

    // MENSAJE EXITOSO

    if(valido){

        document.getElementById("successMessage").textContent =
        "¡Gracias por contactarnos! Tu mensaje fue enviado correctamente.";

        formulario.reset();
    }

});

// MOSTRAR ERROR

function mostrarError(input, mensaje){

    const formGroup = input.parentElement;
    const error = formGroup.querySelector(".error");

    error.textContent = mensaje;
}

// LIMPIAR ERRORES

function limpiarErrores(){

    const errores = document.querySelectorAll(".error");

    errores.forEach(error => {
        error.textContent = "";
    });

    document.getElementById("successMessage").textContent = "";
}