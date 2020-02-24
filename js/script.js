let button = document.querySelector(".take_result");

button.addEventListener("click", function() {
  alert("Код таблицы скопирован в буфер обмена");
});

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

