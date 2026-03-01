function dessinerDatte(x, y, taille) {
  push();
  translate(x, y);
  scale(taille / 100);
  rotate(PI / 8); 
  noStroke();

  // forme
  fill(80, 30, 10); 
  rectMode(CENTER);
  rect(3, 3, 65, 95, 30, 30, 40, 40);

  fill(160, 60, 20); 
  rect(0, 0, 65, 95, 30, 30, 40, 40);
  
  ellipse(28, 10, 15, 40); 
  ellipse(-28, -5, 10, 30);

  // texture
  fill(110, 40, 10); 

  push();
  translate(-15, -25);
  rotate(-0.2);
  ellipse(0, 0, 25, 8);
  pop();

  beginShape();
  vertex(-28, 10);
  quadraticVertex(0, 20, 30, 5); 
  quadraticVertex(0, 12, -28, 2); 
  endShape(CLOSE);


  push();
  translate(10, 30);
  rotate(0.1);
  ellipse(0, 0, 30, 6);
  pop();
  
  ellipse(-10, 15, 4, 4);
  ellipse(20, -10, 3, 5);


  // lumière / reflets
  fill(255, 255, 255, 60); 
  beginShape();
  vertex(-20, -30);
  bezierVertex(-10, -35, 10, -35, 15, -20);
  bezierVertex(10, -25, -10, -25, -20, -22);
  endShape(CLOSE);

  ellipse(-25, 0, 5, 12);


  // tige
  fill(80, 30, 10);
  ellipse(0, -46, 20, 8);

  // La tige jaune/ocre
  fill(220, 180, 80); 
  push();
  translate(0, -50); 
  triangle(-5, 5, 5, 5, 0, -5);
  rect(0, -4, 6, 8, 1);
  pop();

  pop();
}