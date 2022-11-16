var soloSprite, soloImagem;
//é aqui que cria a variável
var trexSprite, trexAnimacao;

function preload() {

    soloImagem = loadImage("solo.png");
    //é aqui que carrega a animação
    trexAnimacao = loadAnimation("trex1.png","trex2.png","trex3.png");

}


function setup() {
    createCanvas(600, 200);
    
    soloSprite = createSprite(300, 180, 600, 40);
    soloSprite.addImage(soloImagem);
    //é aqui que cria a sprite
    trexSprite = createSprite(50,170,50,50);
    trexSprite.addAnimation("correndo",trexAnimacao);
    trexSprite.scale=0.5;

}


function draw() {
    background("cyan")
   
    drawSprites();
}
