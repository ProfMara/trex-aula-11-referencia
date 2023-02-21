var soloSprite, soloImagem;
//é aqui que cria a variável
var trexSprite, trexAnimacao;
//nessa função, carrega-se arquivos de mídia
function preload() {

    //é aqui que carrega a animação
    trexAnimacao = loadAnimation("trex1.png","trex2.png","trex3.png");

}


function setup() {
    createCanvas(600, 200);
    

    //é aqui que cria a sprite
    trexSprite = createSprite(50,170,50,50);
    trexSprite.addAnimation("correndo",trexAnimacao);
    trexSprite.scale=0.5;

}


function draw() {
    background("cyan")
    
    if(keyDown("space")){
      trexSprite.velocityY = 10;
    }
    trexSprite.velocityY += 0.8;
    drawSprites();
}
