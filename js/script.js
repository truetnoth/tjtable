function showInstruction() {
  let container = document.querySelector(".instruction_container");
  let arrow = document.querySelector(".arrow");
  if (container.style.display === "block") {
    container.style.display = "none";
    arrow.style.backgroundImage = "url(img/arrow-down.svg)";
    
  } else {
    container.style.display = "block";
    arrow.style.backgroundImage = "url(img/arrow-up.svg)";
  }
}

let tablePropsArea = document.getElementById("table-props");
let tableHeadersArea = document.getElementById("table-headers");
let tableDataArea = document.getElementById("table-data");

tablePropsArea.value = localStorage.getItem('tableProps');
tableHeadersArea.value = localStorage.getItem('tableHeaders');
tableDataArea.value = localStorage.getItem('tableData');

tablePropsArea.oninput = () => {
  localStorage.setItem("tableProps", tablePropsArea.value);
};

tableHeadersArea.oninput = () => {
  localStorage.setItem("tableHeaders", tableHeadersArea.value);
};

tableDataArea.oninput = () => {
  localStorage.setItem("tableData", tableDataArea.value);
};


