const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var maxDrops=100;
var thunder;
var thunder1;
var thunder2;
var thunder3;
var thunder4;
var boy;
var drops=[];
var umbrella;
var t = 0

function preload(){  
 boy = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png")
 thunder1 = loadImage("images/thunderbolt/1.png")
 thunder2 = loadImage("images/thunderbolt/2.png")
 thunder3 = loadImage("images/thunderbolt/3.png")
 thunder4 = loadImage("images/thunderbolt/4.png")
}

function setup(){
   engine = Engine.create();
   world = engine.world;
   createCanvas(700,700); 

   umbrella = new Umbrella(200,500);
   //drops = new Drops(300,500,5,5);
    
   if(frameCount%150===0){
     
    for(var i = 0; i < maxDrops; i++){
      drops.push(new Drops(random(0,400),random(0,400)))
     
    }}}

function draw(){
  background('black');
  Engine.update(engine)

  var rand = Math.round(random(1,4))

  if(frameCount%80===0){
  t = frameCount
  thunder = createSprite(random(10,370),random(10,30,10,10))
  
  switch(rand){
case 1:thunder.addImage(thunder1);
break;
case 2:thunder.addImage(thunder2);
break;
case 3:thunder.addImage(thunder3);
break;
case 4:thunder.addImage(thunder4);
break;
default:break;
  
}}
if(t+10===frameCount && thunder){
thunder.destroy();
}
umbrella.display();

for(var i = 0; i < maxDrops; i++){
  drops[i].display();
  drops[i].update();
}

drawSprites();

}   