"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var params = new URLSearchParams(window.location.search);
  var catagoryURL = params.get("category");
  var tag = params.get("tag");
  var productTemplate = document.querySelector("#product__template");
  var productList = document.querySelector(".productslist");
  var productCounter = 0;
  var shownItems = document.querySelector("#antal"); // const getAllProducts = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://hifi-corner.herokuapp.com/api/v1/products"
  //     );
  //     const data = await response.json();
  //     data.forEach(product => {
  //       console.log(product)
  //     });
  //   } catch (error) {}
  // };
  // getAllProducts();

  if (tag === "all") fetch("https://hifi-corner.herokuapp.com/api/v1/products?minPrice=100&maxPrice=8000", {
    "method": "GET"
  }).then(function (answer) {
    return answer.json();
  }).then(function (response) {
    console.log(response);
    response.forEach(function (product) {
      var productClone = productTemplate.content.cloneNode(true);
      console.log("TCL: //getAllProducts -> productClone", productClone);
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
  }); // dropdown shop list for subcatagorys

  if (catagoryURL === "Amplifiers") {
    var catagoryDropdownItems = document.querySelectorAll(".dropDown-item");
    catagoryDropdownItems.forEach(function (element) {
      element.classList.toggle("dropDown-item-toggle");
    });
  }
});