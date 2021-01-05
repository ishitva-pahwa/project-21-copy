var bullet,wall,thickness,speed,weight;


function setup() {
  createCanvas(800,400);

   
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83)  
 



   bullet =createSprite(10, 200, 30, 10);
   bullet.velocityX=speed;
   wall=createSprite(750,200,thickness,height/2);
  bullet.shapeColor="red"
  
}

function draw() {
  background(0);  
if (hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

if (damage>10)
{
  wall.shapeColor=color(255,0,0);
}

if (damage<10)
{
  wall.shapeColor=color(0,255,0)
}
}



drawSprites();
}
