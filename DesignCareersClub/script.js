document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");


  var teamButton = document.getElementsByClassName("team-button");
  var dccImage = document.getElementById("dcc-main-image");
  var dccImgs = ["img/team1a.jpg", "img/team4a.jpg", "img/team2a.jpg", "img/team3a.jpg", "img/team5a.jpg", "img/team6.jpg", "img/team7a.jpg", "img/team8a.jpg", "img/team9.jpg", "img/team10.jpg"];
  var sillyPics = ["img/team1b.jpg", "img/team4b.jpg", "img/team2b.jpg", "img/team3b.jpg", "img/team5b.jpg", "img/team6.jpg", "img/team7b.jpg", "img/team8b.jpg", "img/team9.jpg", "img/team10.jpg"]
  var teamDesc = document.getElementsByClassName("desc");

  var input = document.getElementById("checkbox");

for (var i = 0; i < teamButton.length; i++) {
  (function(index){
    teamButton[index].addEventListener("click", function(){
      console.log(index);
      for (var x = 0; x < teamDesc.length; x++){
        teamDesc[x].style = "display:none;";
      }
      if (input.checked == true){
        dccImage.src = sillyPics[index];
      } else if (input.checked == false) {
        dccImage.src = dccImgs[index];
      }
      teamDesc[index].style = "display:block;";
      })
    }) (i);
  }
});
