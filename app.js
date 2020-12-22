let entryForm = document.getElementById("entry");
let entryInput = document.getElementById("entry__input");
let listContainer = document.getElementById("list__container");

let itemCount = 0;
let emptyState = document.getElementById("list__emptystate");

entryForm.addEventListener("submit", addToDoItem);

function addToDoItem(e) {
  e.preventDefault();

  if (entryInput.value) {
    console.log(entryInput.value);

    let newItem = document.createElement("li");
    newItem.classList.add("list__item");
    let checkBtn = document.createElement("input");
    checkBtn.setAttribute("type", "checkbox");
    checkBtn.classList.add("list__check");
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("list__delete");

    newItem.append(checkBtn, entryInput.value, deleteBtn);

    listContainer.appendChild(newItem);
    itemCount++;
    checkEmptyState();

    deleteBtn.addEventListener("click", () => {
      newItem.remove();
      itemCount--;
      checkEmptyState();
    });

    checkBtn.addEventListener("click", () => {
      if (checkBtn.checked) {
        newItem.classList.add("list__checked");
      } else {
        newItem.classList.remove("list__checked");
      }
    });

    entryInput.value = "";
    entryInput.focus();
  } else {
    console.log("add an item");
  }
}

function checkEmptyState() {
  if (itemCount == 0) {
    emptyState.style.display = "block";
  } else {
    emptyState.style.display = "none";
  }
}