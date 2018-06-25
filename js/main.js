//Variables
var canvas = document.getElementById("mainscreen");
var ctx = canvas.getContext("2d");

var obstacles = [];

var colors = ["red","green","blue","yellow","gray","black"];
var colorIndex=0;

function drawMainScreen(){
  ctx.beginPath();
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for(var i = 0;i<obstacles.length;i++){
    ctx.beginPath();
    ctx.rect(obstacles[i].xPos,obstacles[i].yPos,obstacles[i].width,obstacles[i].height);
    ctx.fillStyle = obstacles[i].color;

    ctx.fill();
    ctx.closePath();
  }
  ctx.closePath();
}
function setNextDrawColor(){
  colorIndex++;
  if(colorIndex>=colors.length){
    colorIndex=0;
  }
}
function addObstacle(){
  var x = document.getElementById("Xinput").value;
  var y = document.getElementById("Yinput").value;
  var w = document.getElementById("Winput").value;
  var h = document.getElementById("Hinput").value;
  var tempColor = colors[colorIndex];
  var tempObstacle = new Obstacle(x,y,w,h,tempColor);
  setNextDrawColor();
  obstacles.push(tempObstacle);

  drawMainScreen();
}
function reset(){
  obstacles = [];
  drawMainScreen();
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
function sortEfficient(){
  var freeSpace = [];
  var tempArray = [];
  sortBySize(obstacles);
  tempArray = obstacles.slice();
  var sortedArray = [];


  sortedArray.push(tempArray[0]);


  sortedArray.splice(0,1);



}

function listObstacles(){
  var lastXPos = 0;
  var lastYPos = 0;

  var deletedObjectsCounter = 0;

  var highestYPos = obstacles[0].height;

  for(i = 0;i<obstacles.length;i++){
    if(obstacles[i].width<=canvas.width&&obstacles[i].height<=canvas.height){
      if(lastXPos + obstacles[i].width <= canvas.width){
        obstacles[i].xPos = lastXPos;
        obstacles[i].yPos = lastYPos;
        lastXPos += obstacles[i].width;
        if(lastYPos+obstacles[i].height>highestYPos){
          highestYPos=obstacles[i].yPos;
        }
      }
      else {
        lastYPos = highestYPos;
        lastXPos = 0;
        obstacles[i].xPos = lastXPos;
        lastXPos += obstacles[i].width;
        obstacles[i].yPos=lastYPos;
        highestYPos=obstacles[i].yPos+obstacles[i].height;
      }
    }
    else{
      obstacles.splice(i,1);
      deletedObjectsCounter++;
      i--;
    }
  }
  if(deletedObjectsCounter>0){
    alert("Deleted "+deletedObjectsCounter+" Objects because they were to big!");
  }

  drawMainScreen();
}
