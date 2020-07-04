const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;
var roof;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;


function setup() {
	createCanvas(800, 700);

	background(0,0,0);

	engine = Engine.create();
	world = engine.world;


	bobObject1 = new Bob(250,600);
	bobObject2 = new Bob(300,600);
	bobObject3 = new Bob(350,600);
	bobObject4 = new Bob(400,600);
	bobObject5 = new Bob(450,600);

	roof = new Ground(400,300,3000,40);

	rope1 = new Rope(bobObject1.body,{x:250,y:300});
	rope2 = new Rope(bobObject2.body,{x:300, y:300});
	rope3 = new Rope(bobObject3.body, {x:350, y:300});
	rope4 = new Rope(bobObject4.body, {x:400, y:300});
	rope5 = new Rope(bobObject5.body, {x:450, y:300});
	
	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(0);
	

	
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	roof.display();
 
	drawSprites();
}



