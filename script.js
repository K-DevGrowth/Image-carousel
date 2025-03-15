const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const mySlides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;

const currentSlide = (num) => {
    showSlide(num);
}

const showSlide = (num) => {
    if (num >= mySlides.length) slideIndex = 0;
    else if (num < 0) slideIndex = mySlides.length - 1;
    else slideIndex = num;

    mySlides.forEach((slide, index) => {
        slide.style.display = "none";
        dots[index].style.backgroundColor = "aqua";
    })

    mySlides[slideIndex].style.display = "block";
    dots[slideIndex].style.backgroundColor = "red";
}

const autoSlide = () => {
    showSlide(slideIndex + 1);
    setTimeout(autoSlide, 5000);
}

nextBtn.addEventListener("click", () => {
    showSlide(slideIndex + 1);
});

prevBtn.addEventListener("click", () => {
    showSlide(slideIndex - 1);
});

showSlide(slideIndex);
setTimeout(autoSlide, 5000);