
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic: False,
		restitution: 0.3,
		friction: 0,
		density: 0.2,
	}


	Engine.run(engine);

	groundObj.display();
  
}



function draw() {
  rectMode(CENTER);

  
  background(0);
  
  drawSprites();
 
}



