const formRegister = document.querySelector(".form-register");
const inputUser = document.querySelector('.form-register input[type="text"]');
const inputPass = document.querySelector('.form-register input[type="password"]');
const inputEmail = document.querySelector('.form-register input[type="email"]');
const inputPhone = document.querySelector('.form-register input[type="tel"]');
const alertaError = document.querySelector(".form-register .alerta-error");
const alertaExito = document.querySelector(".form-register .alerta-exito");

const userNameRegex = /^[a-zA-Z0-9\_\-]{4,16}$/;
export const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
export const passwordRegex = /^.{4,12}$/;
export const phoneRegex = /^\d{9}$/; 

export const estadoValidacionCampos = {
    nombre: false,
    correo: false,
    contrasena: false,
    telefono: false
};

document.addEventListener("DOMContentLoaded", () => {
    formRegister.addEventListener("submit", (e) => {
        e.preventDefault();
        enviarFormulario(formRegister, alertaError, alertaExito);
    });

    inputUser.addEventListener("input", () => {
        validarCampo(userNameRegex, inputUser, "El usuario tiene que ser de 4 a 16 caracteres y solo puede contener, letras y guión bajo.");
    });

    inputEmail.addEventListener("input", () => {
        validarCampo(emailRegex, inputEmail, "El correo solo puede contener letras, números, puntos, guiones y guión bajo.");
    });

    inputPass.addEventListener("input", () => {
        validarCampo(passwordRegex, inputPass, "La contraseña tiene que ser de 4 a 12 caracteres.");
    });

    inputPhone.addEventListener("input", () => {
        validarCampo(phoneRegex, inputPhone, "El número de teléfono debe tener exactamente 9 dígitos.");
    }); // Agregado para validar el teléfono
});

export function validarCampo(regularExpresion, campo, mensaje) {
    const validarCampo = regularExpresion.test(campo.value);
    if (validarCampo) {
        eliminarAlerta(campo.parentElement.parentElement);
        estadoValidacionCampos[campo.name] = true;
        campo.parentElement.classList.remove("error");
        return;
    }
    estadoValidacionCampos[campo.name] = false;
    campo.parentElement.classList.add("error");
    mostrarAlerta(campo.parentElement.parentElement, mensaje);
}

function mostrarAlerta(referencia, mensaje) {
    eliminarAlerta(referencia);
    const alertaDiv = document.createElement("div");
    alertaDiv.classList.add("alerta");
    alertaDiv.textContent = mensaje;
    referencia.appendChild(alertaDiv);
}

function eliminarAlerta(referencia) {
    const alerta = referencia.querySelector(".alerta");
    if (alerta)
        alerta.remove();
}

export function enviarFormulario(form, alertaError, alertaExito) {
    // VALIDAMOS EL ENVIO DE NUESTRO FORMULARIO
    if (estadoValidacionCampos.nombre && estadoValidacionCampos.correo 
            && estadoValidacionCampos.contrasena && estadoValidacionCampos.telefono) {
        // Resetear los valores del objeto
        estadoValidacionCampos.nombre = false;
        estadoValidacionCampos.correo = false;
        estadoValidacionCampos.contrasena = false;
        estadoValidacionCampos.telefono = false; // Resetear estado del teléfono

        form.reset();
        alertaExito.classList.add("alertaExito");
        alertaError.classList.remove("alertaError");
        setTimeout(() => {
            alertaExito.classList.remove("alertaExito");
        }, 3000);
        return;
    }

    alertaExito.classList.remove("alertaExito");
    alertaError.classList.add("alertaError");
    setTimeout(() => {
        alertaError.classList.remove("alertaError");
    }, 3000);
}


