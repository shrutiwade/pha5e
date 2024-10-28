const heroSection = document.querySelector('.hero-section');

heroSection.addEventListener('mousemove', (e) => {
  const { offsetX, offsetY } = e;
  const { clientWidth, clientHeight } = heroSection;

  const moveX = (offsetX / clientWidth - 0.5) * 20;
  const moveY = (offsetY / clientHeight - 0.5) * 20;

  heroSection.style.backgroundPosition = `${50 + moveX}% ${50 + moveY}%`;
});
