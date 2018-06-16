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
  var x = document.getElementById("Xinput").value;
  var y = document.getElementById("Yinput").value;
  var w = document.getElementById("Winput").value;
  var h = document.getElementById("Hinput").value;
  var tempObstacle = new Obstacle(x,y,w,h);
  obstacles.push(tempObstacle);
  drawMainScreen();
}
function reset(){
  obstacles = [];
  drawMainScreen();
}
function resize() {
  roomSizeX=prompt("New width of the Room?","")
  roomSizeY=prompt("New lengt of the Room?","")
}
function sortBySize(){
  var tempArray = obstacles;
  var sortedAray = [];
  var biggestSize=0;
  var indexOfBiggestSize=0;
  var tempObstacle;

  for (var i = 0; i < obstacles.length; i++) {
    for (var i = 0; i < tempArray.length; i++) {
      if(tempArray[i].height+tempArray[i].width>biggestSize)
      {
        biggestSize=tempArray[i].height+tempArray[i].width;
        indexOfBiggestSize=i;
      }
    }
    sortedAray.push(tempArray[indexOfBiggestSize]);
    tempArray.splice(indexOfBiggestSize,1);
  }
  obstacles = sortedAray;
}
