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

    // Images
    const images = document.querySelectorAll('.fade_image');

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('visible');   // fade in
        } else {
        entry.target.classList.remove('visible'); // fade out when scrolled past
        }
    });
    }, { threshold: 0.2 }); // 20% of image must be visible

    images.forEach(img => observer.observe(img));

});