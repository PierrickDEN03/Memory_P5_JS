
function dessinerNavet(x, y, taille) {
  push();
  translate(x, y);
  scale(taille / 100);
  rotate(PI / 20); 
  noStroke();

  // feuilles
  function dessinerFeuille(angle, echelle) {
    push();
    translate(0, -40); 
    rotate(angle);
    scale(echelle);

    // ombre
    fill(90, 150, 40);
    beginShape();
    vertex(0, 0);
    quadraticVertex(25, -30, 0, -75);
    quadraticVertex(-25, -30, 0, 0);
    endShape(CLOSE);

// feuille
    fill(140, 210, 60);
    push();
    translate(-2, 0); 
    beginShape();
    vertex(0, 0);
    quadraticVertex(22, -30, 0, -72);
    quadraticVertex(-22, -30, 0, 0);
    endShape(CLOSE);
    pop();

    // trait foncé
    fill(70, 120, 30);
    beginShape();
    vertex(-1, -10);
    quadraticVertex(2, -35, 0, -60);
    quadraticVertex(-3, -35, -2, -10);
    endShape(CLOSE);

    pop();
  }
  
  dessinerFeuille(-PI / 6, 0.8);  
  dessinerFeuille(PI / 5, 0.9);   
  dessinerFeuille(0, 1.1);        

  // corps
  fill(255, 240, 215); 
  beginShape();
  vertex(0, -40); 
  bezierVertex(65, -40, 75, 20, 40, 55);
  quadraticVertex(20, 75, 12, 90);       
  quadraticVertex(8, 85, 0, 70);         
  bezierVertex(-85, 80, -60, -55, 0, -40);
  endShape(CLOSE);

  // racine
  fill(220, 200, 180);
  beginShape();
  vertex(5, 63);
  quadraticVertex(15, 87, 25, 83);
  quadraticVertex(15, 82, 8, 67);
  endShape(CLOSE);


  // violet
  fill(215, 45, 160); 
  beginShape();
  vertex(0, -40);
  bezierVertex(65, -40, 72, 0, 48, 20); 
  quadraticVertex(30, 40, 10, 25);
  quadraticVertex(-10, 10, -35, 30);
  quadraticVertex(-50, 45, -57, 10);
  
  bezierVertex(-55, -10, -60, -40, 0, -40);
  endShape(CLOSE);


  

  // reflets
  fill(255, 255, 255, 70); 
  beginShape();
  vertex(-45, -15);
  quadraticVertex(-25, -35, -5, -30);
  quadraticVertex(-25, -25, -35, -5);
  endShape(CLOSE);

 
  fill(255, 255, 255, 50);
  ellipse(-15, -10, 8, 5);

  
  fill(220, 195, 170, 150);
  beginShape();
  vertex(-50, 30);
  bezierVertex(-30, 60, 20, 70, 38, 55);
  bezierVertex(15, 65, -20, 50, -50, 30);
  endShape(CLOSE);

  pop();
}