//Nombre
const inputFill = document.querySelector(".fill-in_input");
const cardDefaultName = "Nombre Apellido";
const nameInput = document.querySelector(".full_name");

function writeName() {
  const inputText = nameFill.value || cardDefaultName;
  nameInput.innerHTML = inputText;
}
inputFill.addEventListener("keyup", writeName);
