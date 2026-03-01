function dessinerCerise(x, y, taille) {
  push();
  translate(x, y);
  scale(taille / 100);

  // tiges
  noFill();
  stroke(70, 130, 40); 
  strokeWeight(5);
  strokeCap(ROUND); 

  // gauche
  beginShape();
  vertex(-18, 5); 
  quadraticVertex(-10, -40, 5, -65);
  endShape();

  // droite
  beginShape();
  vertex(18, 10); 
  quadraticVertex(10, -35, 5, -65); 
  endShape();
  
  noStroke(); 

  // feuille
  push();
  translate(5, -65); 
  rotate(PI / 6);   
  
  // ombre feuille
  fill(50, 100, 30);
  beginShape();
  vertex(0, 0);
  quadraticVertex(30, -22, 60, 0);
  quadraticVertex(30, 22, 0, 0);
  endShape();
  
  // feuille
  fill(90, 160, 50);
  translate(-2, -2); 
  beginShape();
  vertex(0, 0);
  quadraticVertex(30, -20, 60, 0); 
  quadraticVertex(30, 20, 0, 0);  
  endShape();
  
  // trait feuille
  stroke(60, 110, 35);
  strokeWeight(2);
  line(0, 0, 45, 0);
  noStroke();
  pop();


  // cerise gauche
  push();
  translate(-18, 15);
  cerise();
  pop();

  // cerise droite
  push();
  translate(18, 20);
  cerise();
  pop();

  pop();
}


function cerise() {
  // arrière
  fill(160, 20, 40); 
  ellipse(2, 3, 48, 44);

  // avant
  fill(235, 40, 60); 
  ellipse(-1, 1, 46, 42);


  // reflet
  fill(255, 255, 255, 200); 
  push();
  rotate(-PI/4);
  ellipse(0, -15, 12, 6); 
  pop();
}