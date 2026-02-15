function dessinerBanane(x, y, taille) {
    push()
    translate(x, y)
    scale(taille / 100)

    noStroke()
    fill(255, 220, 60)
    arc(0, 0, 120, 70, PI + 0.1, TWO_PI - 0.1, CHORD)
    fill(245, 200, 40)
    arc(0, -5, 100, 55, PI + 0.1, TWO_PI - 0.1, CHORD)

    fill(120, 80, 30)
    rect(55, -5, 8, 6, 2)

    pop()
}
