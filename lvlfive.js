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


    fill(0);
  text(("Found Me " + score ), width/2, 40);
  
    if (gameState=="L01"){
   leveln_one();  
  }

  

} // end draw


function levelTwo() {
  
for (var y = 0;   y <=  height;  y +=  40) {    
 for (var x = 0;   x <=  width   ;  x +=  40) {
   noStroke();
     fill(136,134,134);
    ellipse(x ,  y, 30, 30);
image(img1, x, y, 50, 30, 10, 10);
    
 }}
    
fill(255);
  text("Level 5", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/1){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>15){
// level 3
   gameState = "L01";
      }
  fill(136,134,134);
  ellipse(ballx, bally, 30, 30);
  
} // end level four
 

//level n_one
function leveln_one(){
  background(244,135,135);
  fill(136,134,134);
  textSize(28);
 text("Message", width/2, 40);
  textSize(18);
  text("Please end this misey", 280, 180);
  text("Seeing dabbing cats is already a pain in the ass", 280, 200);
fill(136,134,134)
ellipse(290, 290, 60, 60);
    textSize(55);
   text("🥴",290, 308);

  




} //end of game!!