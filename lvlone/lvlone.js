var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState= "L1";
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
  background(111, 222, 196);
  fill(237, 34, 93);
  
  if (gameState=="L1"){
  levelOne();
  } 


    fill(255);
  text(("Found Me " + score), width/2, 40);
  
    if (gameState=="L01"){
   leveln_one();  
  }

  

} // end draw


function levelOne(){
  
 for (var y = 0;   y <=  height;  y +=  40) {    
 for (var x = 0;   x <=  width   ;  x +=  40) {
     ellipse(x ,  y, 40, 40);
 }}
  
fill(255);
  text("Level 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>14){
// call level 2
 // fill(random(255));
 gameState= "L01";
  }
  fill(237, 34, 93);
  ellipse(ballx, bally, ballSize, ballSize);
  vertex(ballx, bally, mouseX, mouseY);
  
} // end level one
 

//level n_one
function leveln_one(){
  background(111, 222, 196);
  textSize(28);
 text("Message", width/2, 40);
  textSize(18);
  text("I must get out of here",290, 160);
  text("I don't think I could stay in a place where everyone looks like me", 280, 180);
  fill(237, 34, 93)
ellipse(290, 300, 80, 80);
  fill(239, 222, 205)
    textSize(18);
   text("(￣ヘ￣)",293, 308);
  textSize(40);

  text("凸", 230, 308)

} //end of game!!
