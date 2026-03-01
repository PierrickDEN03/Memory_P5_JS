function dessinerYaourt(x, y, taille) {
  push();
  translate(x, y);
  scale(taille / 100);
  rotate(-PI / 35); 
  noStroke();

  // ombre
  fill(210, 215, 220); 
  beginShape();
  vertex(-35, -30); 
  quadraticVertex(-30, 20, -25, 60); 
  quadraticVertex(0, 70, 25, 60);    
  quadraticVertex(30, 20, 35, -30);  
  endShape(CLOSE);

  //yaourt
  fill(248, 250, 252);
  push();
  translate(-2, -2);
  beginShape();
  vertex(-35, -30);
  quadraticVertex(-30, 20, -25, 60);
  quadraticVertex(0, 70, 25, 60);
  quadraticVertex(30, 20, 35, -30);
  endShape(CLOSE);
  pop();


  // etiquette
  fill(60, 150, 210); 
  beginShape();
  vertex(-32, -5); 
  quadraticVertex(-28, 25, -26, 45); 
  quadraticVertex(0, 53, 26, 45);    
  quadraticVertex(28, 25, 32, -5);   
  quadraticVertex(0, 3, -32, -5);    
  endShape(CLOSE);

  // ombre
  fill(40, 120, 180);
  beginShape();
  vertex(-32, -5);
  quadraticVertex(-28, 25, -26, 45);
  quadraticVertex(-15, 49, 0, 51);
  quadraticVertex(-20, 25, -15, -1);
  endShape(CLOSE);


    // rebord
  // ombre
  fill(200, 205, 210);
  ellipse(0, -32, 100, 26);
  
  //rebord
  fill(250, 252, 255);
  ellipse(0, -34, 100, 24);

  // trou du yaourt
  fill(220, 225, 230);
  ellipse(0, -34, 75, 16);


  // yaourt
  fill(255);
  beginShape();
  vertex(-35, -34); 
  bezierVertex(-20, -20, 20, -20, 35, -34); 
  bezierVertex(20, -42, -20, -42, -35, -34);
  endShape(CLOSE);
  
 
  fill(245, 250, 255);
  ellipse(10, -35, 25, 12);


  //bout de la cuillere-
  fill(200, 205, 210); // Argenté plus clair
  beginShape();
  vertex(5, -35);
  quadraticVertex(-5, -25, 5, -20); 
  quadraticVertex(15, -25, 15, -35);
  endShape(CLOSE);

  // cuillere
  fill(180, 185, 190); 
  beginShape();
  vertex(5, -35); 
  quadraticVertex(25, -70, 35, -95); 
  vertex(42, -92);
  quadraticVertex(30, -65, 15, -35); 
  endShape(CLOSE);

  // reflets
  fill(255, 255, 255, 60); 
  beginShape();
  vertex(-26, -20);
  quadraticVertex(-35, 10, -22, 55); 
  quadraticVertex(-15, 10, -22, -20); 
  endShape(CLOSE);

  ellipse(18, 50, 4, 12);

  pop();
}