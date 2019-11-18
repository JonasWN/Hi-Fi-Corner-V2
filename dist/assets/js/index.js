"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var imageSlide = document.querySelectorAll(".gallery-main__img ");
  var nextArrow = document.querySelector("#right-arrow");
  var prevArrow = document.querySelector("#left-arrow");
  var intervalTime = 3000;
  var slideInterval;

  var next = function next() {
    var current = document.querySelector(".active-image");
    current.classList.remove("active-image");

    if (current.nextElementSibling) {
      current.nextElementSibling.classList.add("active-image");
    } else {
      imageSlide[0].classList.add("active-image");
    }
  };

  var prev = function prev() {
    var current = document.querySelector(".active-image");
    current.classList.remove("active-image");

    if (current.previousElementSibling) {
      current.previousElementSibling.classList.add("active-image");
    } else {
      imageSlide[imageSlide.length - 1].classList.add("active-image");
    }
  };

  nextArrow.addEventListener("click", function (e) {
    next();
    clearInterval(next);
    clearInterval(slideInterval); // clears the interval timer when clicked

    slideInterval = setInterval(next, intervalTime); // calls the interval timer again
  });
  prevArrow.addEventListener("click", function (e) {
    prev();
    clearInterval(slideInterval); // clears the interval timer when clicked

    slideInterval = setInterval(next, intervalTime); // calls the interval timer again
  });
  slideInterval = setInterval(next, intervalTime); // calls function next with a 3 second interval
});