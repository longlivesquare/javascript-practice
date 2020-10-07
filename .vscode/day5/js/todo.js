

function addTask() {
    const list = document.getElementById("list");
    let text = document.createTextNode(document.getElementById("newTask").value);
    let item = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    item.appendChild(checkbox);
    item.appendChild(text);
    list.appendChild(item);
    checkbox.addEventListener("click", toggleTask);
}

function toggleTask() {
        if (!this.checked) {
            this.parentElement.className = "";
        }
        else {
            this.parentElement.className = "finished";
        }
}