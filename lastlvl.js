var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState= "L2";
var y = 300;
var d = 70;
function preload() {
  
    img1 = loadImage('https://julesaur.github.io/hydroflask.png');
    img2 =loadImage ('https://julesaur.github.io/scaredham.jpg');
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
     fill(171, 146, 179);
   
image(img1, x, y, 50, 30, 30, 30);
    
 }}
    
fill(76,139,210);
  text("Last Level", width/2, height-20);
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
  image(img1, ballx, bally, 50, 30);
  
} // end level four
 

//level n_one
function leveln_one(){
  background(219, 215, 210);
  fill(201, 31, 55);
  textSize(28);
 text("Message", width/2, 40);
  textSize(18);
  text("No matter how many times you escape", 280, 180);
  text("there will always be anyone who resembles you", 280, 200);
  text("The End", 280, 240);
  image(img2, 170, 250, 250, 250);



} //end of game!!