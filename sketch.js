var movingRect,fixedRect;


function setup() {
  createCanvas(400,400);
  movingRect=createSprite(200, 200, 50, 50);
  movingRect.shapeColor="green"
  fixedRect=createSprite(100,200,50,60);
  fixedRect.shapeColor="green"
}

function draw() {
  background(0);
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY 
  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2){
    movingRect.shapeColor="red"
    fixedRect.shapeColor="red"
  }
  else{
    movingRect.shapeColor="green"
    fixedRect.shapeColor="green"
  }

  drawSprites();
}