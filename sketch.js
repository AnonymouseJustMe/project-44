var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}


  function draw() {
    background(bg);
    clues();
    textSize(20);
    fill("grey");
    text("Score: " + score, 450, 50);
  
    if(score === 3) {
      clear()
      background(bg2)
      fill("black")
      textSize(40);
      text("treasure unocked",250, 200);
      security.display();
    }
    
    drawSprites()
  }

