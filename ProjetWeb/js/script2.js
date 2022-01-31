// Dark-mode

var dark = document.getElementById("darkm");
dark.addEventListener('click', function () {
    var bod = document.querySelector("body").style;
    if (dark.checked) {
        bod.setProperty('--main-color', "#202d3f");
        bod.setProperty('--premiere-color', "#064663");
        bod.setProperty('--seconde-color', "#fff");
        document.getElementById("logo_img").src = "../ProjetWeb/ressource/lo.png";
        document.getElementById("moon").style.display = "block";
        document.getElementById("sun").style.display = "none";
        scroll(0,1);

    }
    else {
        bod.setProperty('--main-color', "#E9EDF3");
        bod.setProperty('--premiere-color', "#fff");
        bod.setProperty('--seconde-color', "#064663");
        document.getElementById("logo_img").src = "../ProjetWeb/ressource/lo1.png";
        document.getElementById("moon").style.display = "none";
        document.getElementById("sun").style.display = "block";
        scroll(0,.1);
    }
    
})

// end
const navbar = document.querySelector('header');
window.onscroll = () => {
    if (window.scrollY > 80) {
        if (!dark.checked) {
            navbar.classList.add('nav-active');
        } else {
            navbar.classList.add('nav-active-dark');
        }

    } else {
        navbar.classList.remove('nav-active');
        navbar.classList.remove('nav-active-dark');
    }
};

// scroll
ScrollReveal().reveal('.card', {
    duration: 2000,
    distance: '200px',
    easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    origin: 'right',
    viewFactor: 0.2
});
ScrollReveal().reveal('.img', {
    duration: 3000,
    distance: '150px',
    easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    origin: 'left',
    viewFactor: 0.2
});
ScrollReveal().reveal('.a2', {
    duration: 3000,
    distance: '150px',
    easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    origin: 'right',
    viewFactor: 0.2
});
// end 