const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.sidebar .nav-links li a');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
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