const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});


// Featured Carousel Script
document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel__track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel__button--right');
    const prevButton = document.querySelector('.carousel__button--left');
    const indicators = Array.from(document.querySelectorAll('.carousel__indicator'));

    const slideWidth = slides[0].getBoundingClientRect().width;
    const slidesToShow = 3;
    let currentIndex = 0;

    function updateCarousel() {
        const newTransformValue = -slideWidth * currentIndex;
        track.style.transform = `translateX(${newTransformValue}px)`;

        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    nextButton.addEventListener('click', function () {
        if (currentIndex < slides.length - slidesToShow) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function () {
            currentIndex = index;
            updateCarousel();
        });
    });

    updateCarousel();
});


// Brand Carousel Script
document.addEventListener('DOMContentLoaded', function () {

    const brandTrack = document.querySelector('.brand-carousel__track');
    const brandSlides = Array.from(brandTrack.children);
    const brandNextButton = document.querySelector('.brand-carousel__button--right');
    const brandPrevButton = document.querySelector('.brand-carousel__button--left');

    const brandSlideWidth = brandSlides[0].getBoundingClientRect().width;
    const brandSlidesToShow = 5;

    let brandCurrentIndex = 0;

    function updateBrandCarousel() {
        const newTransformValue = -brandSlideWidth * brandCurrentIndex;
        brandTrack.style.transform = `translateX(${newTransformValue}px)`;
    }

    brandNextButton.addEventListener('click', function () {
        if (brandCurrentIndex < brandSlides.length - brandSlidesToShow) {
            brandCurrentIndex++;
            updateBrandCarousel();
        }
    });

    brandPrevButton.addEventListener('click', function () {
        if (brandCurrentIndex > 0) {
            brandCurrentIndex--;
            updateBrandCarousel();
        }
    });

    updateBrandCarousel();
});



const featured = document.getElementsByClassName("carousel__slide");
Array.from(featured).forEach(element => {
    element.addEventListener("click", () => {
        window.location.href = "index.html";
    });
});


//promotional script
const promotional = document.getElementsByClassName('promotional')[0];
promotional.addEventListener("click", () => {
    window.location.href = "index.html";
})


const logo = document.getElementsByClassName('logo')[0];
logo.addEventListener("click", () => {
    window.location.href = "index.html";
})