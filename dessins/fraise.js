function dessinerFraise(x, y, taille) {
  push();
  translate(x, y);
  scale(taille / 100);
  noStroke();

  randomSeed(12);

  // ombre
  fill(0, 0, 0, 15);
  ellipse(5, 75, 80, 15);

  fill(160, 20, 30);
  beginShape();
  vertex(0, 100); 
  quadraticVertex(30, 95, 50, 60); 
  quadraticVertex(65, 25, 0, 0);  
  quadraticVertex(-65, 25, -50, 60);
  quadraticVertex(-30, 95, 0, 100); 
  endShape(CLOSE);

  // corps
  fill(235, 40, 50);
  push();
  translate(-2, -2); 
  scale(0.96);
  beginShape();
  vertex(0, 100); 
  quadraticVertex(32, 98, 52, 62); 
  quadraticVertex(67, 27, 0, 0); 
  quadraticVertex(-67, 27, -52, 62); 
  quadraticVertex(-32, 98, 0, 100); 
  endShape(CLOSE);
  pop();


  // graines
  function dessinerGraine(gx, gy) {
    fill(130, 20, 30); 
    ellipse(gx + 1, gy + 1, 3.5, 4.5);
    
    fill(245, 220, 100); 
    push();
    translate(gx, gy);
    rotate(PI/random(-30, 30) - atan2(gx, gy));
    ellipse(0, 0, 3, 4); 
    pop();
  }

 
  // distribution des graines
  for (let py = 10; py < 95; py += 15) {
    for (let px = -55; px <= 55; px += 15) {
      let jx = random(-3, 3);
      let jy = random(-3, 3);
      
      let xReel = px + jx;
      let yReel = py + jy;

      
      let largeurMax = 0;
      
      if (yReel < 15) { //pour ne pas que les graines dépassent
        largeurMax = map(yReel, 0, 15, 0, 26);
      } else if (yReel < 30) {
        largeurMax = map(yReel, 15, 30, 26, 44);
      } else if (yReel < 65) {
        largeurMax = map(yReel, 30, 65, 44, 48);
      } else {
        largeurMax = map(yReel, 65, 100, 48, 0);
      }
      largeurMax -= 5;

      
      if (abs(xReel) < largeurMax && largeurMax > 0) {
        dessinerGraine(xReel, yReel);
      }
    }
  }

  
  // feuilles
  fill(90, 160, 50); 
  push();
  translate(0, 5); 
  scale(1.1); 
  for(let i = -3; i <= 3; i++) {
    push();
    rotate(i * (PI/7));
    scale(1 + abs(i)*0.03, 1 + abs(i)*0.02); 
    triangle(-11, 0, 11, 0, 0, 32); 
    pop();
  }
  pop();

 
  fill(80, 140, 50); 
  rectMode(CENTER);
  rect(0, -3, 6, 20, 2);

  pop();
}