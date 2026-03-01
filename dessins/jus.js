
function dessinerJus(x, y, taille) {
  push();
  translate(x, y);
  scale(taille / 100);
  noStroke();

  // jus
  fill(245, 130, 10);
  beginShape();
  vertex(-35, -20); 
  vertex(-26, 90);  
  quadraticVertex(0, 100, 26, 90); 
  vertex(35, -20); 
  endShape(CLOSE);

  //surface
  fill(225, 110, 5);
  ellipse(0, -20, 70, 18);

   // haut du verre
  fill(255, 255, 255, 90); 
  ellipse(0, -60, 78, 20);

  // paille
  push();
  translate(10, -20); 
  rotate(PI / 7);     
  
  fill(210, 30, 30); 
  
  beginShape();
  vertex(-4, 0);      
  vertex(4, 0);       
  vertex(4, -80);     
  vertex(-4, -75);    
  endShape(CLOSE);
  
  // trou de la paille
  fill(100, 10, 10);
  ellipse(0, -77.5, 8, 3);
  pop();

  // base de la paille
  fill(200, 90, 0);
  ellipse(10, -18, 16, 5); 

  // parois
  fill(200, 220, 230, 40); 
  beginShape();
  vertex(-39, -60);
  vertex(-35, -20);
  quadraticVertex(0, -10, 35, -20); 
  vertex(39, -60);
  quadraticVertex(0, -50, -39, -60); 
  endShape();

  fill(255, 255, 255, 150);
  beginShape();
  vertex(-39, -60);
  quadraticVertex(0, -50, 39, -60);
  quadraticVertex(0, -54, -39, -60);
  endShape(CLOSE);


  // reflets
  fill(255, 255, 255, 60);
  beginShape();
  vertex(-32, -40); 
  vertex(-22, 85);  
  quadraticVertex(-15, 80, -15, 75); 
  vertex(-22, -35); 
  endShape(CLOSE);

  fill(255, 255, 255, 40);
  beginShape();
  vertex(25, -10);
  vertex(20, 60);
  vertex(17, 60);
  vertex(22, -10);
  endShape(CLOSE);

  // bulles
  fill(255, 180, 50, 150); 
  ellipse(-10, 10, 4, 4);
  ellipse(5, 30, 6, 6);
  ellipse(-15, 55, 3, 3);
  ellipse(12, 70, 5, 5);
  ellipse(15, 15, 4, 4);

  pop();
}