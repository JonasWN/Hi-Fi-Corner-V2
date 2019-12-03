"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var params = new URLSearchParams(window.location.search);
  var brandUrl = params.get("brand");
  var productTemplate = document.querySelector("#product__template");
  var productList = document.querySelector(".productslist");
  var productCounter = 0;
  var shownItems = document.querySelector("#antal");
  fetch("https://hifi-corner.herokuapp.com/api/v1/products?make=".concat(brandUrl, "&minPrice=100&maxPrice=8000"), {
    "method": "GET"
  }).then(function (answer) {
    return answer.json();
  }).then(function (response) {
    response.forEach(function (product) {
      var productClone = productTemplate.content.cloneNode(true);
      productClone.querySelector(".productName").innerText = product.model;
      productClone.querySelector("img").src = product.images;
      productClone.querySelector(".productPriceTag").innerText = product.price + " $ ";
      productClone.querySelector("a").href = "/product-template?sku=".concat(product.sku);
      productList.appendChild(productClone);
      productCounter++;
      shownItems.innerText = productCounter;
    });
  })["catch"](function (error) {
    console.log("Something Went Wrong...");
    console.error(error);
  });
});