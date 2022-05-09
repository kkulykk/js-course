let box = document.querySelector(".box");
let boxContainer = document.querySelector(".box-container");
let size = "small";
let count = 2;
let boxAmount = 1;

const colors = [
  "#00F7C6",
  "#F7B531",
  "#23453B",
  "#9E59BA",
  "#053F1A",
  "#662EFE",
  "#87D932",
  "aqua",
  "red",
  "black",
];

const clickHandler = (container) => {
  container.addEventListener("click", (event) => {
    if (event.shiftKey) {
      if (size === "small") {
        container.classList.add("box-large");
        size = "large";
      } else {
        container.classList.remove("box-large");
        size = "small";
      }
    }
  });
};

const moveHandler = (container) => {
  container.addEventListener("mousedown", () => {
    document.addEventListener("mousemove", followCursor);

    function followCursor(event) {
      container.style.left = event.clientX - container.clientHeight / 2 + "px";
      container.style.top = event.clientY - container.clientWidth / 2 + "px";
    }
    
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", followCursor);
    });
  });
};

const leftClickHandler = (container) => {
  container.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    color = colors[Math.floor(Math.random() * colors.length)];
    container.style.backgroundColor = color;
  });
};

const doubleClickHandler = (container) => {
  container.addEventListener("dblclick", (event) => {
    event.preventDefault();
    if (!event.shiftKey && !event.altKey) {
      let newElemnt = document.createElement("div");
      newElemnt.classList.add("box");
      newElemnt.textContent = count;
      newElemnt.style.left =
        container.offsetLeft + container.clientHeight + "px";
      newElemnt.style.top = container.offsetTop + container.clientWidth + "px";
      leftClickHandler(newElemnt);
      moveHandler(newElemnt);
      clickHandler(newElemnt);
      doubleClickHandler(newElemnt);
      boxContainer.appendChild(newElemnt);
      count += 1;
      boxAmount += 1;
    }
    if (event.altKey && boxAmount > 1) {
      boxContainer.removeChild(container);
      boxAmount -= 1;
    }
  });
};

leftClickHandler(box);
moveHandler(box);
clickHandler(box);
doubleClickHandler(box);
