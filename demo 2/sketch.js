function setup() {
  // put setup code here
  createCanvas(500,500);
}

function draw() {
  // put drawing code here
  background(0,255,255);
  stroke(250,80,60);
  fill(255,200,250);
  textSize(70);
  strokeWeight(10);
  text("live",100,200);

  text("laugh", 100,300);
  text("love", 100, 400);

  strokeWeight(0);
  ellipse(100,30,30,30);
  ellipse(130,30,30,30);
  triangle(85,30,145,30,115,80);
  fill(255,0,mouseX/2);
  //ellipse(mouseX, mouseY, 100,100);
  textSize(12);
  text("graphic design is my passion", 200,400);
  if (mouseY<height/2){
    ellipse(width/2,height/2,100,100);
  }else{
    rect(width/2-50,height/2-50,100,100);
  }
}
