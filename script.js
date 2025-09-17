et currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto-slide a cada 5 segundos
setInterval(() => {
    changeSlide(1);
}, 5000);

// Inicializar o primeiro slide
showSlide(currentSlide);