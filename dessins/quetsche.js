function dessinerQuetsche(x, y, taille) {
  push();
  translate(x, y);
  scale(taille / 100);
  rotate(-PI / 20); 
  noStroke();

  // feiulle
  push();
  translate(5, -45); 
  rotate(PI / 6);    
  
  //ombre feuille
  fill(40, 90, 30);
  beginShape();
  vertex(0, 0);
  quadraticVertex(30, -25, 60, -5);
  quadraticVertex(30, 20, 0, 0);
  endShape(CLOSE);
  
  // feuille
  fill(70, 140, 40);
  push();
  translate(-2, -2);
  beginShape();
  vertex(0, 0);
  quadraticVertex(28, -23, 55, -4);
  quadraticVertex(28, 18, 0, 0);
  endShape(CLOSE);
  pop();
  
  // trait
  fill(40, 90, 30);
  beginShape();
  vertex(0, 0);
  quadraticVertex(20, -5, 45, -4);
  quadraticVertex(20, -2, 0, 0);
  endShape(CLOSE);
  pop();

  // tige
  fill(130, 150, 50);
  beginShape();
  vertex(-2, -45);
  quadraticVertex(-15, -60, -5, -75);
  vertex(2, -75);
  quadraticVertex(-8, -60, 3, -45);
  endShape(CLOSE);
  
  // ombre corps
  fill(50, 15, 60); 
  ellipse(4, 4, 75, 95); 

  // corps prune
  fill(95, 30, 120);
  beginShape();
  vertex(0, -45);
  bezierVertex(40, -45, 45, 10, 35, 40); 
  bezierVertex(20, 55, -20, 55, -35, 40); 
  bezierVertex(-45, 10, -40, -45, 0, -45);
  endShape(CLOSE);


  //sillon de la prune
  fill(60, 15, 80); 
  beginShape();
  vertex(0, -45);
  bezierVertex(-15, -20, -18, 20, -5, 48);
  bezierVertex(-10, 20, -8, -20, 0, -45); 
  endShape(CLOSE);


  // texture et reflet
  fill(160, 100, 190, 70); 
  beginShape();
  vertex(-15, -20);
  quadraticVertex(10, -35, 25, -5);
  quadraticVertex(30, 25, 5, 30);
  quadraticVertex(-25, 15, -15, -20);
  endShape(CLOSE);

  
  fill(180, 120, 210, 120);
  ellipse(15, -10, 4, 6);
  ellipse(22, 5, 3, 3);
  ellipse(-12, 5, 5, 4);
  ellipse(-14, -8, 3, 5);
  ellipse(10, 20, 4, 2);


  fill(255, 255, 255, 40);
  beginShape();
  vertex(-25, -10);
  quadraticVertex(-35, 10, -20, 30);
  quadraticVertex(-28, 10, -20, -10);
  endShape(CLOSE);

  pop();
}