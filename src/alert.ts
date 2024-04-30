export function setupAlert(element: HTMLButtonElement) {
//   const setCounter = (count: number) => {
//     element.innerHTML = `count is ${counter}`
//   }
  element.addEventListener('click', () => alert("Hello, world!"))
}
