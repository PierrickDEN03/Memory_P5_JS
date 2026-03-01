function dessinerSalade(x, y, taille) {
  push();
  translate(x, y);
  scale(taille / 100);
  noStroke();

  
  randomSeed(42);


  // feuille
  function dessinerFeuille(cx, cy, rayonX, rayonY, angleDebut, angleFin, couleur) {
    fill(couleur);
    beginShape();
    vertex(0, 40); 

    let steps = 25; 
    for (let i = 0; i <= steps; i++) {
      let t = map(i, 0, steps, angleDebut, angleFin);
      
      
      let ondulation = sin(t * 18) * 3; 
      
      let px = cx + cos(t) * (rayonX + ondulation);
      let py = cy + sin(t) * (rayonY + ondulation);
      vertex(px, py);
    }
    endShape(CLOSE);
  }


  // couche arrière
  dessinerFeuille(0, 0, 65, 55, PI, TWO_PI, color(80, 150, 50)); 
  dessinerFeuille(-10, 10, 60, 50, HALF_PI, PI + HALF_PI, color(90, 160, 55)); 
  dessinerFeuille(10, 10, 60, 50, -HALF_PI, HALF_PI, color(70, 140, 45)); 

  // couche du milieu
  dessinerFeuille(0, 5, 50, 45, PI - 0.5, TWO_PI + 0.5, color(110, 180, 60));
  dessinerFeuille(-5, 15, 45, 40, HALF_PI, PI + 0.5, color(120, 190, 65));
  dessinerFeuille(5, 15, 45, 40, -0.5, HALF_PI, color(100, 170, 55));

  // coeur
  dessinerFeuille(0, 15, 30, 25, PI, TWO_PI, color(150, 210, 80));
  dessinerFeuille(0, 22, 18, 12, 0, TWO_PI, color(190, 235, 110)); 


  pop();
}