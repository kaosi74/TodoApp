const taskInput = document.getElementById('taskInput');
const taskBtn = document.getElementById('taskBtn');
const taskList = document.getElementById('taskList');

function createTask() {
    const task = document.createElement('li');
    const chek = document.createElement('input');
    chek.type = 'checkbox';
    let del = document.createElement('BUTTON');
    del.type = 'button'
    del.innerText = 'Delete';
    task.textContent = taskInput.value;
    taskList.appendChild(task);
    taskInput.value = ""; // Clears the input field after adding a task

    task.prepend(chek);
    task.appendChild(del)

    // Mark task as complete when clicked
    task.addEventListener('click', function () {
        task.classList.toggle('completed');
    });

    del.addEventListener('click', function () {
        task.remove()
    })
}

// Event listener for adding tasks
taskBtn.addEventListener('click', function () {
    if (taskInput.value !== "") {
        createTask();
    } else {
        alert("Please eneter a task!");
    }
});

// Event listener for pressing "Enter" key to add tasks
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        if (taskInput.value !== "") {
            createTask();
        } else {
            alert('Please enter a task')
        }
    }
});
window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
})