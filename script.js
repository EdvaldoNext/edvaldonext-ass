let slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
}

// Inicializa o slider
showSlide(currentIndex);

// Slider automático
setInterval(() => {
    changeSlide(1);
}, 3000);

// Para o slider quando o mouse estiver sobre ele
document.querySelector('.slider-container').addEventListener('mouseenter', () => {
    clearInterval(sliderInterval);
});

// Retoma o slider quando o mouse sair
document.querySelector('.slider-container').addEventListener('mouseleave', () => {
    sliderInterval = setInterval(() => {
        changeSlide(1);
    }, 3000);
});

let sliderInterval = setInterval(() => {
    changeSlide(1);
}, 3000);
