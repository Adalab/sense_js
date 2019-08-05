"use strict";
//console.log("hola");

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

// Si contiene la clase hidden
const trigger = document.querySelectorAll(".js-collapsible_trigger");
for (i = 0; i < trigger.lenght; i = i + 1) {
  const allcollapsibles = trigger[i];
}

function openAndClose(event) {
  const content = document.querySelectorAll(".js-collapsible_content");
  for (i = 0; i < content.lenght; i = i + 1) {
    const allcontent = trigger[i];
  }

  if (content.classList.contains("js-collapsible_content"));
  console.log("hola");

  {
    content.classList.remove("js-collapsible_content");
  }
}

allcollapsibles.addEventListener("click", openAndClose);
