function dessinerHaricot(x, y, taille) {
  push();
  translate(x, y);
  scale(taille / 100);
  noStroke();

  // haricot 1
  push();
  rotate(PI / 8); 
  let len1 = 160; 
  let curv1 = 30; 
  
  // ombre
  fill(40, 100, 30);
  beginShape();
  vertex(-len1/2, -6);
  quadraticVertex(0, curv1 - 6, len1/2, -1); 
  vertex(len1/2 + 8, 0); 
  quadraticVertex(0, curv1 + 6, -len1/2, 6); 
  vertex(-len1/2, 6); 
  endShape(CLOSE);

  // corps
  fill(80, 160, 40);
  push();
  translate(-1, -1.5); 
  beginShape();
  vertex(-len1/2, -6); 
  quadraticVertex(0, curv1 - 6, len1/2, -1); 
  vertex(len1/2 + 8, 0); 
  quadraticVertex(0, curv1 + 6, -len1/2, 6); 
  vertex(-len1/2, 6); 
  endShape(CLOSE);
  pop();
  
  // tiges
  fill(210, 170, 90);
  ellipse(-len1/2, 0, 10, 12);

  fill(80, 50, 20);
  ellipse(len1/2 + 8, 0, 4, 3);
  
  // reflet
  fill(255, 255, 255, 70); 
  beginShape();
  vertex(-len1/2 + 20, curv1/2);
  quadraticVertex(0, curv1/2 - 2, len1/2 - 20, curv1/2 - 4);
  quadraticVertex(0, curv1/2 + 2, -len1/2 + 20, curv1/2);
  endShape(CLOSE);
  pop();


  // haricot2
  push();
  translate(-10, 15); 
  rotate(-PI / 20); 
  let len2 = 170; 
  let curv2 = 10;  

  // ombre
  fill(40, 100, 30);
  beginShape();
  vertex(-len2/2, -5);
  quadraticVertex(0, curv2 - 5, len2/2, -1);
  vertex(len2/2 + 6, 0);
  quadraticVertex(0, curv2 + 5, -len2/2, 5);
  vertex(-len2/2, 5);
  endShape(CLOSE);

  // corps
  fill(80, 160, 40);
  push(); translate(-1, -1);
  beginShape();
  vertex(-len2/2, -5);
  quadraticVertex(0, curv2 - 5, len2/2, -1);
  vertex(len2/2 + 6, 0);
  quadraticVertex(0, curv2 + 5, -len2/2, 5);
  vertex(-len2/2, 5);
  endShape(CLOSE);
  pop();
  
  // tiges
  fill(210, 170, 90); ellipse(-len2/2, 0, 9, 11); 
  fill(80, 50, 20); ellipse(len2/2 + 6, 0, 4, 3); 

  // relfet
  fill(255, 255, 255, 80);
  beginShape();
  vertex(-len2/2 + 30, curv2/2 - 1);
  quadraticVertex(0, curv2/2 - 3, len2/2 - 30, curv2/2 - 4);
  quadraticVertex(0, curv2/2 + 1, -len2/2 + 30, curv2/2 - 1);
  endShape(CLOSE);
  pop();


  // haricot 3
  push();
  translate(5, 5); 
  rotate(PI / 50); 
  let len3 = 140; 
  let curv3 = 15;

  // ombre
  fill(40, 100, 30);
  beginShape();
  vertex(-len3/2, -4);
  quadraticVertex(0, curv3 - 4, len3/2, 0);
  vertex(len3/2 + 5, 1);
  quadraticVertex(0, curv3 + 4, -len3/2, 4);
  vertex(-len3/2, 4);
  endShape(CLOSE);

  // corps
  fill(80, 160, 40);
  push(); translate(-1, -0.8);
  beginShape();
  vertex(-len3/2, -4);
  quadraticVertex(0, curv3 - 4, len3/2, 0);
  vertex(len3/2 + 5, 1);
  quadraticVertex(0, curv3 + 4, -len3/2, 4);
  vertex(-len3/2, 4);
  endShape(CLOSE);
  pop();
  
  // tiges
  fill(210, 170, 90); ellipse(-len3/2, 0, 8, 10);
  fill(80, 50, 20); ellipse(len3/2 + 5, 1, 3, 3);
  pop();

  pop();
}