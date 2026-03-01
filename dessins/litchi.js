
function dessinerLitchi(x, y, taille) {
  push();
  translate(x, y);
  scale(taille / 100);
  noStroke();
  
  // tige
  fill(100, 50, 20);
  push();
  translate(5, -42);
  rotate(PI / 10);
  rectMode(CENTER);
  rect(0, 0, 6, 15, 2);
  pop();

  // ombre feuille
  fill(20, 80, 20);
  beginShape();
  vertex(2, -35); 
  quadraticVertex(-60, -60, -85, 0); 
  quadraticVertex(-30, 10, 2, -35); 
  endShape(CLOSE);

  // feuille
  fill(60, 150, 40);
  push();
  translate(-2, -2); 
  beginShape();
  vertex(2, -35);
  quadraticVertex(-60, -60, -85, 0);
  quadraticVertex(-30, 10, 2, -35);
  endShape(CLOSE);
  pop();
  
  fill(100, 180, 50);
  beginShape();
  vertex(0, -37);
  quadraticVertex(-50, -45, -75, -5);
  quadraticVertex(-35, -20, 0, -35);
  endShape(CLOSE);


  // corps
  function bosse(rayon, tailleBosse) {
    ellipse(0, 0, rayon * 2);
    for (let a = 0; a < TWO_PI; a += PI / 10) {
      ellipse(cos(a) * rayon, sin(a) * rayon, tailleBosse);
    }
  }

  // ombre
  fill(180, 20, 60);
  bosse(38, 18);

  // corps
  fill(245, 60, 100);
  push();
  translate(-3, -3); 
  bosse(36, 16);
  pop();


  // texture
  
  fill(210, 30, 70); 
  for (let r = 8; r <= 35; r += 12) {
    let nbEcailles = floor(TWO_PI * r / 12); 
    
    for (let i = 0; i < nbEcailles; i++) {
      let a = (i * TWO_PI) / nbEcailles;
      let angleAlea = a + random(-0.2, 0.2); 
      let px = cos(angleAlea) * r;
      let py = sin(angleAlea) * r;

      push();
      translate(px, py);
      rotate(angleAlea + PI / 2); 
      arc(0, 0, 12, 8, 0, PI); 
      pop();
    }
  }

  pop();
}