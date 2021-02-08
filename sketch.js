var moving, fixed;

function setup() {
  createCanvas(800,400);
  
  moving =  createSprite(400,100,50,50);
  moving.shapeColor = "orange";
  moving.debug = true;
 
  fixed = createSprite(600, 100, 70, 70);
  fixed.shapeColor = "orange";
  fixed.debug = true;


  ball = createSprite(400,200,20,20)
  bat = createSprite(100,200,20,100)
ball .shapeColor="white"
bat .shapeColor="green"
 ball .velocityX= -6;

}

function draw() {
  background("red ");

  ellipse (100,100,100,100,150);
  ellipse.x  = ellipse.x=5;
  
  moving.x = World.mouseX;
  moving.y = World.mouseY;
  
 // console.log(moving.x -  fixed.x);
    
  
if(moving.x - fixed.x < fixed.width/2 + moving.width/2 &&
  fixed.x - moving.x < fixed.width/2 + moving.width/2 &&
  moving.y - fixed.y < fixed.width/2 + moving.width/2 &&
  fixed.y - moving.y < fixed.width/2 + moving.width/2)
  {
  moving.shapeColor = "green";
  fixed.shapeColor = "green";
}
  else {
    moving.shapeColor = "orange";
    fixed.shapeColor = "orange";

  //console.log("yes working")
}

if(ball.x- bat .x < bat . width/2 + ball. width/2){
  ball.shapeColor="lightgreen";
  
  ball.velocityX=6;
}


  drawSprites();
}