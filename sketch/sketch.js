let jeu

function setup() {
    createCanvas(windowWidth, windowHeight)
    //Récupération des modes de jeu
    const params = new URLSearchParams(window.location.search)
    const mode = params.get('mode') || 'facile'
    const pairesRaw = parseInt(params.get('paires'), 10)
    const nbPaire = Number.isFinite(pairesRaw) ? Math.max(1, Math.min(26, pairesRaw)) : 10
    jeu = new Jeu(mode, nbPaire)
}

function draw() {
    background(220)

    if (jeu.showBonus && jeu.jeuBonus) {
        jeu.jeuBonus.draw()
        return
    }

    if (jeu.jeuBonus) {
        jeu.jeuBonus.setButtonsVisible(false)
    }

    if (jeu.showVictory) {
        jeu.animVictoire()
        return
    }

    const margeGauche = windowWidth * 0.2
    const margeHaut = windowHeight * 0.15
    const margeBas = 2 * margeHaut
    jeu.afficheCartes(margeGauche, margeHaut, margeBas, null, null, null, null, null, false)

    // Affichage en haut de l'écran du texte et des tentatives
    push()
    fill(0)
    textSize(20)
    textAlign(LEFT, TOP)
    const tempsEcoule = Math.floor((Date.now() - jeu.temps) / 1000)
    const minutes = Math.floor(tempsEcoule / 60)
    const secondes = tempsEcoule % 60
    text(`Temps: ${minutes}:${secondes.toString().padStart(2, '0')}`, 40, 10)
    textAlign(RIGHT, TOP)
    text(`Tentatives: ${jeu.nbTentative}`, width - 40, 10)
    pop()

    // Affichage à gauche de l'écran des mots trouvés
    push()
    fill(0)
    textSize(16)
    textAlign(LEFT, TOP)
    text('Mots trouvés:', 10, 80)
    jeu.aMotTrouve.forEach((mot, index) => {
        text(`• ${mot}`, 10, 105 + index * 25)
    })
    pop()
}

function touchStarted() {
    // Si on est en mode victoire ou si le jeu bonus est terminé, laisser les boutons fonctionner
    if (jeu.showVictory || (jeu.showBonus && jeu.jeuBonus && jeu.jeuBonus.endTime)) {
        return true // Laisse passer l'événement vers les boutons HTML
    }

    // Si on est dans le jeu bonus (en cours), gérer le drag & drop
    if (jeu.showBonus && jeu.jeuBonus) {
        jeu.jeuBonus.onPress(mouseX, mouseY)
        return false // Empêche la propagation (on gère nous-même)
    }

    // Sinon, gérer le jeu normal
    console.log('touch')
    return jeu.gererTouch(mouseX, mouseY)
}

function touchMoved() {
    if (jeu.showBonus && jeu.jeuBonus && !jeu.jeuBonus.endTime) {
        jeu.jeuBonus.onDrag()
        return false
    }
}

function touchEnded() {
    if (jeu.showBonus && jeu.jeuBonus && !jeu.jeuBonus.endTime) {
        jeu.jeuBonus.onRelease(mouseX, mouseY)
        return false
    }
}

function mouseDragged() {
    if (jeu.showBonus && jeu.jeuBonus && !jeu.jeuBonus.endTime) {
        jeu.jeuBonus.onDrag()
        return false
    }
}

function mouseReleased() {
    if (jeu.showBonus && jeu.jeuBonus && !jeu.jeuBonus.endTime) {
        jeu.jeuBonus.onRelease(mouseX, mouseY)
        return false
    }
}
