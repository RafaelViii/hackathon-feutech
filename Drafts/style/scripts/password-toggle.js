document.addEventListener('DOMContentLoaded', function () {
  const passwordInput = document.getElementById('password');
  const toggleBtn = document.getElementById('toggle-password');
  const eyeIcon = document.getElementById('eye-icon');
  const eyeOffIcon = document.getElementById('eye-off-icon');
  toggleBtn.addEventListener('click', function () {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    eyeIcon.style.display = isPassword ? 'none' : '';
    eyeOffIcon.style.display = isPassword ? '' : 'none';
    toggleBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
  });
});