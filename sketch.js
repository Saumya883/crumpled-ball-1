
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bar1=new Dustbin(500,745,150,20)
 	bar2=new Dustbin(415,680,20,1000)
	bar3=new Dustbin(565,680,20,150)
  paper= new Paper(400,150,50)
  ground=new Ground(400,690,800,20)
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  bar1.display()
  bar2.display()
  bar3.display()
  paper.display()
  ground.display()
  drawSprites();
 
}

function keyPresses(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
    }
}

