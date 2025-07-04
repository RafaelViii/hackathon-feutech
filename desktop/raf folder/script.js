// Dropdown menu toggle
function toggleDropdown(event) {
  event.preventDefault();
  const dropdown = event.target.closest('.dropdown');
  dropdown.classList.toggle('show');
  // Close dropdown if clicked outside
  document.addEventListener('click', function docListener(e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('show');
      document.removeEventListener('click', docListener);
    }
  });
}

// Scroll to section smoothly
function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (target) {
    window.scrollTo({
      top: target.offsetTop - 64, // adjust for navbar height
      behavior: 'smooth'
    });
  }
}

// Optional: Close dropdown on resize (mobile UX)
window.addEventListener('resize', () => {
  document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('show'));
});