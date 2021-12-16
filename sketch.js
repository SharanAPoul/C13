var ground ;
var trex ,trex_running;
var groundimg
var invisibleGround;
var cloudimg;
var obstacle1img,obstacle2img,obstacle3img,obstacle4img,obstacle5img,obstacle6img;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundimg = loadImage("ground2.png")
  cloudimg = loadImage("cloud.png")
  obstacle1img = loadImage("obstacle1.png")
  obstacle2img = loadImage("obstacle2.png")
  obstacle3img = loadImage("obstacle3.png") 
  obstacle4img = loadImage("obstacle4.png")
  obstacle5img = loadImage("obstacle5.png")
  obstacle6img = loadImage("obstacle6.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite

  trex = createSprite(200,100);
  trex.addAnimation("run",trex_running);
  trex.scale = 0.5;


//Creating Ground
  ground = createSprite(300,170,600,10);
  ground.addImage(groundimg);
  ground.velocityX = -5;
 // console.log(ground);
 // console.log(groundimg)

 

 invisibleGround = createSprite(300,175,600,10);
 invisibleGround.visible = false;
 // trex.debug = true;
}

function draw(){
  background("white")
  //Jumping
  if(keyDown("space")&&trex.isTouching(ground)){
    trex.velocityY = -5;
  }
  trex.velocityY = trex.velocityY+ 0.5;
 trex.collide(invisibleGround);

 //reseting ground
 if(ground.x <0){
   ground.x = 300;
 }

  
 //caling Cloud
 createCloud();
 createObstacle();
drawSprites();
}

function createCloud(){

  if(frameCount%100 ==0){// Checking Wether the frame Count is multiply Of control
    var cloud = createSprite(610,30,20,20);
    cloud.velocityX = -5;
    cloud.addImage(cloudimg);
    cloud.scale = 0.5;
    cloud.lifetime = 130;
    cloud.y = Math.round(random(50,120))
    cloud.depth = trex.depth
    trex.depth = trex.depth+1
  }
  
}

function createObstacle(){
  if(frameCount%80 ==0){// Checking Wether the frame Count is multiply Of control
    var obstacle = createSprite(610,155,20,20);
   obstacle.velocityX = -5;
   var randomNumber = Math .round(random(1,6));

   switch(randomNumber){
    case 1:
      obstacle.addImage(obstacle1img);
      break;
    case 2:
       obstacle.addImage(obstacle2img);
      break;
     case 3:
        obstacle.addImage(obstacle3img);
       break;
    case 4 :
         obstacle.addImage(obstacle4img);
       break;
    default:
      obstacle.addImage(obstacle6img);
      break;
   }
   obstacle.scale = 0.5;
   obstacle.liftime = 120;
  }
 

}