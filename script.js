const inputField = document.getElementById("input");
const enterBtn = document.getElementById("enterBtn");
const ulOutput = document.querySelector("ul");
const liItem = document.getElementsByTagName("li");

const inputLength = () => inputField.value.length;

const outputLength = () => liItem.length;

const createListItem = () => {
    var li = document.createElement("li");
    const input = document.querySelector("input");
    const ul = document.querySelector("ul");
    
    li.appendChild(document.createTextNode(input.value));

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("X"));
    li.appendChild(deleteButton);
    deleteButton.addEventListener("click", deleteListItem);

    ul.appendChild(li);
    input.value = "";
    
    li.addEventListener("click", crossOut);

    return li;
}

const addListWithClick = () => {
    if (inputLength() > 0) {
        createListItem();
    }
}

const addListWithKeypress = (event) => {
    if (inputLength() > 0 && event.which ===13) {
        createListItem();
    }
}

const crossOut = (event) => {
    event.target.classList.toggle("done");
}

const deleteListItem = (event) => {
    event.target.parentElement.remove();
}

enterBtn.addEventListener("click", addListWithClick);

inputField.addEventListener("keypress", addListWithKeypress);






