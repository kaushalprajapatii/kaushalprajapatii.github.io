document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    const closeBtn = document.querySelector('.close-btn');
    const navLinksMobile = document.querySelectorAll('.sidebar .nav-links li a');

    // Open sidebar when menu button is clicked
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.add('active');
        });
    }

    // Close sidebar when close button is clicked
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    }

    // Close sidebar when a navigation link is clicked (for better UX on mobile)
    navLinksMobile.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) {
                sidebar.classList.remove('active');
            }
        });
    });


    // --- Active Link Highlighting on Scroll (Your existing code) ---
    const sections = document.querySelectorAll('section');
    const navLinksDesktop = document.querySelectorAll('.sidebar .nav-links li a');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinksDesktop.forEach(link => {
                    link.classList.remove('active');
                });
                const correspondingLink = document.querySelector(`.sidebar .nav-links li a[href="#${entry.target.id}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    window.addEventListener('load', () => {
        const firstLink = document.querySelector('.sidebar .nav-links li a[href="#home"]');
        if (firstLink) {
             const activeLink = document.querySelector('.sidebar .nav-links li a.active');
             if(!activeLink) {
                firstLink.classList.add('active');
             }
        }
    });

});
