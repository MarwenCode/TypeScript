import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts';

import {v4 as uuidV4 } from "uuid"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)


//////////
const list = document.querySelector<HTMLUListElement>("#list");
const form = document.getElementById("#new-task-form") as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>("#new-task-title");

interface Task {
  id: string,
  title: string,
  completed: boolean,
  createdAt: Date,
}

form?.addEventListener("submit", e => {
  e.preventDefault();

  const task: Task = {
    id: uuidV4(),
    title: input?.value || "",
    completed: false,
    createdAt: new Date()
  }


})



