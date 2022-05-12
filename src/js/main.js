const input = document.querySelector(".main-block__right-form__number");
const type = document.querySelector(".main-block__right-form__name");
const addTask = document.querySelector(".task-add");
const listValue = document.querySelector(".list-item-value");
const list = document.querySelector(".main-block__list");

let typeCurrentC = [];
let slate = [];


addTask.addEventListener("click", addToList);


function addToList() {
    const inputType = type.value;
    const inputValue = input.value;

    if (inputValue === "" || inputType === "") {
        return alert("enter value");
    }
    const obj = {
        value: inputValue,
        type: inputType
    };
    const val = slate.length;
    slate.unshift(obj);
    input.value = "";
    type.value = "";
    createList(obj, val);
    input.focus();
    maker();

}

function maker() {
    list.innerHTML = "";
    slate.forEach((element, index) => {
        createList(element, index);
    });
}

function createList(el) {
    const itemDiv = document.createElement("li");
    itemDiv.classList.add("main-block__item");
    list.append(itemDiv);
    itemDiv.textContent = `${el.type}`;
    const typeDiv = document.createElement("span");
    typeDiv.classList.add("main-block__span");
    typeDiv.textContent = `${el.value})`;
    // console.log(Array.from(`${el.value}`));
    itemDiv.append(typeDiv);

}