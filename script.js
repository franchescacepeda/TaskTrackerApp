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
taskTable.innerHTML = tasks.map(task => `
    <tr>
        <td>${task.name}</td>
        <td>${task.description}</td>
        <td>${task.deadline}</td>
        <td><button onclick="markTaskComplete(this)">Complete</button></td>
        <td><button onclick="removeTask(this)">Remove</button></td>
    </tr>
`).join('');
