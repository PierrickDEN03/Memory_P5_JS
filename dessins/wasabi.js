function dessinerWasabi(x, y, taille) {
  push();
  translate(x, y);
  scale(taille / 100);
  rotate(-PI / 18); 
  noStroke();

  
  randomSeed(33);

  

  // ombre
  fill(80, 160, 50);
  beginShape();
  vertex(-15, -60); 
  bezierVertex(-40, -45, -30, 30, -10, 60); 
  bezierVertex(0, 75, 20, 75, 30, 60);       
  bezierVertex(50, 30, 45, -45, 15, -60);   
  bezierVertex(0, -70, -5, -70, -15, -60); 
  endShape(CLOSE);

  // corps
  fill(150, 210, 80); 
  push();
  translate(-3, -2); 
  scale(0.96);
  beginShape();
  vertex(-15, -60);
  bezierVertex(-40, -45, -30, 30, -10, 60);
  bezierVertex(0, 75, 20, 75, 30, 60);
  bezierVertex(50, 30, 45, -45, 15, -60);
  bezierVertex(0, -70, -5, -70, -15, -60);
  endShape(CLOSE);
  pop();


  // texture
  
  fill(100, 160, 50);
  for (let py = -45; py < 55; py += 10) {
    let largeur = map(py, -60, 60, 35, 15);
    
    
    let nbStries = floor(random(2, 5));
    for (let i = 0; i < nbStries; i++) {
      let px = random(-largeur, largeur);
      let decalageY = random(-2, 2);
      
      push();
      translate(px, py + decalageY);
      rotate(random(-0.1, 0.1));
      ellipse(0, 0, random(8, 16), random(3, 5)); 
      pop();
    }
  }
  
  
  fill(60, 120, 30);
  for(let i = 0; i < 15; i++) {
      let py = random(-50, 60);
      let largeur = map(py, -60, 60, 35, 15);
      let px = random(-largeur, largeur);
      ellipse(px, py, random(3, 5), random(2, 4));
  }


  //sommet
  push();
  translate(0, -62);
  rotate(0.1);
  fill(235, 245, 180); 
  ellipse(0, 0, 36, 14);
  
  fill(180, 220, 100); 
  ellipse(0, 0, 24, 9);
  
  fill(120, 180, 60); 
  ellipse(0, 0, 8, 4);
  pop();




  // --- 7. Les Feuilles et la Tige (Réalistes en forme de cœur) ---
  fill(90, 160, 50);
  push();
  translate(5, -63);
  rotate(PI / 15);
  
  // tiges
  beginShape();
  vertex(-2, 0); quadraticVertex(-5, -15, -10, -30);
  vertex(-5, -32); quadraticVertex(0, -15, 2, 0);
  endShape(CLOSE);
  
  beginShape();
  vertex(2, 0); quadraticVertex(5, -20, 15, -35);
  vertex(20, -33); quadraticVertex(10, -18, 5, 0);
  endShape(CLOSE);

  // feuilles
  function dessinerFeuilleCoeur(ax, ay, rot, echelle, col) {
    push();
    translate(ax, ay);
    rotate(rot);
    scale(echelle);
    fill(col);
    beginShape();
    vertex(0, 0); 
    bezierVertex(-15, -10, -25, -25, -10, -35); 
    bezierVertex(0, -45, 10, -45, 10, -35);    
    bezierVertex(25, -25, 15, -10, 0, 0);      
    endShape(CLOSE);
    
    //trait
    fill(0, 0, 0, 15);
    beginShape();
    vertex(0,0); quadraticVertex(-2, -15, -5, -30); quadraticVertex(2, -15, 0, 0);
    endShape(CLOSE);
    pop();
  }
  

  dessinerFeuilleCoeur(-10, -30, -PI/4, 0.8, color(100, 160, 50));
  dessinerFeuilleCoeur(15, -33, PI/6, 1.0, color(120, 180, 60));

  pop();

  pop(); 
}