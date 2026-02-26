const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('sliderDots');
let current = 0;

// Generate dots
slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
});

function goTo(index) {
    slides[current].classList.remove('active');
    document.querySelectorAll('.dot')[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    document.querySelectorAll('.dot')[current].classList.add('active');
}

// Auto-advance every 3 seconds
setInterval(() => goTo(current + 1), 3000);

