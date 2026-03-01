function dessinerIgname(x, y, taille) {
  push();
  translate(x, y);
  scale(taille / 100);
  rotate(PI / 12); 
  noStroke();

  // ombre
  fill(120, 65, 25);
  beginShape();
  vertex(-18, -60); 
  quadraticVertex(0, -65, 18, -60); 
  quadraticVertex(40, -10, 15, 55); 
  vertex(0, 80);
  quadraticVertex(-35, 65, -50, -5);
  quadraticVertex(-50, -45, -18, -60);
  endShape(CLOSE);

  // corps
  fill(160, 95, 45);
  push();
  scale(0.92);
  translate(0, 2);
  beginShape();
  vertex(-18, -60);
  quadraticVertex(0, -70, 18, -60);
  quadraticVertex(45, -10, 15, 55);
  vertex(0, 80);
  quadraticVertex(-35, 65, -50, -5);
  quadraticVertex(-50, -45, -18, -60);
  endShape(CLOSE);
  pop();

  // racine
  fill(120, 65, 25);
  beginShape();
  vertex(0, 75);
  quadraticVertex(15, 90, 8, 105); 
  quadraticVertex(4, 90, -5, 75); 
  endShape(CLOSE);

  // haut
  fill(220, 190, 140); 
  ellipse(0, -60, 36, 12);
  fill(195, 160, 110);
  ellipse(0, -60, 18, 6);

  // traits
  fill(130, 75, 30);
  push();
  rotate(-0.05); 
  ellipse(-12, -30, 18, 4);
  ellipse(10, -5, 24, 5);
  ellipse(-8, 25, 15, 4);
  ellipse(5, 50, 12, 3);
  pop();

  

  pop();
}