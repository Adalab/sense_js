"use strict";
console.log('hola');

//.js-collapsible_content {
//     display: none;
//   }
//   .js-collapsible_trigger {
//     cursor: pointer;
//   }
//   //open
//   .js-collasible_content_open {
//     display: flex;
//     justify-content: space-between;
//   }
//   .js-arrow {
//     transform: rotate(-180deg);
//   }

//const removeAddClass = document.querySelectorAll(".js-collapsible_content");
// Si contiene la clase hidden
function openAndClose(event) {
  console.log('Hola');
  // if (removeAddClass.classList.contains("hidden")) {
  //   // Elimina la clase
  //   classList.remove("hidden");
  // } else {
  //   // Sino
  //   // Añade la clase hidden
  //   classList.add("hidden");
  // };
}

const trigger = document.querySelectorAll(".js-collapsible_trigger");

trigger.addEventListener("click", openAndClose);
debugger;