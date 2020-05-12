var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState= "L2";
var y = 300;
var d = 70;

function preload() {
  
    img1 = loadImage('https://julesaur.github.io/dabvictory.gif');
}
function setup() {
  createCanvas(600, 550);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {

  
  if (gameState=="L2"){
  levelTwo();
  } 


    fill(255);
  text(("Found Me " + score ), width/2, 40);
  
    if (gameState=="L01"){
   leveln_one();  
  }

  

} // end draw


function levelTwo() {
  
for (var y = 0;   y <=  height;  y +=  40) {    
 for (var x = 0;   x <=  width   ;  x +=  40) {
     fill(255,186,186);
     rect(x ,  y, 40, 40);
 }}
    
fill(255);
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/1){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>14){
// level 3
   gameState = "L01";
      }
  
  fill(255,186,186);
  rect(ballx, bally, ballSize, ballSize);
  
} // end level two
 

//level n_one
function leveln_one(){
  background(51,41,34);
  textSize(28);
 text("Message", width/2, 40);
  textSize(18);
  text("Free from those posers",290, 160);
  text("It was hell when looking at the mirror all day", 280, 180);
  fill(255,186,186)
rect(263, 275, 60, 60);
  fill(51,41,34)
    textSize(14);
   text("o(TヘTo)",293, 308);

} //end of game!!