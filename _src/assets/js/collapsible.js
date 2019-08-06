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

const trigger = document.querySelector(".js-collapsible_trigger");
const arrow = document.querySelector(".js-arrow");
//for (let i = 0; i < trigger.lenght; i = i + 1) {
// allcollapsibles = trigger[i];
//}
const content = document.querySelector(".js-collapsible_content");

function openAndClose(ev) {
  if (
    content.classList.contains("js-collapsible_content") ||
    arrow.classList.contains("js-arrow") 
  ) {
    content.classList.remove("js-collapsible_content") ||
      arrow.classList.remove("js-arrow");
  } else {
    content.classList.add("js-collapsible_content") ||
      arrow.classList.add("js-arrow");
  }
}

trigger.addEventListener("click", openAndClose);
