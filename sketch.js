function setup() {
  createCanvas(13660,768);
}

function draw() {
  background(60);
  var i = 1;
  for (var i = 1;i<100;i=i+1){
  push();
  translate(width*0.004*i, height*0.5);
  rotate(frameCount / 30);
  polygon(0, 0, 82, i); 
  pop();
  }
}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

