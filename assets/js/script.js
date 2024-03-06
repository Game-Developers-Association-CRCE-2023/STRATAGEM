let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

// Function to toggle menu and navigation list
function toggleMenu() {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

// Event listener for menu icon click
menu.onclick = () => {
    toggleMenu();
};

// Event listener for window resize
window.addEventListener('resize', () => {
    // Check screen width and close the menu if it's a larger screen
    if (window.innerWidth > 990) {
        navlist.classList.remove('open');
        menu.classList.remove('bx-x');
    }
});

// ScrollReveal initialization
const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

// Reveal animations
sr.reveal('.hero-text', { delay: 200, origin: 'top' });
sr.reveal('.hero-img', { delay: 450, origin: 'top' });
sr.reveal('.icons', { delay: 500, origin: 'left' });
sr.reveal('.scroll-down', { delay: 500, origin: 'right' });
