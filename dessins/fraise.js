function dessinerFraise(x, y, taille) {
    push()
    translate(x, y)
    scale(taille / 100)

    noStroke()
    fill(210, 40, 50)
    beginShape()
    vertex(0, -10)
    bezierVertex(25, -20, 40, 10, 0, 40)
    bezierVertex(-40, 10, -25, -20, 0, -10)
    endShape(CLOSE)

    fill(255, 220, 80)
    for (let i = -15; i <= 15; i += 10) {
        ellipse(i, 5, 4, 6)
        ellipse(i - 5, 18, 4, 6)
    }

    fill(70, 170, 80)
    triangle(-10, -15, 0, -35, 10, -15)
    triangle(-20, -10, -5, -30, 5, -10)
    triangle(20, -10, 5, -30, -5, -10)

    pop()
}
