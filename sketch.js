var shape2;
var shape1;
var shape3;
var shape4;

function setup() {
  createCanvas(800,400);
  shape2 = createSprite(400, 200, 50, 50);
  shape1 = createSprite(200, 80, 20, 100);
  shape3 = createSprite(100, 300, 50, 40);
  shape4 = createSprite(100, 100, 50, 40);
  
  shape3.velocityY = -3;
  shape4.velocityY = 3;
}

function draw() {
  background("black"); 
  
  shape1.x = World.mouseX;
  shape1.y = World.mouseY;

  shape2.shapeColor = "red";
  shape1.shapeColor = "purple";

  if(conduct(shape1, shape2)){
    shape1.shapeColor = "blue";
    shape2.shapeColor = "red";
  }
    bounceShape(shape3, shape4)
    

  drawSprites();
}