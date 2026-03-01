function dessinerOrange(x, y, taille) {
  push();
  translate(x, y);
  scale(taille / 100);
  noStroke();

  
  randomSeed(42); 

  // base orange vif
  fill(250, 100, 0);
  beginShape();
  vertex(0, -70);
  bezierVertex(45, -70, 75, -40, 75, 0); 
  bezierVertex(75, 45, 45, 70, 10, 70);  
  
  
  quadraticVertex(0, 74, -10, 70);       
  
  bezierVertex(-45, 70, -75, 45, -75, 0); 
  bezierVertex(-75, -40, -45, -70, 0, -70);
  endShape(CLOSE);


  // volume
  fill(220, 60, 0);
  beginShape();
  vertex(0, -70);
  bezierVertex(45, -70, 75, -40, 75, 0);
  bezierVertex(75, 45, 45, 70, 10, 70);
  bezierVertex(65, 30, 65, -30, 0, -70); 
  endShape(CLOSE);

  // partie claire
  fill(255, 140, 20);
  beginShape();
  vertex(0, -70);
  bezierVertex(-45, -70, -75, -40, -75, 0);
  bezierVertex(-75, 45, -45, 70, -10, 70);
  bezierVertex(-55, 30, -55, -30, 0, -70);
  endShape(CLOSE);


  
  // feuille et tige
  push();
  translate(0, -68); 

  fill(40, 100, 20);
  rectMode(CENTER);
  rect(0, -10, 4, 15);

  // feuille
  push();
  translate(2, -12); 
  rotate(PI / 8);    
  
  fill(40, 100, 20);
  beginShape();
  vertex(0, 0);
  quadraticVertex(30, -25, 60, -5); 
  quadraticVertex(35, 20, 0, 0);    
  endShape(CLOSE);
  
  fill(80, 150, 40);
  beginShape();
  vertex(0, 0);
  quadraticVertex(28, -22, 58, -7);
  quadraticVertex(33, 18, 0, 0);
  endShape(CLOSE);

  // trait 
  stroke(40, 100, 20);
  strokeWeight(2);
  noFill();
  beginShape();
  vertex(2, -1);
  quadraticVertex(25, -5, 50, -8);
  endShape();
  noStroke(); 
  pop();

  pop();

  pop(); 
}