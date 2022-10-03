"use strict";

const button = document.querySelector(".create__button"),
  screen = document.createElement("div"),
  input = document.createElement("input"),
  bubble = document.createElement("p"),
  documentBody = document.body;
let width = 20;
let height = 20;
screen.classList.add("container");

function randColor() {
  let r = Math.floor(Math.random() * (256)),
  g = Math.floor(Math.random() * (256)),
  b = Math.floor(Math.random() * (256));
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

function createInput() {
  input.value = "Діаметр кола = 10";
  input.type = "text";
  input.innerText = "Діаметр кола = 10";
  input.classList.add("input__diametr");
  document.body.prepend(input);
}
button.addEventListener("click", createInput);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function createBubble(e) {
  let newBubble = bubble.cloneNode(true);
    newBubble.classList.add("bubble");
    newBubble.style.backgroundColor = randColor();

    newBubble.style.width = `${width}px`;
    newBubble.style.height = `${height}px`;
    newBubble.style.top = `${randomNumber(10, screen.clientHeight - (height + 10))}px`;
    newBubble.style.left = `${randomNumber(10,screen.clientWidth - (width + 10))}px`;
    
    screen.append(newBubble);
};

button.addEventListener("click", (e) => {
  button.insertAdjacentElement("afterend", screen);
  button.addEventListener("click", (e) => {
    for (let i = 1; i <= 100; i++) {
      createBubble();
    }
  });
});

documentBody.addEventListener("click", (event) => {
  if (event.target.className.includes("bubble")) {
    event.target.remove();
  }
});
