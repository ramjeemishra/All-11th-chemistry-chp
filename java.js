const hamburger = document.querySelector('.hamburger');
hamburger.onclick = function() {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("activa");
};





// preloader 

var loader = document.getElementById("preloader");

window.addEventListener("load" , function () {
  loader.style.display= "none";
});






