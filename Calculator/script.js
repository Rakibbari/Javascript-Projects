let input = document.getElementById("inputArea");
let buttons = document.querySelectorAll("button");

let store = "";
let arr = Array.from(buttons);
arr.map((x) => {
  x.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      store = eval(store);
      input.value = store;
    } else if (e.target.innerHTML == "AC") {
      store = "";
      input.value = store;
    } else if (e.target.innerHTML == "DEL") {
      store = store.slice(0, store.length - 1);
      input.value = store;
    } else {
      store += e.target.innerHTML;
      input.value = store;
    }
  });
});
