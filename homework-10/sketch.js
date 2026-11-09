//custom variable
let altColor = true
let posX = 0

function setup() {
  createCanvas(600, 400);
  //no stroke
  noStroke();
  //set angle mode
  angleMode(DEGREES);
  //set text alignment
  textAlign(CENTER)
}

function draw() {
  // bg
  background(125, 207, 255);

  // clouds
  fill(255);
  circle(120, 112, 65);
  circle(170, 110, 78);
  ellipse(150, 125, 200, 50);

  circle(420, 70, 50);
  ellipse(420, 80, 100, 40);

  // grass
  push();
  fill(83, 138, 0);
  rect(0, 250, 600, 150);
  pop();

  // flower function
  for (let i = 50; i < 600; i += 100) {
    drawFlower(i, 320);
  }

  // bug function
  drawBug(posX, 100);
  posX += 5;
  if (posX > width + 100) {
    posX = -100;
  }
}

function drawFlower(x, y) {
  for (let angle = 0; angle <= 360; angle += 45) {
    push();
    translate(x, y);
    rotate(angle);
    if (altColor === true) {
      fill(101, 93, 198);
      altColor = false;
    } else {
      fill(0, 178, 227);
      altColor = true;
    }
    ellipse(0,0, 20, 90);
    pop();
  }
  fill(255, 241, 89);
  circle(x, y, 30);
}

function drawBug(x, y) {
  //wings
  fill(0, 0, 190);
  ellipse(x - 25, y, 30, 60);
  fill(0, 0, 255);
  ellipse(x + 5, y, 50, 100);
  
  // body
  fill(20);
  ellipse(x, y, 100, 10);
  circle(x + 40, y, 20);
  fill(255);

  // face
  push();
  translate(x + 37, y)
  rotate(90);
  text(':3', 0, 0);
  pop();
}