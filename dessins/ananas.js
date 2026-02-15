function dessinerAnanas(x, y, taille) {
    push()
    translate(x, y)
    scale(taille / 100)

    // Corps
    noStroke()
    fill(245, 200, 60)
    ellipse(0, 10, 70, 90)
    fill(235, 185, 40)
    for (let i = -20; i <= 20; i += 10) {
        ellipse(i * 0.6, 10, 6, 50)
    }

    // Feuilles
    fill(80, 170, 60)
    triangle(-20, -40, -5, -80, 0, -40)
    triangle(0, -40, 10, -85, 20, -40)
    triangle(15, -40, 30, -75, 35, -35)

    pop()
}
