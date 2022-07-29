var paradoImg
var atacandoImg
var mortoImg
var danoImg

function preload(){
  paradoImg = loadImage("assets/parado.png")
  atacandoImg = loadImage("assets/atacando.png")
  mortoImg = loadImage("assets/morto.png")
  danoImg = loadImage("assets/parado.png")
  zumbi = loadImage("assets/zombie.png")
  espada1 = loadImage("assets/espada.png")
  fundo1 = loadImage("assets/fundo.jpg")
  zumbi2 = loadImage("assets/zombie2.png")
  zumbi3 = loadImage("assets/zombie3.png")
}

function setup() {

  createCanvas(windowWidth,windowHeight);
  jim = createSprite(displayWidth/2+100, displayHeight-100, 50, 50);
  jim.addImage("parado",paradoImg)
  jim.scale = 0.3

  
}

function draw() {
  background(fundo1); 
zumbis()
zumbis2()
zumbis3()
espada()
drawSprites();
function espada(){
espada = createSprite(displayWidth/2+100, displayHeight-100, 50, 50);
espada.addImage(espada1)
espada.scale = 0.3
espada.velocityX = +15

}
}
function zumbis (){
  if (frameCount%60===0){
    zumbie = createSprite(displayWidth, displayHeight-100, 50, 50)
  zumbie.addImage(zumbi)
  zumbie.scale = 0.2
  zumbie.velocityX = -15
}
}
function zumbis2 (){
  if (frameCount%60===0){
    zumbie2 = createSprite( 0, displayHeight-100, 50, 50)
  zumbie2.addImage(zumbi2)
  zumbie2.scale = 0.6
  zumbie2.velocityX = +15
}
}
function zumbis3 (){
  if (frameCount%60===0){
    zumbie3 = createSprite(displayWidth/2+100, 0, 50, 50)
  zumbie3.addImage(zumbi3)
  zumbie3.scale = 0.2
  zumbie3.velocityY = +15
}


}
