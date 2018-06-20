//Variables
var IDnextObstacle = 0;
var canvas = document.getElementById("mainscreen");
var ctx = canvas.getContext("2d");

var obstacles = [];
var colors = ["orange","yellow","green","red","gray","blue","black","pink"];

function drawMainScreen(){
  ctx.beginPath();
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for(var i = 0;i<obstacles.length;i++){
    ctx.beginPath();
    ctx.rect(obstacles[i].xPos,obstacles[i].yPos,obstacles[i].width,obstacles[i].height);
    ctx.fillStyle = colors[colors.length%i+1];
    ctx.fill();
    ctx.closePath();
  }

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
  roomSizeX = prompt("New width of the Room?","")
  roomSizeY = prompt("New length of the Room?","")
}
function sortBySize(){
  var tempArray = [];
  tempArray = obstacles.slice();
  var sortedArray = [];

  for (var i = 0; i < obstacles.length; i++) {
    var indexOfBiggestSize = 0;
    var biggestSize = 0;

    var arrayLength = tempArray.length;
    for (var y = 0; y < arrayLength; y++) {
      if(tempArray[y].height*tempArray[y].width>=biggestSize)
      {
        biggestSize = tempArray[y].height*tempArray[y].width;
        indexOfBiggestSize = y;
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
  var lastYPos = 0;

  var highestYPos = obstacles[0].height;

  for(i = 0;i<obstacles.length;i++){
    if(lastXPos + obstacles[i].width <= canvas.width){
      obstacles[i].xPos = lastXPos;
      obstacles[i].yPos = lastYPos;
      lastXPos += obstacles[i].width;
      if(obstacles[i].height>highestYPos){
        highestYPos=obstacles[i].height;
      }
    }
    else {
      lastYPos = highestYPos;
      lastXPos = 0;
      obstacles[i].xPos = lastXPos;
      lastXPos += obstacles[i].width;
      obstacles[i].yPos=lastYPos;
    }
  }
  drawMainScreen();
}
