document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', () => {
        const taskText = todoInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            todoInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
});
