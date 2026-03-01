function dessinerUme(x, y, taille) {
  push();
  translate(x, y);
  scale(taille / 100);
  rotate(PI / 25); 
  noStroke();

   // ombre
  fill(100, 160, 50);
  beginShape();
  vertex(0, -60); 
  bezierVertex(55, -65, 75, -10, 65, 40); 
  bezierVertex(50, 75, -50, 75, -60, 40); 
  bezierVertex(-75, -10, -50, -65, 0, -60); 
  endShape(CLOSE);

  // corps
  fill(180, 210, 80); 
  push();
  translate(-3, -3); 
  scale(0.96);
  beginShape();
  vertex(0, -60);
  bezierVertex(55, -65, 75, -10, 65, 40);
  bezierVertex(50, 75, -50, 75, -60, 40);
  bezierVertex(-75, -10, -50, -65, 0, -60);
  endShape(CLOSE);
  pop();


  // sillon
  fill(80, 140, 40); 
  beginShape();
  vertex(0, -60);
  quadraticVertex(-10, -20, -12, 10); 
  quadraticVertex(-15, 40, -5, 68);    
  bezierVertex(-10, 40, -10, -20, 0, -60); 
  endShape(CLOSE);


  // reflet
  fill(255, 255, 255, 40); 
  beginShape();
  vertex(-50, -25);
  quadraticVertex(-60, 0, -45, 40);
  quadraticVertex(-45, 0, -50, -25);
  endShape(CLOSE);
  ellipse(-20, -45, 6, 12);

  //haut tige
  fill(50, 40, 10);
  ellipse(0, -58, 6, 8);
  
  pop();
}