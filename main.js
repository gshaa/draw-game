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
      tr.append(td);
    }
    table.append(tr);
  }
}

let buttonSize20px = document.getElementById("size20px");
let buttonSize25px = document.getElementById("size25px");
let buttonSize30px = document.getElementById("size30px");
let buttonSizeOwn = document.getElementById("ownsize");
let td = document.querySelectorAll("td");

// buttonSize20px.onclick = () => {
//   td.style.padding = "6px";
// };
// buttonSize25px.onclick = () => {
//   for (let i of td) {
//     i.style.padding = "11.5px";
//   }
// };
