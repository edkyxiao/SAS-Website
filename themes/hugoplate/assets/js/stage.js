document.addEventListener('DOMContentLoaded', function() {
  const image = document.getElementById('mode-image');
  const button = document.getElementById('toggle-image-mode');
  const buttonImage = document.getElementById('button-icon');
  
  if (image && button && buttonImage) {
    let isLight = true;
    
    button.addEventListener('click', function() {
      // Fade out the image
      image.style.opacity = '0';
      
      setTimeout(() => {
        // Change main image
        image.src = isLight ? '/images/stage_dark.png' : '/images/stage_light.png';
        // Change button icon image
        buttonImage.src = isLight ? '/images/white_sun_icon.png' : '/images/black_sun_icon.png';
        // Fade back in
        image.style.opacity = '1';
        // Toggle state
        isLight = !isLight;
      }, 300);
    });
  }
});