var confirm = document.getElementById('confirm');
var nameList = document.getElementById('name_list');
var deleteLi = document.getElementById('deleteLi');
var search = document.getElementById('search');
var arrName = [];
console.log(confirm)
function render(){
    nameList.innerHTML="";
  for (let i = 0; i < arrName.length; i++) {
    var li = document.createElement("li");
    console.log(li)
    li.innerText = arrName[i];
    nameList.appendChild(li);
  }
}
confirm.onclick = function(){
  var input_value = document.getElementById('input_value').value;
  arrName.push(input_value);
  console.log(arrName);
  render()
}
deleteLi.onclick = function(){
    arrName.splice(0,1)
    render()
  }
  //查 有的话只包含，否则为空。
search.onclick = function(){
  var input_value = document.getElementById('input_value').value;
  console.log(input_value);
  console.log(arrName);
  function checkAdult(arr) {
      return arr == input_value;
    };
  arrName.filter(checkAdult)
  console.log(arrName.filter(checkAdult))
  var arr_name_search = (arrName.filter(checkAdult));
  nameList.innerHTML="";
  for (let i = 0; i < arr_name_search.length; i++) {
    var li = document.createElement("li");
    console.log(li)
    li.innerText = arr_name_search[i];
    nameList.appendChild(li);
  }
}


// var ages = ['c','z','a'];
// function checkAdult(age) {
//     return age == "c";
// }
// console.log(ages.filter(checkAdult))