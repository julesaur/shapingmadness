var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState= "L3";
var y = 300;
var d = 70;


function setup() {
  createCanvas(600, 550);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {

  
  if (gameState=="L3"){
  levelThree();
  } 


    fill(255);
  text(("Found Me " + score ), width/2, 40);
  
    if (gameState=="L01"){
   leveln_one();  
  }

  

} // end draw


function levelThree() {
  
 background(111,222,196);
  stroke(57,210,174);
    fill(57,210,174);
   for (var y = 0;   y <=  height;  y +=  40) {    
 for (var x = 0;   x <=  width   ;  x +=  40) {
     ellipse(x ,  y, 40, 40);
 }}
  fill(255);
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>14){
// level 3
   gameState = "L01";
      }
  
     fill(57,210,174);
  ellipse(ballx, bally, ballSize, ballSize);
  
} // end level two
 

//level n_one
function leveln_one(){
  background(111,222,196);
  textSize(28);
 text("Message", width/2, 40);
  textSize(18);
  text("That must've been tough huh?",290, 160);
  text("It's only the beginning", 280, 180);
  fill(57,210,174)
ellipse(290, 300, 60, 60);
  fill(255)
    textSize(18);
   text("ᕕ   ( ᐛ ) ᕗ",293, 308);

} 