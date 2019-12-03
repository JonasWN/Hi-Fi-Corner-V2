"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var catagoryList = document.querySelector(".product-image-container");
  var url = new URLSearchParams(document.location.search);
  var productSku = url.get("sku");
  var namePrice = document.querySelector(".name-price");
  var asidetitle = document.querySelector(".aside-title");
  var name = document.querySelector(".right-article-section__h1");
  fetch("https://hifi-corner.herokuapp.com/api/v1/products/".concat(productSku), {
    "method": "GET"
  }).then(function (answer) {
    return answer.json();
  }).then(function (response) {
    // get all the array objects
    console.log(response);
    catagoryList.innerHTML = "\n            <img src=".concat(response.images, " alt=\"image of product\">\n            ");
    namePrice.innerHTML = " <p>See other ".concat(response.description, " products</p>\n            <p> ").concat(response.price, "</p>");
    asidetitle.innerHTML = " <span class=\"gold\">Home</span> /<span class=\"gold\"> ".concat(response.category, " Amplifiers</span> /").concat(response.model);
    name.innerHTML = response.model;
  })["catch"](function (error) {
    console.log("Something Went Wrong...");
    console.error(error);
  });
});