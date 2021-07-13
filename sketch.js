var boy,boy_running
var path,path_image
function preload(){
  //pre-load images
  boy_running = loadAnimation("Runner-1.png","Runner-2.png");
  path_image = loadImage("path.png");
  
}

function setup(){
  createCanvas(1000,1000);
  //create sprites here
  boy = createSprite(100,200,500,500)
  boy.addAnimation("runner",boy_running);
  boy.scale=5;
  path = createSprite(500,500,40,100);
  path.addImage("path",path_image);
}

function draw() {
  background("white");

}
