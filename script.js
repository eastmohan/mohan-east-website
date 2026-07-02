const carousels = document.querySelectorAll('.carousel-container');

carousels.forEach((carousel) => {
  const track = carousel.querySelector('.carousel-track');
  const slides = carousel.querySelectorAll('.carousel-slide');
  const prevBtn = carousel.querySelector('.prev-btn');
  const nextBtn = carousel.querySelector('.next-btn');

  let currentIndex = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });
});
