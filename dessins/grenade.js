function dessinerGrenade(x, y, taille) {
  push();
  translate(x, y);
  scale(taille / 100);
  rotate(0.1); 
  noStroke();

  


  // corps ombre
  fill(130, 20, 30);
  beginShape();
  vertex(0, 45); 
  bezierVertex(40, 48, 52, 20, 48, -5);   
  bezierVertex(45, -30, 25, -42, 0, -40); 
  bezierVertex(-25, -42, -45, -30, -48, -5); 
  bezierVertex(-52, 20, -40, 48, 0, 45);  
  endShape(CLOSE);

  // corps devant
  fill(225, 30, 40);
  push();
  translate(-3, -3); // décalé vers le haut/gauche pour la perspective
  scale(0.96);      
  beginShape();
  vertex(0, 45);
  bezierVertex(40, 48, 52, 20, 48, -5);
  bezierVertex(45, -30, 25, -42, 0, -40);
  bezierVertex(-25, -42, -45, -30, -48, -5);
  bezierVertex(-52, 20, -40, 48, 0, 45);
  endShape(CLOSE);
  pop();

  // ombre haut
  fill(130, 20, 30);
  beginShape();
  vertex(-15, -38); 
  vertex(-22, -55); 
  vertex(-8, -45); 
  vertex(0, -60);   
  vertex(8, -45);   
  vertex(22, -52);  
  vertex(15, -38);  
  endShape(CLOSE);

  // haut
  fill(225, 30, 40);
  push();
  translate(-1.5, -1.5);
  beginShape();
  vertex(-14, -38);
  vertex(-20, -52);
  vertex(-7, -44);
  vertex(0, -57);
  vertex(7, -44);
  vertex(19, -49);
  vertex(14, -38);
  endShape(CLOSE);
  pop();

  // le bas
  fill(130, 20, 30);
  triangle(-4, 43, 0, 50, 4, 42);


  // reflets
  fill(255, 255, 255, 50); 
  beginShape();
  vertex(-25, -15);
  bezierVertex(-10, -30, 15, -25, 20, -10);
  bezierVertex(10, -16, -5, -20, -25, -15);
  endShape(CLOSE);

  
  push();
  translate(20, 15);
  rotate(-PI / 6);
  ellipse(0, 0, 8, 18);
  pop();

  
  fill(200, 25, 35);
  ellipse(-18, 5, 8, 6);
  ellipse(-8, 25, 12, 8);
  ellipse(15, 22, 6, 7);

  pop();
}