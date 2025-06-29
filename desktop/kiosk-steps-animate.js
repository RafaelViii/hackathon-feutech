// Add this JavaScript at the end of your HTML or in a JS file
// It uses IntersectionObserver for scroll-in animation

document.addEventListener('DOMContentLoaded', function () {
  const kioskSteps = document.getElementById('kioskSteps');
  if (!kioskSteps) return;
  
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        kioskSteps.classList.add('visible');
      } else {
        kioskSteps.classList.remove('visible');
      }
    },
    {
      threshold: 0.3
    }
  );
  observer.observe(kioskSteps);
});