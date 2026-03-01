function dessinerMangue(x, y, taille) {
  push();
  translate(x, y);
  scale(taille / 100);
  rotate(PI / 15); 
  noStroke();

  // ombre
  fill(150, 40, 10);
  beginShape();
  vertex(0, -60); 
  bezierVertex(55, -65, 70, -10, 60, 30); 
  bezierVertex(50, 65, 20, 75, 10, 75);   
  bezierVertex(-30, 70, -60, 30, -60, -20); 
  bezierVertex(-60, -60, -30, -65, 0, -60); 
  endShape(CLOSE);

  // corps
  fill(255, 205, 50); 
  push();
  translate(-3, -3); 
  scale(0.96);
  beginShape();
  vertex(0, -60);
  bezierVertex(55, -65, 70, -10, 60, 30);
  bezierVertex(50, 65, 20, 75, 10, 75);
  bezierVertex(-30, 70, -60, 30, -60, -20);
  bezierVertex(-60, -60, -30, -65, 0, -60);
  endShape(CLOSE);
  pop();

  // deuxieme couleur
  fill(230, 90, 20); 
  beginShape();
  vertex(0, -60);
  bezierVertex(55, -65, 65, -20, 60, 10); 
  bezierVertex(0, 25, -50, 15, -60, -15); 
  bezierVertex(-60, -55, -30, -65, 0, -60); 
  endShape(CLOSE);


  //tige
  fill(110, 70, 30); 
  push();
  translate(5, -62); 
  rotate(-PI / 12);
  rectMode(CENTER);
  rect(0, 0, 10, 18, 3); 
  pop();
  

  // reflets
  fill(255, 255, 255, 100); 
  beginShape();
  vertex(-50, -25);
  quadraticVertex(-60, 0, -45, 40); 
  quadraticVertex(-45, 0, -50, -25);
  endShape(CLOSE);
  
  ellipse(-20, -45, 6, 12);
  
  // tâches
  fill(200, 60, 20, 120);
  ellipse(20, -10, 4, 3);
  ellipse(35, 15, 3, 5);
  ellipse(-10, 50, 2, 2);

  pop();
}