var PLAY = 1;
var END = 0;
var gameState = PLAY;

var balloon;
var balloonImg;
var spinesGroup, spines1,  spines2, spines3;
var score=0;
var bub,bubImg;


function preload(){
  

  balloonImg=loadImage("ballon.png");
  spines1Img=loadImage("cac.png");
  spines2Img=loadImage("cac2.png");
  spines3Img=loadImage("cac3.png");
  bgIMG=loadImage("BG..png");
  bubImg=loadImage("bub.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // creating balloon
  balloon = createSprite(650,509,50,20);
  balloon.addImage(balloonImg);
  balloon.scale=0.5;
  
  //creating spines
   spinesGroup= new Group() 

   bg=createSprite(500,500);
   bg.scale=10
   bg.addImage(bgIMG)
}

function draw() {
  background("white");
  
  //moving balloon
  
  
balloon.depth=10;
  
  
  text("Score: "+ score,width-400,500);
  textSize(100);
  fill("black");
  text.depth=100

if(gameState==PLAY){
  score = score + Math.round(getFrameRate()/60);
  balloon.x = World.mouseX;

}



spawnBub();
  spawspines();
  drawSprites();
    

}



function spawspines(){
  
  
  if(frameCount % 30 === 0){
     spines = createSprite(Math.round(random(50,width-100)),-10,20,30);

     var rand = Math.round(random(1,3));
     switch(rand){
       case 1: spines.addImage(spines1Img);
          break;
       case 2: spines.addImage(spines2Img);
          break;
          case 3 :spines.addImage(spines3Img);
          break;
     }
   
     spinesGroup.add(spines);
     spines.scale=0.7
     
     spines.velocityY=15;
 }


}

function spawnBub(){

  if(frameCount % 5 === 0){
   bub=createSprite(Math.round(random(50,width-100)),-10,20,30);
   bub.addImage(bubImg);
   bub.scale=0.5;
   bub.velocityY=15;
   bub.depth=20;


  }


}


 function Reset(){
   if(balloon.collide(spines)){
        
   }
 }

