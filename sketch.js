var dog;
var happyDog;
var dogImg;
var happydogImg;
var database;
var foodS;
var foodStock;

function preload()
{
	dogImg = loadImage("dogImg.png");
  happydogImg = loadImage("dogimg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
  foodStock.set(20);

  dog = createSprite(250, 250, 10, 10);
  dog.addImage(dogImg);
  dog.scale = 0.15;
  
}


function draw() {  
background(46, 139, 87);
if(foodS !== undefined){


if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happydogImg);
}

//if(keyWentUP(UP_ARROW)){
 // writeStock(foodS)
//dog.addImg(dogImg);
//}

textSize(17);
  fill("black");
  text("Hello, I am your puppy! I am Hungry ",100,150);
  fill("black");
  text("Long Press UP arrow key to feed your puppy.",50,50);
  fill("black");
  text("Milk Bottles Remaining : " + foodS,170,440);


drawSprites();


  if(foodS === 0){
    foodS = 20;
  }
}
}

function writeStock(x){
  if(x<=0){
    x = 0;
  }
else{
  x = x-1;
}

database.ref("/").update({
  Food : x
})

}

function readStock(data){
  foodS = data.val();
}


