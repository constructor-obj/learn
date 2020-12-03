window.onload = function () {
  var shoppingTbody = document.getElementById("tbody");
  console.log(shoppingTbody);
  var shoppingData = JSON.parse(localStorage.getItem("shopping"));
  console.log(shoppingData);
  console.log(shoppingData.length);
  for (var index = 0; index < shoppingData.length; index++) {
    var tr = document.createElement("tr");
    for (x in shoppingData[index]) {
      var td = document.createElement("td");
      td.innerHTML = shoppingData[index][x];
      // console.log(typeof shoppingData[index]);
      // console.log(typeof shoppingData[index].x);
      // console.log(shoppingData[index]);
      // console.log(x);
      //console.log(shoppingData.index.x)
      tr.appendChild(td);
    }
    shoppingTbody.appendChild(tr);
  }
};
