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
const content = document.querySelectorAll(".js-collapsible_content");
// for (let i = 0; i < trigger.lenght; i = i + 1) {
// const alltriggers = trigger[i];
//}

function openAndClose(ev) {
  for (const contentItem of content) {
    contentItem.classList.remove("open");
  }
  // const current = event.currentTarget;

  // for (const contentItem of content) {
  //   contentItem.classList.remove("open");
  // }
  for (const triggerItem of trigger) {
    triggerItem.classList.remove("open");
  }
  // for (let i = 0; i < trigger.length; i++) {
  //   if (trigger[i] === current) {
  //     trigger[i].classList.add("open");
  //     content[i].classList.add("open");
  //   }
  // }

  //current.classList.toggle ('js-collapsible_content');
  if (
    contentItem.classList.contains("js-collapsible_content") ||
    allArrow.classList.contains("js-arrow")
  ) {
    contentItem.classList.remove("js-collapsible_content") ||
      allArrow.classList.remove("js-arrow");
  } else {
    contentItem.classList.add("js-collapsible_content") &&
      allArrow.classList.add("js-arrow");
  }
}

for (const alltrigger of trigger) {
  alltrigger.addEventListener("click", openAndClose);
}
