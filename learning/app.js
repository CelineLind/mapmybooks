// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// Functions
function addTodo(event){
    event.preventDefault(); // prevents the page refreshing on button click and form submitting

    // create todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo); // place within div

    // checkmark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-button');
    todoDiv.appendChild(completedButton);

    // trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-button');
    todoDiv.appendChild(trashButton);

    // append to list
    todoList.appendChild(todoDiv);

    // clear todo input value
    todoInput.value = "";
}

function deleteCheck(event){
    const item = event.target;
    // delete todo
    if (item.classList[0] === 'trash-button'){
        const todo = item.parentElement;
        todo.classList.add('fall'); // animation
        todo.addEventListener('transitionend', function(){ // transition ended function
            todo.remove();
        });
    }

    // check mark
    if (item.classList[0] === 'complete-button'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
