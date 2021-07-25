var dog, ball;
var dogRunning, ballImg;
var score = 0
var timer = 20

function preload(){
  dogRunning = loadAnimation("walking (1).png", "walking (2).png","walking (3).png", "walking (4).png", "walking (5).png", "walking (6).png","walking (7).png", "walking (8).png");
  ballImg= loadAnimation("ball (1).png","ball (2).png","ball (3).png","ball (4).png")
}

function setup() {
  createCanvas(500, 500);

  dog = createSprite(50,100,50,50)
  dog.addAnimation("walking", dogRunning);
  dog.scale=0.25
  dog.setCollider("rectangle",-10,0,220,350)
  
  ball = createSprite(250,250,50,50)
  ball.addAnimation("carrot", ballImg)
  ball.scale=0.3
  ball.setCollider("rectangle", 0, 0, 180,120)
}

function draw() {
  background("#FFD14F")

  edges=createEdgeSprites();
  dog.collide(edges)  
  
  fill(255)
  textAlign(LEFT);
  textSize(15);
  text("Time Left :" + timer, 10, 15);
  text("Use arrow keys to move the dog" , 250, 15);
  
  if (frameCount % 60 === 0 && timer > 0) {
    
  }
  
  if (timer == 0) {
    textAlign(CENTER);
    textSize(40);
    text("You Scored:" + score, width/2, height/2-50);
    
    dog.x=width/2;
    dog.y=height/2+50;
      
    ball.visible=false
  }

  var loc = dist(dog.x,dog.y,ball.x,ball.y);
  if (loc < 50){
    score ++
  }
  drawSprites();
}

function keyPressed(){
  if (keyCode === RIGHT_ARROW) {
    dog.velocityX= 8;
    dog.velocityY= 0;
  } 
  else if (keyCode === DOWN_ARROW) {
    dog.velocityY= 8;
    dog.velocityX= 0;
  }
  else if (keyCode === UP_ARROW) {
    dog.velocityY= -8;
    dog.velocityX= 0;
  }
  else if (keyCode === LEFT_ARROW) {
    dog.velocityX= -8;
    dog.velocityY= 0;
  }
}
