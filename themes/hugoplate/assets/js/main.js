// main script
(function () {
  "use strict";

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.closest(".nav-item").classList.toggle("active");
    });
  });

  // Youtube
  // ----------------------------------------
  if (document.body.classList.contains("home")) {
    document.addEventListener('DOMContentLoaded', function() {
      const mainPlayer = document.getElementById('main-video-player');
      const mainTitle = document.getElementById('main-video-title');
      const mainDescription = document.getElementById('main-video-description');
      const thumbnails = document.querySelectorAll('.video-thumbnail');
      
      thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener('click', function() {
          const videoId = this.dataset.videoId;
          const title = this.dataset.title;
          const description = this.dataset.description;
          
          // Update main video player
          mainPlayer.src = `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&modestbranding=1`;
          
          // Update title and description
          mainTitle.textContent = title;
          mainDescription.textContent = description;
          
          // Remove active class from all thumbnails
          thumbnails.forEach(function(thumb) {
            thumb.classList.remove('active');
            thumb.querySelector('.active-indicator').style.opacity = '0';
          });
          
          // Add active class to clicked thumbnail
          this.classList.add('active');
          this.querySelector('.active-indicator').style.opacity = '1';
          
          // Smooth scroll to main video (optional)
          mainPlayer.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        });
      });
      
      // Set first video as active on page load
      const firstThumbnail = document.querySelector('.video-thumbnail.active');
      if (firstThumbnail) {
        firstThumbnail.querySelector('.active-indicator').style.opacity = '1';
      }
    });
  }
})();
