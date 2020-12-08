
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground1, paperObj,log, hi;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
rectMode(CENTER);
	log1=createSprite(500,height-210,120,15);
	log1.shapeColor=color("yellow");
	log2=createSprite(447,height-230,15,60);
	log2.shapeColor=color("yellow");
	log3=createSprite(552,height-230,15,60);
	log3.shapeColor=color("yellow");

	engine = Engine.create();
	world = engine.world;
	paper1= new Paper(100,300,40,5);
	ground1 = new Ground(600,height-200,1200,20)
	//Create the Bodies Here.


	Engine.run(engine);
	log = Bodies.rectangle(400,height-48,140,15, {isStatic:true} );
	World.add(world,log);
	


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper1.display();
  ground1.display();
  
  drawSprites();
 
}


function keyPressed(){
	if (keyCode === UP_ARROW ){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	}
}
