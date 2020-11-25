var confirm = document.getElementById("confirm");
var nameList = document.getElementById("name_list");
var deleteLi = document.getElementById("deleteLi");
var search = document.getElementById("search");
var arrName = [];
console.log(confirm);
function render(parament) {
  nameList.innerHTML = "";
  for (let i = 0; i < parament.length; i++) {
    var li = document.createElement("li");
    console.log(li);
    li.innerText = parament[i];
    nameList.appendChild(li);
  }
}
confirm.onclick = function () {
  var input_value = document.getElementById("input_value").value;
  arrName.push(input_value);
  console.log(arrName);
  render(arrName);
};
deleteLi.onclick = function () {
  arrName.splice(0, 1);
  render(arrName);
};
//查 有的话只包含，否则为空。
search.onclick = function () {
  var inputValue = document.getElementById("input_value").value;
  function checkAdult(arr) {
    return arr == inputValue;
  }
  arrName.filter(checkAdult);
  var arrNameSearch = arrName.filter(checkAdult);
  render(inputValue.split(","));
};
