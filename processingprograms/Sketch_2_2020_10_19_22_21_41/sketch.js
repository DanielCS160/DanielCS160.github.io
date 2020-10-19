function setup() {
createCanvas(680, 680);
}
function draw() 
{
  
  let c = color(215, 214,250);
fill(c);
  
if (mouseIsPressed) {
fill(0, 214,250);
} else {
fill(c);
}
rect(mouseX, mouseY, 100, 10);
}