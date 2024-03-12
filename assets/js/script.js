window.addEventListener('scroll', function() {
    const separator = document.querySelector('.seperator');
    if (window.scrollY > 100) {
        separator.style.display = 'none';
    } else {
        separator.style.display = 'block';
    }
});

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    reset: true
});
sr.reveal('.hero-text', { delay: 200, origin: 'top' });
sr.reveal('.hero-img', { delay: 450, origin: 'top' });
sr.reveal('.scroll-down', { delay: 500, origin: 'right' });
sr.reveal('#about', { delay: 500, origin: 'top' });
sr.reveal('#toggle-icon', { delay: 500, origin: 'left' });