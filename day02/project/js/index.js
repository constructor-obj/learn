var loginSubmit = document.getElementById("loginsubmit");
loginSubmit.onclick = function () {
  var loginNameValue = document.getElementById("loginname").value;
  var nlogiNpwdValue = document.getElementById("nloginpwd").value;
  console.log(loginNameValue);
  if (loginNameValue == "123" && nlogiNpwdValue == "123") {
    window.location.href = "merchandise.html";
  } else {
    alert("账号或密码错误");
  }
};
