//Variables
var canvas = document.getElementById("mainscreen");
var ctx = canvas.getContext("2d");

function drawMainScreen(){
  ctx.beginPath();
  ctx.fill();

}
function addObstacle(){
  ctx.beginPath();
  ctx.rect(20, 40, 50, 50);
}
