let grocList = [];

class GrocItem {
    count = 0;
    item = "";
    inCart = false;

    constructor(count, item) {
        this.count = count;
        this.item = item;
    }

    get count() {
        return this.count;
    }

    get item() {
        return this.item;
    }

    set count(newCount) {
        this.count = newCount;
    }

    set item(newItem) {
        this.item = newItem;
    }
}

function addItem() {
    let count = parseInt(document.getElementById("count").value);
    let item = document.getElementById("item").value;
    let newGItem = new GrocItem(count, item);

    grocList.push(newGItem);
    console.log(grocList);
    clearInputs();
    dispList();
}

function clearInputs() {
    document.getElementById("count").value=0;
    document.getElementById("item").value="";
}

function dispList() {
    let gList = document.getElementById("grocList");
    gList.innerHTML = "";
    var newItem;

    for(const gItem of grocList) {
        console.log(gItem);
        newItem = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = gItem.inCart;
        
        newItem.appendChild(checkbox);
        checkbox.addEventListener("click", toggleTask);

        newItem.appendChild(document.createTextNode(gItem.count + " " + gItem.item));
        gList.appendChild(newItem)
    }
}

function reverseList() {
    grocList.reverse();
    dispList();
}

function sortList() {
    grocList.sort(function (a, b) {
        return a.count - b.count
    });
    dispList();
}

function toggleTask() {
    if (!this.checked) {
        this.parentElement.className = "";
    }
    else {
        this.parentElement.className = "finished";
    }
}