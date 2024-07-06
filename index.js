
function handleTodo() {
    console.time('handleTodo');
    const todoList = document.getElementById('todo').value;

    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const liSpan = document.createElement("span");

    liSpan.appendChild(document.createTextNode(todoList));

    li.appendChild(liSpan);
    ul.appendChild(li);

    document.body.append(ul);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    li.appendChild(deleteButton);

    const updateButton = document.createElement("button");
    updateButton.innerHTML = "Update";
    li.appendChild(updateButton);

    updateButton.addEventListener("click", function (event) {
        handleUpdate(event, liSpan)
    })

    deleteButton.addEventListener("click", function (event) {
        handleDelete(event, ul);
    });

    console.timeEnd('handleTodo');
}


function handleDelete(event, ul) {
    console.log("Item Deleted");
    const li = event.target.closest("li");
    ul.removeChild(li);
}

function handleUpdate(event, liSpan) {
    liSpan.setAttribute("contenteditable", "true");
    liSpan.focus();
    liSpan.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            liSpan.setAttribute("contenteditable", "false");
        }
    })

}


