// 目标点击事件
var temporary = document.getElementById("temporary");
console.log(temporary);
// 点击事件
temporary.onclick = function () {
  console.log(
    this.parentElement.parentElement.nextElementSibling.children[1].textContent
  );
  console.log(
    (this.parentElement.parentElement.nextElementSibling.style.display =
      "inline-block")
  );
  console.log(
    (this.parentElement.parentElement.nextElementSibling.children[1].textContent =
      parseInt(
        this.parentElement.parentElement.nextElementSibling.children[1]
          .textContent
      ) + 1)
  );
  // 找到单个购物车数量
  var singleShopping = parseInt(
    this.parentElement.parentElement.nextElementSibling.children[1].textContent
  );
  //整个购物车数量
  if (singleShopping == 1) {
    document.getElementsByClassName("ci-count")[0].textContent =
      parseInt(document.getElementsByClassName("ci-count")[0].textContent) + 1;
    console.log(singleShopping);
  }
  var shopping = [];
  var singleShopping = {};
  singleShopping.name = this.parentElement.parentElement.previousElementSibling.textContent;
  singleShopping.prise = this.previousElementSibling.textContent;
  singleShopping.count = this.parentElement.parentElement.nextElementSibling.children[1].textContent;
  shopping.push(singleShopping);

  var shoppingString = JSON.stringify(shopping);
  localStorage.setItem("shopping", shoppingString);
  console.log(JSON.parse(localStorage.getItem("shopping")));
  window.event.preventDefault();
};

// 总购物车
var totalShopping = document.getElementsByClassName("cw-icon")[0];
console.log(totalShopping);
totalShopping.onclick = function () {
  window.location.href = "totalShopping.html";
};
