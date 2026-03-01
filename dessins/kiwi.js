function dessinerKiwi(x, y, taille) {
  push();
  translate(x, y);
  scale(taille / 100);
  rotate(-PI / 8); 
  noStroke();
 
  fill(130, 85, 45); 
  ellipse(2, 15, 105, 115);

  // chair
  fill(150, 195, 45); 
  ellipse(0, 0, 100, 85); 

  // texture vert clair
  fill(175, 215, 70); 
  for (let i = 0; i < TWO_PI; i += PI / 10) {
    push();
    let r = 26; 
    translate(cos(i) * r, sin(i) * (r * 0.85));
    rotate(i);
    ellipse(0, 0, 20, 5); 
    pop();
  }
  fill(135, 175, 35); 
  for (let i = PI / 20; i < TWO_PI; i += PI / 8) {
    push();
    let r = 22; 
    translate(cos(i) * r, sin(i) * (r * 0.85));
    rotate(i);
    ellipse(0, 0, 14, 3);
    pop();
  }

  // coeur
  fill(245, 240, 190);
  beginShape();

  vertex(0, -18);
  quadraticVertex(6, -10, 16, -12);
  quadraticVertex(10, -4, 20, 0);
  quadraticVertex(10, 6, 15, 15);
  quadraticVertex(4, 10, 0, 18);
  quadraticVertex(-6, 10, -15, 14);
  quadraticVertex(-10, 2, -18, -2);
  quadraticVertex(-8, -10, -14, -15);
  quadraticVertex(-4, -12, 0, -18);
  endShape(CLOSE);

  // pepins
  fill(30, 30, 30);
  for (let i = 0; i < TWO_PI; i += PI / 8) {
    let distance = 20 + random(-2, 3); 
    let px = cos(i) * distance;
    let py = sin(i) * (distance * 0.85);

    push();
    translate(px, py);
    rotate(i);
    ellipse(0, 0, 5, 3.5); 
    pop();
  }
  
  pop();
}