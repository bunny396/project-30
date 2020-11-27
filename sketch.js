const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png")
}
function setup() {
  
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground=new Ground(600,390,1200,20)
  base=new Ground(385,250,200,20)
  //level two 
  block8 = new Block(330,235,30,40); 
  block9 = new Block(360,235,30,40); 
  block10 = new Block(390,235,30,40); 
  block11 = new Block(420,235,30,40); 
  block12 = new Block(450,235,30,40); 
  //level three 
  block13 = new Block(360,195,30,40); 
  block14 = new Block(390,195,30,40); 
  block15 = new Block(420,195,30,40); 
  //top 
  block16 = new Block(390,155,30,40); 
  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);
  sling=new Slingshot(this.polygon,{x:100,y:200});
  }

function draw() {
  background(0,0,0);  
  ground.display();
  base.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("blue");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
  sling.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if (keyCode=== 32){
      sling.attach(this.polygon);
  }
}