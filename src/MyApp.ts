// app.ts
export{}
function deleteTodo(button: HTMLButtonElement) {
    const li = button.parentElement as HTMLLIElement;
    li.classList.add('deleted');
    setTimeout(() => {
        li.remove();
    }, 300);
}

// Add event listeners to all delete buttons
const deleteButtons = document.querySelectorAll('.deleteButton') as NodeListOf<HTMLButtonElement>;
deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        deleteTodo(button);
    });
});
