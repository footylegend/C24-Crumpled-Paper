
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Ball, ground, dustBin;
var paperBallImage;

function preload(){
  paperBallImage = loadImage("PaperBall.jpg")
}

function setup() {
    createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;
    //Create the Bodies Here.
   Ball = new Paper(100,200,20);
    ground = new Ground(600,580,1200, 20);
    dustBin = new DustBin(1000,550,250,100);
  // dustBin = new dustbin(600,550, 200, 100);
    Engine.run(engine);
}

 

function draw() {
  rectMode(CENTER);
  background("white");

  Ball.display(); 
  dustBin.display();
 ground.display();
//jump(ball.body);
 //Ball.velocityY = Ball.velocityY+1;

 keyPressed();
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.applyForce(Ball.body, Ball.body.position, {x:1.5,y:-4 });
  }
}






