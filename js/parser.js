let take_result = document.querySelector(".take_result");


let back = function () {
  take_result.innerText = "Забрать код таблицы";
}

let tableHeads = function () {
  let props = document.getElementById("table-props").value.split("; ");
  let maxWidth = props.shift();
  let heads = document.getElementById("table-headers").value.split("; ");
  let result = "";
  for (let i = 0, j = 0; i < props.length, j < heads.length; i++, j++) {
    result += `<th width="${props[i]}">${heads[j]}</th>\n`;
  }
  if (heads.length < props.length) {
    for (let i = 0; i < props.length - (props.length - heads.length); i++) {
      props.shift();
    }
    for (let i = 0; i < props.length; i++) {
      result += `<th width="${props[i]}"></th>\n`
    }
  };
  return `<table class="desktop-table desktop-table--tfoot desktop-table--thead-with-border" style="width: ${maxWidth}!important;">\n<thead>\n<tr>\n${result}</tr>\n</thead>\n<tbody>\n`
}

let tableData = function (th) {
  let table = th;
  var lines = document.getElementById("table-data").value.split("\n");
  for (var i = 0; i < lines.length; i++) {
    table += `<tr>\n`
    var items = lines[i].split("; ");
    for (var j = 0; j < items.length; j++) {
      table += `<td>${items[j]}</td>\n`;
    }
    table += `</tr>\n`;
  }
  return table += `</tbody>\n</table>`;

}

let copyToClipboard = function (text) {
  var placeholder = document.createElement("textarea");
  document.body.appendChild(placeholder);
  placeholder.value = text;
  placeholder.select();
  document.execCommand("copy");
  document.body.removeChild(placeholder);
}

let mobileTableHeads = function () {
  let props = document.getElementById("table-props").value.split("; ");
  let maxWidth = props.shift();
  let heads = document.getElementById("table-headers").value.split("; ");
  let result = "";
  if (heads[1] === undefined) {
    heads[1] = "";
  }
  result += `<div class="mobile-table_row">\n<div class="mobile-table__key" style="width: ${props[0]}">${heads[0]}</div>\n<div class="mobile-table__value" style="width: ${props[1]}">${heads[1]}</div>\n</div>\n`;
  return `<div class="mobile-table" style="max-width: ${maxWidth};">\n<div class="mobile-table__section">\n${result}`;
}

let mobileTableData = function (th) {
  let table = th;
  var lines = document.getElementById("table-data").value.split("\n");
  for (var i = 0; i < lines.length; i++) {
    table += `<div class="mobile-table_row">\n`
    var items = lines[i].split("; ");
    for (var j = 0; j < items.length; j++) {
      table += `<div class="mobile-table__key">${items[j]}</div>\n`;
    }
    table += `</div>\n`;
  }
  return table += `</div>\n</div>`;

}

let button_desktop = document.getElementById("button_desktop");
let button_mobile = document.getElementById("button_mobile");

take_result.addEventListener("click", function() {
  take_result.innerText = "👍🏻";
  setTimeout(back, 1000);
  if (button_desktop.checked) {
    let table = tableData(tableHeads());
    copyToClipboard(window.html_beautify(table));
  } else {
    let table = mobileTableData(mobileTableHeads());
    copyToClipboard(window.html_beautify(table));
  }
});