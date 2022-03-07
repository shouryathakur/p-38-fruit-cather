var BG;
var apple, melon , mango , berry , orange ; 
var knife , knifeIMG ;
var appleG , melonG , mangoG , berryG , orangeG ;
var score = 0
var life = 3;
var cutS;

function setup() {
  createCanvas(400, 400);
knife2 = createSprite(200,350,2,2)
knife2.addImage("knife",knifeIMG)  
knife2.scale = 0.3
  
knife1 = createSprite(150,350,2,2)
knife1.addImage("knife",knifeIMG)  
knife1.scale = 0.3
  
knife3 = createSprite(250,350,2,2)
knife3.addImage("knife",knifeIMG)  
knife3.scale = 0.3  

melonG = createGroup()
appleG = createGroup()
mangoG = createGroup()
berryG = createGroup()
orangeG = createGroup()

edges = createEdgeSprites();

}


function mouseClicked(){  


//if(knife2.velocityY === 0 ){
knife1.velocityY = -50    
   
 //  }  
if(knife1.y<0 ){
knife2.velocityY = -50    
   
   }  
  
  if(knife2.y<0 ){
knife3.velocityY = -50    
   
   }  

}




function preload(){
BG = loadImage("FC landscape.jpg")
apple = loadImage("apple.png")
orange = loadImage("orange.png") 
berry = loadImage("strawberry.png") 
melon = loadImage("melon.png") 
mango = loadImage("mango.png") 
knifeIMG = loadImage("knife.png") 
cutS = loadSound("cut.mp3")
  
  
}


function spawnobjects(){
if(frameCount % 80 === 0 ){
var obj1 = createSprite(400,Math.round(random(10,250)),30,10)   
obj1.velocityX = -3
obj1.scale = 0.1
var selectFruit = Math.round(random(1,5)) 
if(selectFruit===1){
obj1.addImage("M",mango);
mangoG.add(obj1)  
}
  if(selectFruit===2){
obj1.addImage("A",apple);
appleG.add(obj1)   
}
  if(selectFruit===3){
obj1.addImage("M",melon);
obj1.scale = 0.15
melonG.add(obj1)    
   
}
  if(selectFruit===4){
obj1.addImage("S",berry);
berryG.add(obj1)   
}
 if(selectFruit===5){
obj1.addImage("O",orange);
orangeG.add(obj1)   
}
  
obj1.lifetime = 400/3;   
  
}  
  
  
}
function spawnobjects2(){
if(frameCount % 70 === 0 ){
var obj1 = createSprite(-10,Math.round(random(10,250)),30,10)   
obj1.velocityX = 3
  
obj1.scale = 0.1
var selectFruit = Math.round(random(1,5)) 
if(selectFruit===1){
obj1.addImage("M",mango);
mangoG.add(obj1)  
}
  if(selectFruit===2){
obj1.addImage("A",apple);
appleG.add(obj1)   
}
  if(selectFruit===3){
obj1.addImage("M",melon);
obj1.scale = 0.15
melonG.add(obj1)   
}
  if(selectFruit===4){
obj1.addImage("S",berry);
berryG.add(obj1)   
}
 if(selectFruit===5){
obj1.addImage("O",orange);
orangeG.add(obj1)   
}
  
obj1.lifetime = 400/3;   
  
}  
  
  
}

function draw() {
  background(BG);
  spawnobjects();
  spawnobjects2();
 drawSprites(); 
  FCscore();
  controlLife();
cutFruit(); 
gameOver();  
}

function cutFruit (){
  
if(knife1.isTouching(melonG)|| knife2.isTouching(melonG)||knife3.isTouching(melonG)){
score = score+10   
melonG.destroyEach()   
cutS.play();  
   }  
  if(knife1.isTouching(appleG)|| knife2.isTouching(appleG)||knife3.isTouching(appleG)){
score = score+5   
appleG.destroyEach()
    cutS.play();
   }  
  if(knife1.isTouching(orangeG)|| knife2.isTouching(orangeG)||knife3.isTouching(orangeG)){
score = score+4   
orangeG.destroyEach() 
    cutS.play();
   }  
  if(knife1.isTouching(berryG)|| knife2.isTouching(berryG)||knife3.isTouching(berryG)){
score = score+4   
berryG.destroyEach()
    cutS.play();
  
   }  
  if(knife1.isTouching(mangoG)|| knife2.isTouching(mangoG)||knife3.isTouching(mangoG)){
score = score+7   
mangoG.destroyEach()   
    cutS.play();
   }  
  
}

function FCscore (){
textSize(20)
fill("black")  
text("score ="+score,270,365)
 
text("Lives ="+life,20,365)  
  
  }


function controlLife(){
  
if(life>0){
if(knife1.y === 0 || knife2.y === 0 || knife3.y === 0){
life = life-1   
   
   }   
   
   }  
  
}

function gameOver(){
if(life === 0){
background("green")  
fill("Yellow")
textSize(30)
stroke("Yellow")
strokeWeight(2)  
text("GAME OVER",130,200) 
mangoG.destroyEach();  
berryG.destroyEach();
appleG.destroyEach();
melonG.destroyEach();
orangeG.destroyEach();
knife1.destroy();  
knife2.destroy();
knife3.destroy();  
}

  
}










