class Drops {

constructor(x,y) {
  var options = {
    friction:0.1,
    restitution:0.1
        }

  this.body = Bodies.circle(x,y,5,options);
  this.radius = 5
  World.add(world, this.body);
      }

display(){
  var pos =this.body.position;
  ellipseMode(RADIUS);
  fill("blue");
  ellipse(pos.x, pos.y,this.radius,this.radius);
      }
    
update(){
if(this.body.position.y > height){
  Matter.Body.setPosition(this.body, {x:random(0,700), y:random(0,700)})
}
}}