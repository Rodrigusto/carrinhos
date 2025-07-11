let currentSlide = 0;

function goToSlide(n) {
  currentSlide = n;
  const carousel = document.getElementById('carousel');
  carousel.style.transform = `translateX(-${n * 100}vw)`;
}

function nextSlide() {
  if (currentSlide < 2) {
    goToSlide(currentSlide + 1);
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    goToSlide(currentSlide - 1);
  }
}
