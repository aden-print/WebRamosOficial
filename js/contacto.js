const name = document.querySelector("#name");
const apellidos = document.querySelector("#apellidos");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const form = document.querySelector("#formulario-contacto");
const dataContacto = {
  name: "",
  apellidos: "",
  phone: "",
  email: "",
  message: "",
};

name.addEventListener("input", leerInput);
apellidos.addEventListener("input", leerInput);
phone.addEventListener("input", leerInput);
email.addEventListener("input", leerInput);
message.addEventListener("input", leerInput);

function leerInput(e) {
  dataContacto[e.target.id] = e.target.value;
  console.log(dataContacto);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { name, apellidos, phone, email, mensaje } = dataContacto;
  if (
    name === "" ||
    apellidos === "" ||
    phone === "" ||
    email === "" ||
    mensaje === ""
  ) {
    console.log("Todos los campos son obligatorios");
    alert("Todos los campos son obligatorios");
    return;
  }
  console.log("Enviando formulario");
  alert("Formulario enviado");
  console.log(dataContacto);
  form.reset();
});
