(function() {
  const toggleBtn = document.getElementById('toggle-image-mode');
  const lightImg = document.getElementById('image-light');
  const darkImg = document.getElementById('image-dark');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');

  if (!toggleBtn || !lightImg || !darkImg || !sunIcon || !moonIcon) return;

  let isDark = false;

  toggleBtn.addEventListener('click', function() {
    isDark = !isDark;

    if (isDark) {
      lightImg.classList.remove('visible');
      darkImg.classList.add('visible');

      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      darkImg.classList.remove('visible');
      lightImg.classList.add('visible');

      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  });
})();
