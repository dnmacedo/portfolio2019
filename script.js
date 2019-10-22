document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");

var menu = document.getElementById('menu');
var nav = document.getElementsByTagName('nav')[0];
var close = document.getElementById('close');
var header = document.getElementsByTagName('header')[0];
var about = document.getElementById('about-link');

var github = document.getElementById("github-icon");
var ig = document.getElementById("ig-icon");
var linkedin = document.getElementById("linkedin-icon");

menu.addEventListener('click', function openNav(){
    console.log("clicked");
    nav.style.display = "block";
    header.style.height = "100%";
    // add a fade up?
});

close.addEventListener('click', function closeNav(){
  nav.style.display = "none";
  header.style.height = "auto";
});

about.addEventListener('click', closeNav());

if (screen.width < 768){
  github.src = "img/github-icon-white.png";
  ig.src = "img/ig-icon-white.png";
  linkedin.src = "img/linkedin-icon-white.png";
}
else {
  github.src = "img/github-icon.svg";
  ig.src = "img/ig-icon.png";
  linkedin.src = "img/linkedin-icon.png";
}
});
// add a cursor hover
