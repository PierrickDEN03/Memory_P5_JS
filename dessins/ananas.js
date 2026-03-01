function dessinerAnanas(x, y, taille) {
  push();
  translate(x, y);
  scale(taille / 100);
  noStroke();

  // feuilles foncées
  fill(40, 100, 30); 
  push();
  translate(0, -40); 
  for (let i = -2; i <= 2; i++) {
    push();
    rotate(i * 0.4); 
    triangle(-10, 0, 10, 0, 0, -60); 
    pop();
  }
  pop();

  // feuilles claires
  fill(80, 160, 40); 
  push();
  translate(0, -38);
  for (let i = -1.5; i <= 1.5; i += 1) {
    push();
    rotate(i * 0.5);
    triangle(-8, 0, 8, 0, 0, -45);
    pop();
  }
  pop();

  // fruit
  rectMode(CENTER);
  
  // forme principale
  fill(235, 140, 30); 
  rect(3, 13, 75, 100, 35); 
  
  //ombre
  fill(255, 210, 60); 
  rect(0, 10, 75, 100, 35); 


  // motifs
  fill(235, 140, 30); 
  for (let py = -20; py < 45; py += 18) {
    for (let px = -25; px <= 25; px += 18) {
      let decalage = (py % 36 === 0) ? 0 : 9;
      if (dist(px + decalage, py, 0, 10) < 35) {
        push();
        translate(px + decalage, py);
        rotate(PI / 4); 
        rect(0, 0, 10, 10, 2); 
        pop();
      }
    }
  }

  pop();
}