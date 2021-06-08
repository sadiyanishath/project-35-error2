//Create variables here

var  dog,dogimage,happyDog,happyDogimage, database, foodS, foodStock;

function preload()
{
	//load images here
  dogimage = loadImage("Dog.png")
  happyDogimage = loadImage("happydog.png")
}

function setup() {
	createCanvas(500, 500);

 dog = createSprite(250,250,20,20)
 dog.addImage(dogimage)
 dog.scale=0.3
  
 var foodStock = database.ref('stock');
  foodStock.on("value", readstock,showError);

}


function draw() {  
 background(46, 139, 87)
  drawSprites();
  //add styles here
}

function writeStock(x){ if(x<=0){ x=0; }else{ x=x-1; } database.ref('/').update({ Food:x }) }

function showError(){
console.log("error")

}

function readstock(data){
data.val()


}