var confirm = document.getElementById('confirm');
var name_list = document.getElementById('name_list');
var arr_name = [];
console.log(confirm)
confirm.onclick = function(){
    var input_value = document.getElementById('input_value').value;
    if(input_value == ""){
        alert('不能为空')
    }else{
        var li = document.createElement('li');
        name_list.appendChild(li);
        li.innerText = input_value;
        arr_name.push(input_value);
        console.log(arr_name);
        input_value.value = '';
    }
}