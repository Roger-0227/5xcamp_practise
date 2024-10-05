const btn = document.querySelector("#addBtn");
const close = document.querySelector("#closeBtn");
const text = document.querySelector("#taskInput");
const list = document.querySelector(".todo-list");

const createTaskItme = () => {
  if (text.value != "") {
    const todoitem = `<li class="todo-item">
            <span class="item">${text.value}</span>
            <button class="closeBtn">X</button>
          </li>`;

    console.log(text.value);
    list.insertAdjacentHTML("afterbegin", todoitem);
    text.value = "";
    text.focus(); //維持輸入框
  }
};

text.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    createTaskItme();
  }
});

btn.addEventListener("click", () => {
  createTaskItme();
});

list.addEventListener("click", (e) => {
  if (e.target.nodeName == "BUTTON") {
    e.target.parentNode.remove();
  }
});
// });
