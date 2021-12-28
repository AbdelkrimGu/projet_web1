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

var burg = document.getElementById("burger");
var main = document.getElementById("main");


burg.addEventListener("click", function (event) {

    
    if (sideb.style.width == "0px" ) {
        sideb.style.width = "200px";
        document.getElementById("main").style.marginLeft = "200px";
    }
    else {
        sideb.style.width = "0";
        document.getElementById("main").style.marginLeft = "0px";


    };

})


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



  var menu = document.getElementById("burger");
  var sidebar = document.getElementById("sidebar");

  menu.addEventListener('click' , function(){
      sidebar.classList.toggle("show-sidebar");
  });
