"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var params = new URLSearchParams(window.location.search);
  var catagoryURL = params.get("category");
  var subCategory = params.get("subCatagory");
  var productTemplate = document.querySelector("#product__template");
  var productList = document.querySelector(".productslist");

  if (subCategory) {
    fetch("https://hifi-corner.herokuapp.com/api/v1/products?category=".concat(subCategory), {
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
      });
    });
  } else {
    fetch("https://hifi-corner.herokuapp.com/api/v1/products?category=".concat(catagoryURL), {
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
      });
    });
  }
});