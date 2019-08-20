document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");
  // LBC WEBSITE
    var newWeb = document.getElementById("new-website");
    var oldWeb = document.getElementById("old-website");
    var webPic = document.getElementById("website-pic");
  // LBC LOGO
    var newLogo = document.getElementById("new-logo");
    var oldLogo = document.getElementById("old-logo");
    var logoPic = document.getElementById("logo-pic");

    newWeb.addEventListener("click", function(){
      webPic.src="img/Website1.jpg";
    });
    oldWeb.addEventListener("click", function(){
      webPic.src="img/Old_Website.png";
    });
    newLogo.addEventListener("click", function(){
      logoPic.src = "img/LeathermanLogo2.png";
      logoPic.style = "margin: 20px 100px 50px 100px;";
    });
    oldLogo.addEventListener("click", function(){
      logoPic.src = "img/Current-Logo.jpg";
      logoPic.style = "margin:100px 100px 50px 100px;";
    });
  });
