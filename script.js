const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let slides = 1;

const currentSlide = (num) => {
    slides = num || 1;
    showSlide(slides);
}

const showSlide = (num) => {
    const mySlides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".dot");

    mySlides.forEach((slide, index) => {
        slide.style.display = "none";
        dots[index].style.backgroundColor = "aqua";
    })

    mySlides[num - 1].style.display = "block";
    dots[num - 1].style.backgroundColor = "red";
}

showSlide(slides);

nextBtn.addEventListener("click", () => {
    if (slides < 3) {
        showSlide(slides += 1);
    }
});

prevBtn.addEventListener("click", () => {
    if (slides > 1) {
        showSlide(slides -= 1);
    }
});
