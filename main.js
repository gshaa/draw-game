let buttonSet1 = document.getElementById("set1");
let buttonSet2 = document.getElementById("set2");
let buttonSet3 = document.getElementById("set3");
let buttonSetOwn = document.getElementById("ownset");
let table = document.getElementById("table");

buttonSet1.onclick = () => {
  while (table.childNodes.length > 0) {
    table.removeChild(table.lastChild);
  }
  createTable(20, 20);
};

buttonSet2.onclick = () => {
  while (table.childNodes.length > 0) {
    table.removeChild(table.lastChild);
  }
  createTable(30, 30);
};

buttonSet3.onclick = () => {
  while (table.childNodes.length > 0) {
    table.removeChild(table.lastChild);
  }
  createTable(40, 40);
};

buttonSetOwn.onclick = () => {
  let height;
  let width;
  function checkingValues() {
    height = +prompt("Specify height without units", 15);
    if (!height || height < 1 || height > 130 || typeof height != "number") {
      alert("Incorrect value");
      return;
    }
    width = +prompt("Specify width without units", 15);
    if (!width || width < 1 || width > 150 || typeof width != "number") {
      alert("Incorrect value");
      return;
    }
  }
  checkingValues();

  while (table.childNodes.length > 0) {
    table.removeChild(table.lastChild);
  }
  createTable(height, width);
};

function createTable(height, width) {
  for (let i = 0; i < height; i++) {
    let tr = document.createElement("TR");
    for (let j = 0; j < width; j++) {
      let td = document.createElement("TD");
      td.classList.add("tdClass");
      tr.append(td);
    }
    table.append(tr);
  }
}

let buttonSize20px = document.getElementById("size20px");
let buttonSize25px = document.getElementById("size25px");
let buttonSize30px = document.getElementById("size30px");
let buttonSizeOwn = document.getElementById("ownsize");
let tdElements = document.getElementsByClassName("tdClass");

buttonSize20px.onclick = () => {
  for (let i = 0; i < tdElements.length; i++) {
    tdElements[i].style.padding = "10px";
  }
};
buttonSize25px.onclick = () => {
  for (let i = 0; i < tdElements.length; i++) {
    tdElements[i].style.padding = "12.5px";
  }
};

buttonSize30px.onclick = () => {
  for (let i = 0; i < tdElements.length; i++) {
    tdElements[i].style.padding = "15px";
  }
};

buttonSizeOwn.addEventListener("click", () => {
  const inputValue = parseInt(prompt("Specify your value without units", "15"));
  if (isNaN(inputValue) || inputValue < 5 || inputValue > 60) {
    alert("Incorrect value");
    return;
  }
  const paddingValue = inputValue / 2 + "px";
  const tdLength = tdElements.length;

  for (let i = 0; i < tdLength; i++) {
    tdElements[i].style.padding = paddingValue;
  }
});

const colorPicker = document.getElementById("color-picker");

let chosenColor = "#000000";
colorPicker.addEventListener("input", () => {
  chosenColor = colorPicker.value;
});

table.addEventListener("click", (e) => {
  target = e.target;

  if (target.tagName != "TD") return;

  target.style.backgroundColor = chosenColor;
});
