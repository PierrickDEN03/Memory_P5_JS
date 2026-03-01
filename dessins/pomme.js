
function dessinerPomme(x, y, taille) {
  push();
  translate(x, y);
  scale(taille / 100);
  noStroke();

 
  randomSeed(12);


  // ombre
  fill(190, 20, 30);
  beginShape();
  vertex(0, -35); 
  bezierVertex(35, -60, 80, -45, 75, 5); 
  bezierVertex(70, 55, 30, 65, 0, 55);    
  bezierVertex(-30, 65, -70, 55, -75, 5); 
  bezierVertex(-80, -45, -35, -60, 0, -35);
  endShape(CLOSE);

  // corps
  fill(225, 40, 45);
  push();
  translate(-2, -2);
  beginShape();
  vertex(0, -35);
  bezierVertex(35, -60, 80, -45, 75, 5); 
  bezierVertex(70, 55, 30, 65, 0, 55);   
  bezierVertex(-30, 65, -70, 55, -75, 5); 
  bezierVertex(-80, -45, -35, -60, 0, -35);
  endShape(CLOSE);
  pop();


  // tige
  fill(30, 30, 30);
  beginShape();
  vertex(-2, -40);
  quadraticVertex(-4, -60, 0, -75);
  vertex(4, -75);
  quadraticVertex(2, -60, 3, -40);
  endShape(CLOSE);

  // feuille
  fill(150, 190, 50);
  push();
  translate(0, -40); 
  rotate(-PI / 12);
  
  beginShape();
  vertex(0, 0);
  quadraticVertex(30, -35, 55, -15); 
  quadraticVertex(25, 5, 0, 0);      
  endShape(CLOSE);
  pop();


  // reflet
  fill(255, 255, 255, 40);
  beginShape();
  vertex(-50, -15);
  quadraticVertex(-60, 15, -40, 40);
  quadraticVertex(-50, 15, -40, -15);
  endShape(CLOSE);

  pop();
}