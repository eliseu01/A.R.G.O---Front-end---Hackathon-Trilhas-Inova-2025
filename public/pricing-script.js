const carousel = document.querySelector('.planos-carousel');
  const cards = Array.from(carousel.children);
  const originalCount = cards.length;
  const dotsContainer = document.querySelector('.dots');

  // 🔁 Clone the cards to simulate infinity
  for (let i = 0; i < 3; i++) {
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      carousel.appendChild(clone);
    });
  }

  // 🎯 Setup dots
  function updateDots(index) {
    const dotIndex = index % originalCount;
    document.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === dotIndex);
    });
  }

  // 📌 Ensure start from real content, not clone
  carousel.scrollLeft = 0;
  updateDots(0);

  // 🧠 Scroll detection and snapping
  let debounce;
  carousel.addEventListener('scroll', () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      const index = Math.round(carousel.scrollLeft / carousel.offsetWidth);
      updateDots(index);
      
      // Loop logic
      if (index >= cards.length + originalCount - 1) {
        // Reset to beginning of real cards
        carousel.scrollLeft = 0;
      }
    }, 100);
  });

  // 🔄 Optional autoplay
  setInterval(() => {
    let index = Math.round(carousel.scrollLeft / carousel.offsetWidth);
    carousel.scrollTo({
      left: (index + 1) * carousel.offsetWidth,
      behavior: 'smooth'
    });
  }, 5000);