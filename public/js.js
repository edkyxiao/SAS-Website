document.addEventListener("DOMContentLoaded", () => {  
    // Language toggle
    function setLanguage(lang) {
        localStorage.setItem('language', lang);

        document.querySelectorAll('[data-en][data-zh]').forEach(el => {
            let text = el.getAttribute(lang === 'zh' ? 'data-zh' : 'data-en');
            text = text.replace(/\\n/g, '<br>');
            el.innerHTML = text;
        });

        const toggleLanguage = document.getElementById('toggleLanguage');
        if (toggleLanguage) {
            toggleLanguage.textContent = lang === 'zh' ? '中文 -> ENG' : 'ENG -> 中文';
        }
    }

    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);

    // Display menu
    fetch('menu.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('menu_container').innerHTML = html;
            
            // Toggle language button
            const toggleButton = document.getElementById('toggleLanguage');
            if (toggleButton) {
                toggleButton.addEventListener('click', () => {
                    const newLang = localStorage.getItem('language') === 'zh' ? 'en' : 'zh';
                    setLanguage(newLang);
                });
            }

            // Menu
            const navItems = [
                { id: 'aboutHeadingMenu', url: 'about.html' },
                { id: 'teachersHeading', url: 'teachers.html' },
                { id: 'lessonsHeading', url: 'lessons.html' },
                { id: 'productsHeading', url: 'products.html' },
                { id: 'stageHeading', url: 'stage.html' },
                { id: 'contactHeading', url: 'contact.html' }
            ];

            navItems.forEach(({ id, url }) => {
                const el = document.getElementById(id);
                if (el) {
                    el.addEventListener("click", () => {
                        window.location.href = url;
                    });
                }
            });

            const toggleBtn = document.getElementById("menuToggle");
            const menu = document.getElementById("menuMore");
            const title = document.getElementById("title");
            if (toggleBtn && menu) {
                toggleBtn.addEventListener("click", function () {
                    menu.classList.toggle("show");
                    title.classList.toggle("hide");
                });
            } else {
                console.error("menuToggle or menuMore not found.");
            }

            // Back to top
            const backToTop = document.getElementById('backToTop');
            if (backToTop) {
                window.addEventListener('scroll', () => {
                    backToTop.style.display = window.scrollY > 400 ? 'block' : 'none';
                });
                backToTop.addEventListener('click', () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }
        });

    // Display end
    fetch('end.html')
        .then(response => response.text())
        .then(html => document.getElementById('end_container').innerHTML = html);

    // Logo to home
    const logoMenu = document.getElementById('logo');
    if (logoMenu) {
        logoMenu.addEventListener('click', () => {
            window.location.href = "home.html";
        });
    }

    // About, learn more
    const aboutLearnMore = document.getElementById('about_learn_more');
    if (aboutLearnMore) {
        aboutLearnMore.addEventListener('click', () => {
            window.location.href = "about.html";
        });
    }

    // Student videos
    const thumbnails = document.querySelectorAll(".row_videos img");
    const mainVideo = document.querySelector(".main_video iframe");
    const mainVideoContainer = document.querySelector(".main_video");

    if (thumbnails.length > 0 && mainVideo) {
        thumbnails.forEach((thumb) => {
            thumb.addEventListener("click", () => {
                const videoId = thumb.dataset.videoId;
                const newSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`;

                mainVideo.src = newSrc;

                thumbnails.forEach(t => t.classList.remove("selected"));
                thumb.classList.add("selected");

                if (mainVideoContainer) {
                    mainVideoContainer.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
                }
            });
        });

        thumbnails[0].classList.add("selected");
    }

    // Products
    const drumsticks = document.getElementById('drumsticks');
    if (drumsticks) {
        drumsticks.addEventListener('click', () => {
            window.location.href = "drumsticks.html";
        });
    }
    const mallets = document.getElementById('mallets');
    if (mallets) {
        mallets.addEventListener('click', () => {
            window.location.href = "mallets.html";
        });
    }
    const pad = document.getElementById('pad');
    if (pad) {
        pad.addEventListener('click', () => {
            window.location.href = "pad.html";
        });
    }
    const stand = document.getElementById('stand');
    if (stand) {
        stand.addEventListener('click', () => {
            window.location.href = "stand.html";
        });
    }
    const kit_battleship = document.getElementById('kit_battleship');
    if (kit_battleship) {
        kit_battleship.addEventListener('click', () => {
            window.location.href = "kit_battleship.html";
        });
    }
    const kit_studio = document.getElementById('kit_studio');
    if (kit_studio) {
        kit_studio.addEventListener('click', () => {
            window.location.href = "kit_studio.html";
        });
    }
    const kit_artist = document.getElementById('kit_artist');
    if (kit_artist) {
        kit_artist.addEventListener('click', () => {
            window.location.href = "kit_artist.html";
        });
    }
    const video = document.getElementById('video');
    if (video) {
        video.addEventListener('click', () => {
            window.location.href = "video.html";
        });
    }

    // Stage
    const image = document.getElementById('mode-image');
    const button = document.getElementById('toggle-image-mode');  // <button>
    const buttonImage = document.getElementById('button-icon');   // <img> inside button

    let isLight = true;

    button.addEventListener('click', function() {
        // Fade out the image
        image.style.opacity = 0;

        setTimeout(() => {
            // Change main image
            image.src = isLight ? 'images/stage_dark.png' : 'images/stage_light.png';

            // Change button icon image
            buttonImage.src = isLight ? 'images/white_sun_icon.png' : 'images/black_sun_icon.png';

            // Fade back in
            image.style.opacity = 1;

            // Toggle state
            isLight = !isLight;
        }, 300);
    });
});
