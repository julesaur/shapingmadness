var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState= "L2";
var y = 300;
var d = 70;

function setup() {
  createCanvas(600, 550);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {

  
  if (gameState=="L2"){
  levelTwo();
  } 


    fill(0);
  text(("Found Me " + score ), width/2, 40);
  
    if (gameState=="L01"){
   leveln_one();  
  }

  

} // end draw


function levelTwo() {
  
for (var y = 0;   y <=  height;  y +=  40) {    
 for (var x = 0;   x <=  width   ;  x +=  40) {
     fill(171, 146, 179);
     rect(x ,  y, 40, 40);
            fill(255);
     rect(x ,  y, 20, 40);
      fill(171, 146, 179);
     rect(x ,  y, 60, 20);
    
 }}
    
fill(0);
  text("Level 4", width/2, height-20);
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

  fill(171, 146, 179);
  rect(ballx, bally, 20, 20);
  
} // end level four
 

//level n_one
function leveln_one(){
  background(255);
  fill(171, 146, 179);
  textSize(28);
 text("Message", width/2, 40);
  textSize(18);
  text("A Quote by Judy Garland:", 280, 180);
  text("''Always be a first-rate of yourself,", 280, 200);
  text("instead of a second-rate of somebody else''", 280, 220);
  fill(171, 146, 179)
  noStroke();
rect(263, 275, 20, 20);
  fill(51,41,34)
    textSize(20);
   text("🌺",280, 280);

} //end of game!!