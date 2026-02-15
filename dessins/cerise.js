function dessinerCerise(x, y, taille) {
    push()
    translate(x, y)
    scale(taille / 100)

    stroke(80, 140, 60)
    strokeWeight(4)
    noFill()
    bezier(-5, -35, -15, -60, -30, -70, -35, -85)
    bezier(15, -35, 20, -60, 10, -70, 5, -85)

    noStroke()
    fill(200, 30, 40)
    ellipse(-12, 0, 28, 30)
    ellipse(12, 0, 28, 30)

    fill(255, 255, 255, 80)
    ellipse(-18, -6, 8, 10)
    ellipse(6, -6, 8, 10)

    pop()
}
