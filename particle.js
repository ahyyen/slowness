function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(24);
 // p5canvas.id("inky");
}


function draw(){
  background(0, 0, 0, 10);
    fill(255, 255, 255, random(100, 240));
  noStroke();
  let circleSize = random(3, 10);
    let circlePlaceX = random(-15, 15)
    let circlePlaceY = random(-15, 15)
  circle(mouseX+circlePlaceX, mouseY+circlePlaceY, circleSize);
    
  }
  
