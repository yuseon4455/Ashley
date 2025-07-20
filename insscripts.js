let currentSlide = 0;
const slidesToShow = 3.5; // 한 번에 보여줄 슬라이드 수
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides - (slidesToShow - 1)) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - slidesToShow;
    } else {
        currentSlide = index;
    }
    
    const offset = -currentSlide * (100 / slidesToShow);
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// 초기 슬라이드 표시
showSlide(currentSlide);
