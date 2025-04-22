// Video Play/Pause with Icon
const video = document.getElementById('featureVideo');
const playIcon = document.getElementById('playIcon');

video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playIcon.style.display = 'none';
    } else {
        video.pause();
        playIcon.style.display = 'block';
    }
});

video.addEventListener('pause', () => {
    playIcon.style.display = 'block';
});

video.addEventListener('play', () => {
    playIcon.style.display = 'none';
});

// Testimonial Carousel
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            dots[i].classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

setInterval(nextSlide, 5000);
showSlide(currentIndex);

// Modal Logic
const form = document.getElementById('contactForm');
const modal = document.getElementById('confirmationModal');
const closeModal = document.getElementById('closeModal');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
});