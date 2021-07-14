var boy,boy_running;
var path,path_image;
var invisible_groundR;
var invisible_groundL;

function preload(){
  //pre-load images
  boy_running = loadAnimation("Runner-1.png","Runner-2.png");
  path_image = loadImage("path.png");
  }

function setup(){
  createCanvas(1000,900);
  //create sprites here
  path = createSprite(500,500,1000,100);
  path.addImage("path",path_image);
  boy = createSprite(590,600,100,100)
  boy.addAnimation("runner",boy_running);
  boy.scale=0.1;
  invisible_groundR=createSprite(1000,500,700,900);
  invisible_groundR.visible=false;
  invisible_groundL=createSprite(160,500,400,900);
  invisible_groundL.visible=false;
  }

function draw() {
  background("white");
  path.velocityY=10;
  if(path.y>900){
  path.y = height/2;
  boy.x =mouseX;
  boy.collide(invisible_groundR);
  boy.collide(invisible_groundL);
}
  drawSprites();
}
