// const id = (id)=>document.getElementById(id);

const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

let editTodo = null;

const addTodo = () => {
    const inputText = inputBox.value.trim();
    if (inputText.length <= 0) {
        alert("write something in To do List");
        return false;
    }
    if (addBtn.value === "Edit") {
        editLocalTodo(editTodo.target.previousElementSibling.innerHTML);
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addBtn.value = "Add";
        inputBox.value = "";
    }
    else {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = inputText;
        li.appendChild(p);

        const editBtn = document.createElement('button');
        editBtn.innerText = "Edit";
        editBtn.classList.add("btn", "editBtn")
        li.appendChild(editBtn);

        const dltBtn = document.createElement('button');
        dltBtn.innerText = "Remove";
        dltBtn.classList.add("btn", "dltBtn")
        li.appendChild(dltBtn);

        todoList.appendChild(li);
        inputBox.value = "";

        saveLocalTodos(inputText);
    }
}

const updateTodo = (e) => {
    // console.log(e.target.innerHTML);
    if (e.target.innerHTML === "Remove") {
        // console.log(e.target.parentElement);
        todoList.removeChild(e.target.parentElement);
        dltLocalTodos(e.target.parentElement);
    }
    if (e.target.innerHTML === "Edit") {
        //  console.log(e.target.previousElementSibling.innerHTML);
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value = "Edit";
        editTodo = e;
    }
}

const saveLocalTodos = (todo) => {
    let todos = [];
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));

    }
    // console.log(JSON.parse(localStorage.getItem("todos")));
    todos.push(todo);
    // console.log(localStorage.setItem("todos",JSON.stringify(todos)));
    localStorage.setItem("todos", JSON.stringify(todos));
    // console.log(todos);
}

const getLocalTodos = () => {
    let todos = [];
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach(todo => {
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.innerHTML = todo;
            li.appendChild(p);

            const editBtn = document.createElement('button');
            editBtn.innerText = "Edit";
            editBtn.classList.add("btn", "editBtn")
            li.appendChild(editBtn);

            const dltBtn = document.createElement('button');
            dltBtn.innerText = "Remove";
            dltBtn.classList.add("btn", "dltBtn")
            li.appendChild(dltBtn);

            todoList.appendChild(li);
        })
    }
}

const dltLocalTodos = (todo) => {
    let todos ;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));

    }

    let todoText = todo.children[0].innerHTML;
    let todoIndex = todos.indexOf(todoText);
    todos.splice(todoIndex,1);
    localStorage.setItem("todos",JSON.stringify(todos));
    // console.log(todoIndex);
    // console.log(todo.children[0].innerHTML);
}   
 
const editLocalTodo = (todo) => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    let todoIndex = todos.indexOf(todo);
    todos[todoIndex] = inputBox.value;
    localStorage.setItem("todos",JSON.stringify(todos));
}

document.addEventListener('DOMContentLoaded',getLocalTodos);
addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', updateTodo);