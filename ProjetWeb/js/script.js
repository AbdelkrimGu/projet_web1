
// login

var log = document.getElementById('login')
var signup = document.getElementById('signup')
function login() {
    log.style.display = "block";
    signup.style.display = "none";
}

function create_acc() {
    signup.style.display = "block";
    log.style.display = "none";
}

// active a in side

var sideb = document.querySelector(".sidebar")
var links = sideb.getElementsByClassName("btn");

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}

// end

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

// menu
var main = document.getElementById("main");
var menu = document.getElementById("burger");
var sidebar = document.getElementById("sidebar");

menu.addEventListener('click', function () {
    sidebar.classList.toggle("show-sidebar");
    main.classList.toggle("show-margin");

});

// Dark-mode

var dark = document.getElementById("darkm");
dark.addEventListener('click', function () {
    var bod = document.querySelector("body").style;
    if (dark.checked) {
        bod.setProperty('--main-color', "#1B262C");
        bod.setProperty('--side-color', "#202d3f");
        bod.setProperty('--premiere-color', "#fff");
        bod.setProperty('--seconde-color', "#202d3f");
        document.getElementById("logo_img").src = "../ProjetWeb/ressource/lo.png";
    }
    else {
        bod.setProperty('--main-color', "rgb(248, 247, 247)");
        bod.setProperty('--side-color', "#E9EDF3");
        bod.setProperty('--premiere-color', "#202d3f");
        bod.setProperty('--seconde-color', "#fff");
        document.getElementById("logo_img").src = "../ProjetWeb/ressource/lo.png";
    }
})

// end


function ret(e) {
    var all_div = document.querySelectorAll("section > div");
    for (var i = 0; i < all_div.length; i++) {
        all_div[i].style.display = "none";
    }
    var a = document.getElementById(e)
    a.style.display = "block"
}


// enlever search bar
var quizz = document.getElementsByClassName("quiz");
for (var i = 0; i < quizz.length; i++) {
    quizz[i].addEventListener("click", function () {
        document.getElementById("searchform").style.display = "none";
    })
}

// end

//slide
var current_step, next_step, previous_step;

$(".next").click(function () {
    current_step = $(this).parent();
    next_step = $(this).parent().next();
    next_step.show();
    current_step.hide()
});

$(".prev").click(function () {
    current_step = $(this).parent();
    previous_step = $(this).parent().prev();
    previous_step.show();
    current_step.hide();
});
    //end

