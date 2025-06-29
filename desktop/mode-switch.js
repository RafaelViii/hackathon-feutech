// Place in a script tag or separate JS file, and load after the navbar is rendered
const modeSwitch = document.getElementById('modeSwitch');
const modeIcon = document.getElementById('modeSwitchIcon');
const modeText = document.getElementById('modeSwitchText');

function setMode(light) {
  if(light) {
    document.body.classList.add('lightmode');
    modeSwitch.classList.add('light');
    modeIcon.textContent = '☀️';
    modeText.textContent = 'Light Mode';
  } else {
    document.body.classList.remove('lightmode');
    modeSwitch.classList.remove('light');
    modeIcon.textContent = '🌙';
    modeText.textContent = 'Dark Mode';
  }
}

// Persist mode with localStorage
function getTheme() {
  return localStorage.getItem('theme') || 'dark';
}
function saveTheme(theme) {
  localStorage.setItem('theme', theme);
}

document.addEventListener('DOMContentLoaded', () => {
  // Set initial mode
  setMode(getTheme() === 'light');

  // Toggle on click
  modeSwitch.addEventListener('click', () => {
    const isLight = document.body.classList.contains('lightmode');
    setMode(!isLight);
    saveTheme(!isLight ? 'light' : 'dark');
  });
});