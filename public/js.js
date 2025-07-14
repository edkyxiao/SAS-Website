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
    fetch('w3_menu.html')
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
    fetch('w3_end.html')
        .then(response => response.text())
        .then(html => document.getElementById('end_container').innerHTML = html);

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

    window.addEventListener('DOMContentLoaded', () => {
        const message_sent = document.getElementById('message_sent');
        const contact_form = document.getElementById('contact_form');

        if (message_sent && contact_form) {
            setTimeout(() => {
                message_sent.style.display = 'none';
                contact_form.style.display = 'block';
            }, 1000);
        }
    })
});
