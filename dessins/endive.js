function dessinerEndive(x, y, taille) {
  push();
  translate(x, y);
  scale(taille / 100);
  noStroke();

  // --- 1. Les pointes vertes (Arrière-plan) ---
  // Ce sont les feuilles qui dépassent derrière
  fill(100, 160, 60); // Vert feuille
  push();
  rotate(-0.1); 
  beginShape();
  vertex(0, -90); // Pointe haute
  quadraticVertex(30, -50, 25, 0); 
  quadraticVertex(0, 20, -25, 0);
  quadraticVertex(-30, -50, 0, -90);
  endShape(CLOSE);
  pop();

  // --- 2. Les feuilles intermédiaires (Transition Jaune-Vert) ---
  fill(180, 210, 80); // Vert anis / Jaune
  push();
  translate(0, 10); // Un peu plus bas
  rotate(0.05);
  beginShape();
  vertex(-5, -80); // Pointe
  quadraticVertex(35, -30, 30, 40);
  quadraticVertex(0, 60, -30, 40);
  quadraticVertex(-35, -30, -5, -80);
  endShape(CLOSE);
  pop();

  // --- 3. Le corps principal (Blanc/Crème) ---
  // C'est la grosse feuille blanche devant
  fill(255, 250, 225); // Blanc crème
  
  beginShape();
  vertex(0, -60); // Pointe du blanc (plus basse)
  
  // Côté droit bombé
  quadraticVertex(35, -20, 32, 50); 
  
  // Base arrondie
  quadraticVertex(0, 85, -32, 50);
  
  // Côté gauche
  quadraticVertex(-35, -20, 0, -60);
  endShape(CLOSE);

  // --- 4. Définition des feuilles (Volume) ---
  // Pour montrer que les feuilles s'enroulent, on ajoute une ombre portée
  // sur le côté, comme si une feuille passait par-dessus l'autre.
  
  fill(235, 230, 200); // Crème un peu plus foncé (ombre)
  beginShape();
  vertex(0, -60);
  quadraticVertex(15, 0, 10, 70); // Une ligne courbe qui descend
  vertex(0, 78);
  quadraticVertex(-10, 60, -5, 0); // Retour fin
  endShape(CLOSE);
  
  // Une autre feuille sur le côté gauche pour l'asymétrie
  fill(245, 240, 215);
  beginShape();
  vertex(-32, 50);
  quadraticVertex(-25, 0, -10, -40);
  quadraticVertex(-35, 0, -32, 50);
  endShape();


  // --- 5. Le "Q" (La base coupée) ---
  // Le petit cercle marron/orange à la base
  fill(160, 100, 60);
  ellipse(0, 78, 20, 10);
  
  // Le cœur de la coupe (plus clair)
  fill(220, 200, 180);
  ellipse(0, 78, 12, 6);

  pop();
}