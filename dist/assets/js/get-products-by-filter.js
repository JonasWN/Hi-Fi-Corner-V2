"use strict";

var filter = document.querySelector(".selectFilter");
var params = new URLSearchParams(window.location.search);
var catagoryURL = params.get("category");
var subCategory = params.get("subCatagory");
var tag = params.get("tag");
fetch("https://hifi-corner.herokuapp.com/api/v1/products?category=".concat(catagoryURL, "&minPrice=1000&maxPrice=4000"), {
  "method": "GET"
}).then(function (answer) {
  return answer.json();
}).then(function (response) {
  console.log(response);
})["catch"](function (error) {
  console.log("Something Went Wrong...");
  console.error(error);
});