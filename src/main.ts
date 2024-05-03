import "./style.css";
import { setupCounter } from "./counter.ts";
import { buttonSetup } from "./alert.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
  <div>
    <h1>Hello, world!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <button id="alert" type="button">alert!</button>
      <button id="dibs" type="button">console.log</button>
      <button id="buttonCreate" type="button">create!</button>
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
buttonSetup(document.querySelector<HTMLButtonElement>("#alert")!, () =>
  newAlert("Alert!")
);
buttonSetup(document.querySelector<HTMLButtonElement>("#dibs")!, () =>
  printInfo()
);
buttonSetup(document.querySelector<HTMLButtonElement>("#buttonCreate")!, () =>
  appendButton("New!")
);

const buttons: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll("button");
console.log(buttons);

const children = document.querySelector(".card")!.children;
console.log("children:");
console.log(children);

const newAlert = (text: string) => {
  alert(text);
};

const printInfo = () => {
  const btn = document.querySelector<HTMLButtonElement>("#dibs");
  console.log(btn);
  console.log(btn?.nodeName);
};

const appendButton = (text: string) => {
  console.log(`Creating button with text ${text}`);
  const btn = document.createElement("button");
  btn.appendChild(document.createTextNode(text));
  document.querySelector(".card")!.appendChild(btn);
};
