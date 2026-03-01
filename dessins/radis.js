
function dessinerRadis(x, y, taille) {
  push();
  translate(x, y);
  scale(taille / 100);
  rotate(PI / 15); 
  noStroke();

  // feuilles ombre
  function dessinerFeuilleRadis(angle, echelle, colOmbre, colLumiere) {
    push();
    translate(0, -35); 
    rotate(angle);
    scale(echelle);

    
    fill(colOmbre);
    beginShape();
    vertex(-3, 0);
    quadraticVertex(-4, -40, -1, -80);
    vertex(2, -80);
    quadraticVertex(3, -40, 2, 0);
    endShape(CLOSE);

    
    fill(colLumiere);
    beginShape();
    vertex(0, -15);
    quadraticVertex(25, -25, 18, -40); 
    quadraticVertex(10, -40, 15, -55); 
    quadraticVertex(35, -65, 15, -80); 
    quadraticVertex(5, -95, -5, -95);  
    quadraticVertex(-25, -80, -12, -60); 
    quadraticVertex(-5, -50, -15, -40);  
    quadraticVertex(-20, -25, 0, -15);  
    endShape(CLOSE);
    pop();
  }

  // trois feuilles
  dessinerFeuilleRadis(-PI / 6, 0.9, color(60, 100, 40), color(90, 140, 50));  
  dessinerFeuilleRadis(PI / 8, 0.8, color(50, 90, 30), color(80, 130, 40));   
  dessinerFeuilleRadis(-PI / 25, 1.1, color(70, 110, 40), color(110, 170, 60)); 


  // corps du radis
  fill(250, 235, 240);
  beginShape();
  vertex(-22, -40); 
  bezierVertex(-30, 0, -20, 45, -5, 75);
  
 
  quadraticVertex(-10, 90, 5, 105);
  quadraticVertex(15, 115, 0, 125); 
  quadraticVertex(10, 115, 0, 100);
  quadraticVertex(-2, 90, 5, 75);
  
  bezierVertex(20, 45, 30, 0, 22, -40); 
  endShape(CLOSE);


  // partie rose
  
  fill(235, 40, 80); 
  beginShape();
  vertex(-22, -40);
  bezierVertex(-30, 0, -23, 25, -18, 35); 
  
  quadraticVertex(-10, 45, 0, 35);
  quadraticVertex(10, 25, 18, 38);
  
  bezierVertex(24, 25, 30, 0, 22, -40); 
  endShape(CLOSE);

  // reflet
  fill(255, 255, 255, 60);
  beginShape();
  vertex(-14, -35);
  quadraticVertex(-22, -10, -15, 20); 
  quadraticVertex(-10, 5, -8, -35);   
  endShape(CLOSE);


  fill(255, 255, 255, 40);
  ellipse(-10, -5, 5, 15);

  fill(220, 195, 205, 150);
  beginShape();
  vertex(-5, 75);
  bezierVertex(15, 45, 20, 25, 12, 30);
  bezierVertex(20, 50, 5, 70, -5, 75);
  endShape(CLOSE);

  pop();
}