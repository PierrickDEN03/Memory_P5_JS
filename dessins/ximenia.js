function dessinerXimenia(x, y, taille) {
  push();
  translate(x, y);
  scale(taille / 100);
  noStroke();

  // feuille
  function dessinerFeuille(px, py, rot, echelle) {
    push();
    translate(px, py);
    rotate(rot);
    scale(echelle);

    // ombre
    fill(100, 130, 40);
    beginShape();
    vertex(0, 0); 
    quadraticVertex(-30, -20, -70, 0); 
    quadraticVertex(-30, 25, 0, 0);   
    endShape(CLOSE);

    //feuille
    fill(140, 170, 50);
    push(); 
    translate(-2, -2); 
    scale(0.95);
    beginShape();
    vertex(0, 0);
    quadraticVertex(-30, -20, -70, 0);
    quadraticVertex(-30, 25, 0, 0);
    endShape(CLOSE);
    pop();

    //trait
    fill(90, 120, 30);
    beginShape();
    vertex(-5, 0);
    quadraticVertex(-35, -5, -60, 0);
    quadraticVertex(-35, 1, -5, 0);
    endShape(CLOSE);
    pop();
  }

  
  dessinerFeuille(-10, -65, PI / 8, 0.9); 
  dessinerFeuille(10, -65, PI - PI / 8, 0.9); 

  // tige
  fill(90, 120, 30);
  beginShape();
  vertex(-5, -20);
  quadraticVertex(-15, -45, -20, -70);
  vertex(-10, -72);
  quadraticVertex(-5, -50, 0, -40); 
  quadraticVertex(5, -50, 10, -72); 
  quadraticVertex(15, -45, 5, -20);
  endShape(CLOSE);


  // ximenia droit
  push();
  translate(25, 0);
  rotate(PI / 15); 
  fill(230, 110, 20);
  ellipse(0, 0, 70, 90);

  fill(250, 140, 30);
  ellipse(-2, -2, 66, 86);


  fill(210, 90, 15);
  beginShape();
  vertex(15, -25); quadraticVertex(28, 0, 15, 30); quadraticVertex(24, 0, 12, -25);
  endShape(CLOSE);

  // reflet
  fill(255, 255, 255, 40);
  beginShape();
  vertex(-20, -30); quadraticVertex(-30, 0, -15, 30); quadraticVertex(-22, 0, -14, -30);
  endShape(CLOSE);
  pop();


  // ximenia gauche
  push();
  translate(-25, 5);
  rotate(-PI / 12); 

 
  fill(230, 110, 20);
  ellipse(0, 0, 75, 95);

  
  fill(250, 140, 30);
  ellipse(-2, -2, 71, 91);

  
  fill(210, 90, 15);
  beginShape();
  vertex(26, -20); quadraticVertex(36, 0, 22, 25); quadraticVertex(31, 0, 23, -20);
  endShape(CLOSE);
  beginShape();
  vertex(23, 30); quadraticVertex(26, 35, 18, 42); quadraticVertex(23, 35, 21, 30);
  endShape(CLOSE);

  // reflet
  fill(255, 255, 255, 50);
  beginShape();
  vertex(-22, -35); quadraticVertex(-35, 0, -18, 35); quadraticVertex(-25, 0, -16, -35);
  endShape(CLOSE);
  pop();

  pop();
}