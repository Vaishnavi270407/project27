
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var  bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,400,20);
	bobObject1 = new Bob(280,400,50); 
	bobObject2 = new Bob(330,400,50); 
	bobObject3 = new Bob(380,400,50); 
	bobObject4 = new Bob(430,400,50);
    bobObject5 = new Bob(480,400,50);
	rope1 = new Rope(bobObject1.body, roof.body,-120, 10);
	rope2 = new Rope(bobObject2.body, roof.body,-60, 10);
	rope3 = new Rope(bobObject3.body, roof.body,-10, 10);
	rope4 = new Rope(bobObject4.body, roof.body,50, 10);
	rope5 = new Rope(bobObject5.body, roof.body,100, 10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  drawSprites();
 
}



