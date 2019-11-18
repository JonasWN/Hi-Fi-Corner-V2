document.addEventListener("DOMContentLoaded", () => {

    const imageSlide = document.querySelectorAll(".gallery-main__img ");
    const nextArrow = document.querySelector("#right-arrow");
    const prevArrow = document.querySelector("#left-arrow");
    const intervalTime = 3000;
    let slideInterval;

    const next = () => {
        const current = document.querySelector(".active-image");
        current.classList.remove("active-image");

        if (current.nextElementSibling) {
            current.nextElementSibling.classList.add("active-image");
        } else {
            imageSlide[0].classList.add("active-image");
        }
    }
    const prev = () => {
        const current = document.querySelector(".active-image");
        current.classList.remove("active-image");

        if (current.previousElementSibling) {
            current.previousElementSibling.classList.add("active-image");
        } else {
            imageSlide[imageSlide.length - 1].classList.add("active-image");
        }
    }
    nextArrow.addEventListener("click", e => {
        next();
        clearInterval(next);
        clearInterval(slideInterval); // clears the interval timer when clicked
        slideInterval = setInterval(next, intervalTime); // calls the interval timer again
    })
    prevArrow.addEventListener("click", e => {
        prev();
        clearInterval(slideInterval); // clears the interval timer when clicked
        slideInterval = setInterval(next, intervalTime); // calls the interval timer again

    })
    slideInterval = setInterval(next, intervalTime); // calls function next with a 3 second interval
});