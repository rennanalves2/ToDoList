let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tasks = JSON.parse(localStorage.getItem("@listTasks")) || [];

function renderTasks() {
    listElement.innerHTML = "";
    tasks.map((task) => {
        let liElement = document.createElement("li");
        let taskText = document.createTextNode(task);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        let linkText = document.createTextNode(" Excluir");
        linkElement.appendChild(linkText);

        let position = tasks.indexOf(task);

        linkElement.setAttribute("onclick", `deleteTask(${position})`);

        liElement.appendChild(taskText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    });
}

renderTasks();

function addTasks() {
    if(inputElement.value == "") {
        alert("Digite alguma tarefa");
        return false;
    }
    else {
        let newTask = inputElement.value;
        tasks.push(newTask);
        inputElement.value = "";
        renderTasks();
        saveData();
    }
}

buttonElement.onclick = addTasks;

function deleteTask(position) {
    tasks.splice(position, 1);
    renderTasks();
    saveData();
}

function saveData() {
    localStorage.setItem("@listTasks", JSON.stringify(tasks));
}