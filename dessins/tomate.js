function dessinerTomate(x, y, taille) {
  push();
  translate(x, y);
  scale(taille / 100);
  noStroke();

  // ombre
  fill(180, 30, 20);
  beginShape();
  vertex(0, -48);
  bezierVertex(45, -50, 65, -20, 65, 10); 
  bezierVertex(65, 50, 35, 60, 0, 60);    
  bezierVertex(-35, 60, -65, 50, -65, 10); 
  bezierVertex(-65, -20, -45, -50, 0, -48); 
  endShape(CLOSE);

  // corps
  fill(235, 50, 40);
  push();
  translate(-2, -2);
  beginShape();
  vertex(0, -48); 
  bezierVertex(45, -50, 65, -20, 65, 10); 
  bezierVertex(65, 50, 35, 60, 0, 60);    
  bezierVertex(-35, 60, -65, 50, -65, 10); 
  bezierVertex(-65, -20, -45, -50, 0, -48); 
  endShape(CLOSE);
  pop();


  // reflet
  fill(255, 255, 255, 180);
  push();
  translate(-35, -15); 
  rotate(-PI / 6);     
  ellipse(0, 0, 12, 30);
  pop();
  
  ellipse(-25, -35, 8, 8);


  fill(25, 80, 35);
  push();
  translate(0, -45); 
  
  beginShape();
  vertex(0, 5); // Centre
  quadraticVertex(-20, -5, -40, 5);   
  quadraticVertex(-15, 10, -5, 8);   
  quadraticVertex(-25, -15, -30, -30);
  quadraticVertex(-10, -10, 0, 0);    
  quadraticVertex(10, -20, 20, -35);  
  quadraticVertex(12, -5, 5, 8);      
  quadraticVertex(30, 5, 45, 15);    
  quadraticVertex(20, 15, 5, 12);    
  endShape(CLOSE);
  
 
  fill(45, 130, 50);
  translate(-1, -1);
  beginShape();
  vertex(0, 5); 
  quadraticVertex(-20, -5, -40, 5);   
  quadraticVertex(-15, 10, -5, 8);    
  quadraticVertex(-25, -15, -30, -30);
  quadraticVertex(-10, -10, 0, 0);    
  quadraticVertex(10, -20, 20, -35);  
  quadraticVertex(12, -5, 5, 8);      
  quadraticVertex(30, 5, 45, 15);     
  quadraticVertex(20, 15, 5, 12);     
  endShape(CLOSE);

  // tige
  fill(90, 150, 60);
  beginShape();
  vertex(-3, -2);
  quadraticVertex(-5, -15, -2, -22); 
  vertex(4, -20);
  quadraticVertex(2, -10, 3, 0);
  endShape(CLOSE);
  
  pop();

  pop();
}