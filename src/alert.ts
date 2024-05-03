export function buttonSetup(
  element: HTMLButtonElement,
  cb: (ev: MouseEvent) => void
) {
  element.addEventListener("click", cb);
}
