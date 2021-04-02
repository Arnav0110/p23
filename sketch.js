var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var side1Sprite, side2Sprite, side3Sprite, side1Body, side2Body, side3Body;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	side1 = createSprite(300,610,10,100);
	side1.shapeColor=color('red');

	side2 = createSprite(500,610,10,100);
	side2.shapeColor=color('red');

	side3 = createSprite(400,655,200,10);
	side3.shapeColor=color('red');

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	side1 = Bodies.rectangle(300, 610, 5, 100 , {isStatic:true} );
	side2 = Bodies.rectangle(500, 610, 5, 100 , {isStatic:true} );
	side3 = Bodies.rectangle(400, 650, 200, 5 , {isStatic:true} );

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	
	Matter.Body.setStatic(packageBody, isStatic= false);
    packageBody.restitution = 0;
	packageSprite.restitution = 0;
	
  }
}



