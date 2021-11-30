var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bird,birdIMG;
var backgroundIMG;
var bg;
var ob,ob2;
var pipeImage;
function preload()
{
	backgroundIMG=loadImage("back8.jpg");
  birdIMG=loadImage("bird5.png");
  //pipeImage=loadImage("pipe4.png");
}

function setup() {
	createCanvas(600,650);
  
  bg = createSprite(0,275);
  bg.addImage(backgroundIMG);
  bg.x=bg.width/1;
  bg.scale=2;
  bird = createSprite(100,300,30,30);
  bird.scale=0.1;
  bird.addImage(birdIMG);
}

function draw() {  
background("black");

if (gameState===PLAY){
bg.velocityX=-4;
if(bg.x<0){
  bg.x=bg.width/1;
}
if(keyDown("SPACE")){

  bird.velocityY=-22;
}
else{
  bird.velocityY=+4.5;
}

drawSprites();
spawnobstacles();
spawnobstacles2();
}
else if(ob.isTouching(bird)){
  gameState = END;
}
if (gameState === END) {
  bg.velocityX=0;
}
}

function spawnobstacles(){
  if(frameCount%60===0){
  ob = createSprite(800,50,20,300);
  ob.y=Math.round(random(50,130));
  ob.velocityX=-4;
  }
}

function spawnobstacles2(){
  if(frameCount%60===0){
  ob2 = createSprite(800,570,20,400);
  ob2.velocityX=-4;
  ob2.y=Math.round(random(600,580));
 // ob2.addImage(pipeImage);
  }
}
