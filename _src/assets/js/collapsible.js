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

const trigger = document.querySelectorAll(".js-collapsible_trigger");
const arrow = document.querySelectorAll(".js-arrow");
// for (let i = 0; i < trigger.lenght; i = i + 1) {
// const alltriggers = trigger[i];
//}

const content = document.querySelectorAll(".js-collapsible_content");
for (const allContent of content) {
  for (const allArrow of arrow) {
    function openAndClose(ev) {
      if (
        allContent.classList.contains("js-collapsible_content") ||
        allArrow.classList.contains("js-arrow")
      ) {
        allContent.classList.remove("js-collapsible_content") ||
          allArrow.classList.remove("js-arrow");
      } else {
        allContent.classList.add("js-collapsible_content") ||
          allArrow.classList.add("js-arrow");
      }
    }
    for (const alltrigger of trigger) {
      alltrigger.addEventListener("click", openAndClose);
    }
  }
}
