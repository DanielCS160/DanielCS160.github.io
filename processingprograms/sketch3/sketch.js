var x, y;
var score = 0;
const radius = 75;
var r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(windowWidth);
  y = random(windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(220);
  noStroke();
  fill(r, g, b);
  ellipse(x, y, radius*2, radius*2);
  textSize(24);
  text("Score: " + score, 10, 30);
}

function mousePressed() {
  var d = dist(mouseX, mouseY, x, y);
  if (d < radius) {
    newCircle();
    score++;
  }
}

function newCircle() {
  x = random(windowWidth);
  y = random(windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}

setInterval(newCircle, 1500);
