// MyApp.ts

export default function checkTodo(checkbox: HTMLButtonElement) {
    const li = checkbox.parentElement as HTMLLIElement;
    li.classList.toggle('checked');
   
}