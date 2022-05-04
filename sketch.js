
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var parede_1, parede_2,chao;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

var ballConfig = {
	restitution: 0.3,
	friction: 0,
	density: 1.2

}
ball = Bodies.circle(260,100,20, ballConfig);
World.add(world, ball);

	//Create the Bodies Here.
parede_1 = new Parede(1100,600,20,120);
parede_2 = new Parede(1350,600,20,120);
chao = new Parede(800,670,1600,20);
rectMode(CENTER);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x, ball.position.y,20);
  drawSprites();
 
  parede_1.show();
  parede_2.show();
  chao.show();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:90,y:-75});
	}
}

