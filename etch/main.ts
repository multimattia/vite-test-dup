const SIZE_IN_PIXELS = 800;
let isLeftClickHeld = false;
let gridSize = 24;
let colorList = [
  ["#000000", "black"],
  ["#DCDCDC", "slate"],
  ["#F87271", "red"],
  ["#62E884", "green"],
  ["#60A5FA", "blue"],
];
let currentColor = colorList[0][1];

const layout = document.querySelector(".container") as HTMLDivElement;
const gridSizeInput = document.getElementById("grid-size") as HTMLInputElement;
const readableLabel = document.getElementById(
  "grid-readable"
) as HTMLParagraphElement;
const activeColor = document.getElementById("active-color") as HTMLDivElement;
const cluster = document.getElementById("color-cluster") as HTMLDivElement;
const gridContainer = document.querySelector(".container") as HTMLDivElement; // Assuming .grid-container is the parent
const confirmButton = document.getElementById(
  "confirm-button"
) as HTMLButtonElement;
const refreshButton = document.getElementById(
  "refresh-button"
) as HTMLButtonElement;

activeColor.style.backgroundColor = currentColor;

function clearGrid(container: HTMLDivElement) {
  container.replaceChildren();
}
function createGrid(size: number, container: HTMLDivElement) {
  clearGrid(container);
  let squareSize = Math.floor(SIZE_IN_PIXELS / size);
  for (let i = 0; i < size; i++) {
    let newRow = document.createElement("div");
    newRow.classList.add("gridrow");
    newRow.draggable = false;
    newRow.style.maxHeight = `${squareSize}px`;
    newRow.style.minHeight = `${squareSize}px`;
    for (let j = 0; j < size; j++) {
      let newItem = document.createElement("div");
      newItem.classList.add("griditem");
      newItem.draggable = false;
      newItem.style.maxHeight = `${squareSize}px`;
      newItem.style.minHeight = `${squareSize}px`;
      newRow.appendChild(newItem);
    }
    container.appendChild(newRow);
  }
}

function generateRandomRGB(): string {
  let list: string[] = [];
  for (let i = 0; i < 3; i++) {
    list[i] = Math.floor(Math.random() * 255).toString();
  }
  return `rgb(${list.join(",")})`;
}

function generateColorButton(
  a = generateRandomRGB(),
  colorName: string
): HTMLButtonElement {
  let button = document.createElement("button");
  let styles = [
    "min-h-8",
    "min-w-8",
    "rounded-md",
    "px-3",
    "py-1",
    "shadow-sm",
    "transition-all",
    "hover:scale-110",
    "active:scale-125",
    "active:shadow-md",
  ];
  button.classList.add(...styles);
  button.style.backgroundColor = a;
  button.id = `${colorName}-button`;

  return button;
}

function populateButtonCluster(blist: string[][], numberOfButtons: number) {
  document.getElementById("color-cluster")?.replaceChildren();
  blist.forEach((button: string[]) => {
    document
      .getElementById("color-cluster")!
      .appendChild(generateColorButton(button[0], button[1]));
  });
  numberOfButtons = numberOfButtons - colorList.length;
  if (numberOfButtons > 1) {
    for (let i = 0; i < numberOfButtons; i++) {
      document
        .getElementById("color-cluster")!
        .appendChild(generateColorButton(generateRandomRGB(), `random-${i}`));
    }
  }
}

populateButtonCluster(colorList, 10);
createGrid(gridSize, layout);

cluster.addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.target as HTMLElement;
  if (target) {
    if (target.tagName === "BUTTON") {
      currentColor = target.style.backgroundColor;
      activeColor.style.backgroundColor = currentColor;
    }
  }
});

gridContainer.addEventListener("mousedown", (e) => {
  e.preventDefault();
  const target = e.target as HTMLElement;
  if (e.button === 0) {
    isLeftClickHeld = true;
    if (target!.classList.contains("griditem")) {
      target!.style.backgroundColor = currentColor;
    }
  }
});
gridContainer.addEventListener("mouseup", (e) => {
  if (e.button === 0) {
    isLeftClickHeld = false;
  }
});
gridContainer.addEventListener(
  "mouseenter",
  (e) => {
    const target = e.target as HTMLElement;
    if (isLeftClickHeld) {
      if (target!.classList.contains("griditem")) {
        target!.style.backgroundColor = currentColor;
      }
    }
  },
  true
);

gridSizeInput.addEventListener("input", (e) => {
  const target = e.target as HTMLInputElement;
  readableLabel!.textContent = `Grid size: ${target.value}x${target.value}`;
});

confirmButton?.addEventListener("click", () => {
  createGrid(parseInt(gridSizeInput.value), layout);
});

refreshButton?.addEventListener("click", () => {
  populateButtonCluster(colorList, 10);
});
