const addBtn = document.getElementById("task-btn");
const input = document.getElementById("task-input");
const parent = document.getElementById("todo-parent");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function addItem() {
    const title = input.value.trim();
    if (title === "") {
        alert("Task Cannot be empty");
        return;
    }
    
    const todo = {
        id: Date.now().toString(),
        title,
        isEditing: false,
        isCompleted: false
    };
    
    todos.push(todo);
    saveToLocalStorage();
    renderTodos();
    input.value = "";
}

function deleteItem(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveToLocalStorage();
    renderTodos();
}

function toggleEditItem(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            if (todo.isEditing) {
                const inputField = document.getElementById(`todo-text-${id}`);
                const updatedTitle = inputField.value.trim();
                todo.title = updatedTitle === "" ? todo.title : updatedTitle;
            }
            todo.isEditing = !todo.isEditing;
        }
        return todo;
    });
    saveToLocalStorage();
    renderTodos();
}

function toggleCompleteItem(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            todo.isCompleted = !todo.isCompleted;
        }
        return todo;
    });
    saveToLocalStorage();
    renderTodos();
}

function renderTodos() {
    parent.innerHTML = todos.map(todo => `
        <div id="${todo.id}" class="flex items-center justify-between bg-black p-3 rounded-lg">
            <div class="flex items-center space-x-3">
                <input 
                    type="checkbox" 
                    id="check-${todo.id}" 
                    ${todo.isCompleted ? 'checked' : ''} 
                    class="form-checkbox h-5 w-5 text-blue-500" 
                />
                <input 
                    type="text" 
                    id="todo-text-${todo.id}" 
                    value="${todo.title}" 
                    ${todo.isEditing ? 'class="bg-transparent border-none text-white focus:outline-none focus:ring focus:ring-blue-500"' : 'class="bg-transparent border-none text-white focus:outline-none" readonly'}
                />
            </div>
            <div class="space-x-2">
                <button
                    id="edit-${todo.id}"
                    class="bg-${todo.isEditing ? 'zinc-900' : 'white'} text-${todo.isEditing ? 'white' : 'black'} font-bold py-1 px-3 rounded-lg transition">
                    ${todo.isEditing ? 'Save' : 'Edit'}
                </button>
                <button
                    id="delete-${todo.id}"
                    class="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-lg transition">
                    Delete
                </button>
            </div>
        </div>
    `).join('');

    todos.forEach(todo => {
        document.getElementById(`delete-${todo.id}`).addEventListener('click', () => deleteItem(todo.id));
        document.getElementById(`edit-${todo.id}`).addEventListener('click', () => toggleEditItem(todo.id));
        document.getElementById(`check-${todo.id}`).addEventListener('click', () => toggleCompleteItem(todo.id));

        if (todo.isEditing) {
            const inputField = document.getElementById(`todo-text-${todo.id}`);
            inputField.focus();
            inputField.classList.add('outline-none', 'ring', 'ring-blue-500', 'rounded-md', 'p-1');
        }

        if (todo.isCompleted) {
            const inputText = document.getElementById(`todo-text-${todo.id}`);
            inputText.classList.add('line-through', 'text-gray-500');
        }
    });
}

addBtn.addEventListener("click", addItem);
document.addEventListener("DOMContentLoaded", renderTodos);
