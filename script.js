document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') return;
    
    const li = document.createElement('li');
    li.textContent = taskText;
    
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', completeTask);
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteTask);
    
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    
    document.getElementById('pending-list').appendChild(li);
    
    document.getElementById('new-task').value = '';
}

function completeTask(event) {
    const li = event.target.parentElement;
    li.removeChild(li.querySelector('button'));
    document.getElementById('completed-list').appendChild(li);
}

function deleteTask(event) {
    const li = event.target.parentElement;
    li.parentElement.removeChild(li);
}
