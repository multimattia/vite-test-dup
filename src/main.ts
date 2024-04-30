import './style.css'
import { setupCounter } from './counter.ts'
import { setupAlert } from './alert.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/`
  <div>
    <h1>Hello, world!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <button id="alert" type="button">alert!</button>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
setupAlert(document.querySelector<HTMLButtonElement>("#alert")!)

