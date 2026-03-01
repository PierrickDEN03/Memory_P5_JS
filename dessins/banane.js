function dessinerBanane(x, y, taille) {
  push();
  translate(x, y);
  scale(taille / 100);
  rotate(PI / 6); 
  noStroke();

  // partie foncée
  fill(230, 180, 40);
  beginShape();
  vertex(-62, 12); 
  quadraticVertex(0, 85, 62, 2); 
  quadraticVertex(0, 22, -62, 12); 
  endShape(CLOSE);

  // jaune clair
  fill(255, 225, 70);
  push();
  translate(0, -3); 
  beginShape();
  vertex(-60, 10);
  quadraticVertex(0, 65, 60, 0);
  quadraticVertex(0, 28, -60, 10);
  endShape(CLOSE);
  
  // tâches
  fill(160, 110, 40);
  ellipse(-40, 25, 3, 4);
  ellipse(-15, 45, 4, 3);
  ellipse(20, 35, 3, 3); 
  ellipse(45, 15, 2, 3); 

  pop();

  // bouts
  fill(120, 80, 30);
  push(); translate(-60, 10); rotate(-PI / 8); rectMode(CENTER); rect(0, 0, 10, 11, 4); pop();
  push(); translate(57, 2); rotate(PI / 8); rectMode(CENTER); rect(0, 0, 8, 10, 4); pop();

  pop();
}