
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

    if (sideb.style.width == "0px") {
        sideb.style.width = "200px";
        main.style.marginLeft = "200px";
    }
    else {
        sideb.style.width = "0";
        main.style.marginLeft = "0px";
    };

});

// Dark-mode

var dark = document.getElementById("darkm");
dark.addEventListener('click', function () {
    var bod = document.querySelector("body").style;
    if (dark.checked) {
        bod.setProperty('--main-color', "#1B262C");
        bod.setProperty('--side-color', "#064663");
        bod.setProperty('--premiere-color', "#fff");
        bod.setProperty('--seconde-color', "#064663");
    }
    else {
        bod.setProperty('--main-color', "rgb(248, 247, 247)");
        bod.setProperty('--side-color', "#ddd");
        bod.setProperty('--premiere-color', "#064663");
        bod.setProperty('--seconde-color', "#fff");
    }
})

// end
