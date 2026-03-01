

function dessinerVanille(x, y, taille) {
  push();
  translate(x, y);
  scale(taille / 100);
  noStroke();

  // gousses
  function dessinerGousse(longueur, angle, courbure) {
    push();
    rotate(angle);
    
    //ombre
    fill(35, 15, 10); 
    beginShape();
    vertex(0, -3);
    bezierVertex(longueur * 0.3, -5 - courbure, longueur * 0.7, -2 - courbure, longueur, -4);
    bezierVertex(longueur + 8, -5, longueur + 5, 5, longueur - 2, 5); 
    bezierVertex(longueur * 0.7, 4 - courbure, longueur * 0.3, 2 - courbure, 0, 3);
    endShape(CLOSE);

    // gousse
    fill(65, 35, 20); 
    push();
    translate(-1, -1); 
    beginShape();
    vertex(0, -3);
    bezierVertex(longueur * 0.3, -5 - courbure, longueur * 0.7, -2 - courbure, longueur, -4);
    bezierVertex(longueur + 8, -5, longueur + 5, 5, longueur - 2, 5);
    bezierVertex(longueur * 0.7, 4 - courbure, longueur * 0.3, 2 - courbure, 0, 3);
    endShape(CLOSE);
    pop();

    //fente
    fill(90, 50, 30);
    beginShape();
    vertex(longueur * 0.1, 0);
    quadraticVertex(longueur * 0.5, 2 - courbure, longueur * 0.9, 0);
    quadraticVertex(longueur * 0.5, 0 - courbure, longueur * 0.1, 0);
    endShape();

    pop();
  }

  //quatre gousses
  dessinerGousse(110, PI - 0.2, 10);   
  dessinerGousse(130, PI + 0.15, -15);  
  dessinerGousse(120, PI + 0.4, 5);     
  dessinerGousse(100, -0.2, -10);      

  // petales
  function dessinerPetale(angle, longueur, largeur) {
    push();
    rotate(angle);
    
    // ombre
    fill(235, 220, 180);
    beginShape();
    vertex(0, 0);
    quadraticVertex(largeur, -longueur * 0.5, 0, -longueur); 
    quadraticVertex(-largeur, -longueur * 0.5, 0, 0); 
    endShape(CLOSE);

    // pétale
    fill(255, 248, 215);
    push();
    scale(0.92); 
    translate(0, -2);
    beginShape();
    vertex(0, 0);
    quadraticVertex(largeur, -longueur * 0.5, 0, -longueur);
    quadraticVertex(-largeur, -longueur * 0.5, 0, 0);
    endShape(CLOSE);
    pop();

    // trait
    fill(245, 235, 195);
    beginShape();
    vertex(0, 0);
    quadraticVertex(largeur * 0.2, -longueur * 0.4, 0, -longueur * 0.8);
    quadraticVertex(-largeur * 0.2, -longueur * 0.4, 0, 0);
    endShape(CLOSE);
    
    pop();
  }
  
 
  dessinerPetale(0, 60, 20);          
  dessinerPetale(PI - 0.7, 55, 18);    
  dessinerPetale(-PI + 0.7, 55, 18);   

  
  dessinerPetale(-0.9, 50, 28);        
  dessinerPetale(0.9, 50, 28);         


  // coeur

  fill(250, 210, 80);
  beginShape();
  vertex(-8, 0);
  bezierVertex(-25, 20, -15, 35, 0, 35); 
  bezierVertex(15, 35, 25, 20, 8, 0);   
  endShape(CLOSE);

  
  fill(220, 120, 30);
  beginShape();
  vertex(-5, 8);
  quadraticVertex(0, 25, 5, 8);
  quadraticVertex(0, 15, -5, 8);
  endShape(CLOSE);

 
  fill(255, 235, 130);
  beginShape();
  vertex(-12, 15);
  quadraticVertex(0, 45, 12, 15);
  quadraticVertex(0, 30, -12, 15);
  endShape(CLOSE);


  fill(255, 250, 200);
  ellipse(0, 8, 12, 10);
  fill(230, 160, 40); 
  ellipse(0, 10, 5, 4);

  pop();
}