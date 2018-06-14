//Variables
var canvas = document.getElementById("mainscreen");
var ctx = canvas.getContext("2d");

var obstacles = [];
function drawMainScreen(){
  ctx.fill();
  ctx.closePath();
}
function addObstacle(x,y,w,h){
  ctx.beginPath();
  var Obstacle = new Obstacle(x,y,w,h);
  ctx.rect(Obstacle.x,Obstacle.y,Obstacle.w,Obstacle.h);
}
