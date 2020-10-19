function setup() {
createCanvas(680, 680);
}
function draw() 
{
  
  let c = color(205, 204,25);
fill(c);
  
if (mouseIsPressed) {
fill(0);
} else {
fill(c);
}
ellipse(mouseX, mouseY, 80, 80);
}
