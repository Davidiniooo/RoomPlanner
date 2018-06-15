//Variables
var canvas = document.getElementById("mainscreen");
var ctx = canvas.getContext("2d");

var obstacles = [];

function drawMainScreen(){
  ctx.beginPath();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0;i<obstacles.length;i++){
      ctx.rect(obstacles[i].xPos,obstacles[i].yPos,obstacles[i].width,obstacles[i].height);
  }
  ctx.fill();
  ctx.closePath();
}
function addObstacle(){
  var x = prompt("X-Pos?","");
  var y = prompt("Y-Pos?","");
  var w = prompt("Width?","");
  var h = prompt("Height?","");
  var tempObstacle = new Obstacle(x,y,w,h);
  obstacles.push(tempObstacle);
}
function reset(){
  for(var i = 0;i<obstacles.length;i++){
    obstacles.pop();
  }
  drawMainScreen();
}
