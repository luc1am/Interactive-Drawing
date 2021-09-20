var size = 400;
var angle = 1;
function setup() {
  // put setup code here
  createCanvas(500,500);
}

function draw() {
  // put drawing code here

  background(255,200,220);
  noFill();
  ellipse(width/2, height/2, size,size);
  ellipse(width/4,height/4, size/4, size/4);
  let fr = 90;
  ellipse((size/2)*cos(degrees(angle))+(width/2),((size/2)*sin(degrees(angle)))+(height/2),50,50);
  angle+=2;

}
