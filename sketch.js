const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var plinkos = [];
var divisions =[];
var circle;
var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create(world);
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for (var i = 0; i <= width; i = i + 80) {
    divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var i = 75; i <=width; i=i+50) {
    plinkos.push(new Plinkos(i,75));
  }

  for (var i = 50; i <=width-10; i=i+50) {
    plinkos.push(new Plinkos(i,175));
  }

  for (var i = 75; i <=width; i=i+50) {
  plinkos.push(new Plinkos(j,275));
  }

  for (var i = 50; i <=width-10; i=i+50) {
    plinkos.push(new Plinkos(i,375));
  }
    
}

function draw() {
  background("black");
  Engine.update(engine);
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();  
  }
 
  if(circle!=null){
    circle.display();
    if (circle.body.position.y>760){
      if (circle.body.position.x < 300) {     
        circle=null;
      }
      else if (circle.body.position.x < 600 && circle.body.position.x > 301 ){
        circle=null;
      }
      else if (circle.body.position.x < 900 && circle.body.position.x > 601 ){
       circle=null;
      }              
    }
  
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
}

function mousePressed(){
  circle=new Circle(mouseX, 10, 10, 10); 
}