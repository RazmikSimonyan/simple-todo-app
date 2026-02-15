const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const inputForm = document.querySelector('#input-form');




todoForm.addEventListener('submit', handleForm)

function handleForm(event){

    event.preventDefault();

    const textForm = inputForm.value;
    
    const task = document.createElement('li');
    task.innerText = textForm;

    //it is essential to add a delete button
    const delBtn = document.createElement('button');
    
    //very important - this specific button must not be treated as an ordinary button inside of form
    delBtn.setAttribute('role', 'button');
    delBtn.innerText = 'Delete'
    delBtn.style['margin-left'] = '10px';

    //the delete button must be added to a task
    task.append(delBtn);

    todoList.append(task);

    delBtn.addEventListener('click', handleDeleteButton)
    //to make sure that the input field gets cleaned
    inputForm.value = '';

    //to make sure that the focus is still intact
    inputForm.focus();
}

function handleDeleteButton(){
    this.closest('li').remove()
}