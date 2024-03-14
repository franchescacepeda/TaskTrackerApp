 let tasks = [];
const taskForm =document.getElementById("taskForm");
const taskTable = document.getElementById("taskTable");
console.log(taskForm);
console.log(taskTable);

function handleSubmission(event){
    event.preventDefault();
    const taskName = document.getElementById("taskName").value;
    const taskDescription = document.getElementById("taskDescription").value;
    const taskDeadline= document.getElementById("taskDeadline").value;

    if(taskName.trim() === ''){
        alert("Enter a task name.");
        return;
    }
    if(taskDescription.trim() === ''){
        alert("Enter a task description.");
        return;
    }
    if(taskDeadline.trim() === ''){
        alert("Enter a task deadline.");
        return;
    }
    
}   
var newTask = { name: taskName, description: taskDescription, deadline: taskDeadline};
tasks.push(newTask);
render();
function render(){
    taskTable.innerHTML= '';
    tasks.forEach(function(task){
        var row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = task.name;
        row.appendChild(nameCell);

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = task.description;
        row.appendChild(descriptionCell);

        const deadlineCell = document.createElement('td');
        deadlineCell.textContent = task.deadline;
        row.appendChild(deadlineCell);

        taskTable.appendChild(row);
    });


    }

    function init(){
        render();

    }
    taskForm.addEventListener("submit", handleSubmission);
    init();
