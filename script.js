const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const inputForm = document.querySelector('#input-form');

todoForm.addEventListener('submit', handleForm)

function handleForm(event){
    event.preventDefault();

    const textForm = inputForm.value;
    
    const task = document.createElement('li');
    task.innerText = textForm;

    todoList.append(task);

    //to make sure that the input field gets cleaned
    inputForm.value = '';

    //to make sure that the focus is still intact
    inputForm.focus();
}