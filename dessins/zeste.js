

function dessinerZeste(x, y, taille) {
  push();
  translate(x, y);
  scale(taille / 100);
  noStroke();

  randomSeed(10);

  

  //un copeau
  function dessinerCopeau(px, py, longueur, angle, colBase) {
    push();
    translate(px, py);
    rotate(angle);

    
    let epaisseur = random(3, 7);
    let courbure1 = random(-15, 15);
    let courbure2 = random(-15, 15);

    // ombre
    fill(0, 0, 0, 15);
    beginShape();
    vertex(2, 2);
    bezierVertex(longueur * 0.3 + 2, courbure1 + 2, longueur * 0.7 + 2, courbure2 + 2, longueur + 2, 2);
    bezierVertex(longueur * 0.7 + 2, courbure2 - epaisseur + 2, longueur * 0.3 + 2, courbure1 - epaisseur + 2, 0, -epaisseur + 2);
    endShape(CLOSE);

    // corps
    fill(colBase);
    beginShape();
    vertex(0, 0);
    bezierVertex(longueur * 0.3, courbure1, longueur * 0.7, courbure2, longueur, 0);
    bezierVertex(longueur * 0.7, courbure2 - epaisseur, longueur * 0.3, courbure1 - epaisseur, 0, -epaisseur);
    endShape(CLOSE);

    
    fill(255, 255, 255, 70);
    beginShape();
    vertex(0, 0);
    bezierVertex(longueur * 0.3, courbure1, longueur * 0.7, courbure2, longueur, 0);
    bezierVertex(longueur * 0.7, courbure2 - epaisseur * 0.4, longueur * 0.3, courbure1 - epaisseur * 0.4, 0, -epaisseur * 0.4);
    endShape(CLOSE);

    pop();
  }

  // tas
  
  let nombreDeCopeaux = 200; 

  for (let i = 0; i < nombreDeCopeaux; i++) {
    
    let px = randomGaussian(0, 30);
    let py = randomGaussian(0, 15);
    
    let l = random(15, 45); // Longueur du copeau
    let a = random(TWO_PI); // Angle aléatoire

    let couleur;

    if (i < nombreDeCopeaux * 0.3) {
      
      couleur = color(random(210, 230), random(160, 180), 0);
      
    } else if (i < nombreDeCopeaux * 0.8) {
      
      couleur = color(random(240, 255), random(210, 230), random(10, 30));
      
    } else {
      
      couleur = color(random(250, 255), random(240, 255), random(150, 220));
      
      py += random(0, 10); 
    }

    dessinerCopeau(px, py, l, a, couleur);
  }

  pop();
}