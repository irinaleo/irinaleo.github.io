const tslide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const logo = document.querySelector('.logo');

    burger.addEventListener('click', () => {
        // toggle nav
        nav.classList.toggle('nav-active');
        
        // animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        // animate burger
        burger.classList.toggle('toggle');
    });

    logo.addEventListener('click', function(e) {
        window.location.href = 'index.html';
    });
}

tslide();
