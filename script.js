document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");

var menu = document.getElementById('menu');
var nav = document.getElementById('mobile-nav');
var close = document.getElementById('close');

var github = document.getElementById("github-icon");
var ig = document.getElementById("ig-icon");
var linkedin = document.getElementById("linkedin-icon");

menu.addEventListener('click', function(){
  nav.style.display = "block";
  // add a fade up?
});

close.addEventListener('click', function(){
  nav.style.display = "none";
});

if (screen.width < 480){
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
