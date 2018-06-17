//Variables
var IDnextObstacle=0;
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
  var tempObstacle = new Obstacle(x,y,w,h,IDnextObstacle);
  obstacles.push(tempObstacle);
  IDnextObstacle++;
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
  var sortedArray = [];
  alert(obstacles.length);
  for (var a = 0; a < obstacles.length; a++) {alert(a);}

  for (var i = 0; i < obstacles.length; i++) {
    var indexOfBiggestSize=0;
    var biggestSize=0;

    var arrayLength=tempArray.length;
    alert(i);
    for (var y = 0; y < arrayLength; y++) {
      if(tempArray[y].height*tempArray[y].width>=biggestSize)
      {
        biggestSize=tempArray[y].height*tempArray[y].width;
        indexOfBiggestSize=y;
      }
    }
    sortedArray.push(tempArray[indexOfBiggestSize]);
    tempArray.splice(indexOfBiggestSize,1);
  }
  obstacles = sortedArray;
  listObstacles();
}
function listObstacles(){
  var lastXPos = 0;
  for(i=0;i<obstacles.length;i++){
    obstacles[i].xPos=lastXPos;
    lastXPos +=obstacles[i].width;
  }
  drawMainScreen();
}
