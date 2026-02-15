let jeu
let bonusGame
let lastBonusActive = false

class BonusGame {
    constructor(words) {
        this.words = words.slice()
        this.order = words.slice().sort(() => Math.random() - 0.5)
        this.dragIndex = -1
        this.dragOffsetX = 0
        this.dragOffsetY = 0
        this.startTime = Date.now()
        this.endTime = null
        this.message = ''
        this.layout()
    }

    layout() {
        const padding = 40
        const gap = 12
        const tileH = 44
        const tileW = Math.max(90, Math.min(180, width * 0.18))
        const cols = Math.max(1, Math.floor((width - padding * 2) / (tileW + gap)))

        this.tileW = tileW
        this.tileH = tileH
        this.gap = gap
        this.cols = cols
        this.positions = this.order.map((_, i) => {
            const col = i % cols
            const row = Math.floor(i / cols)
            const x = padding + col * (tileW + gap)
            const y = 140 + row * (tileH + gap)
            return { x, y, w: tileW, h: tileH }
        })
    }

    draw() {
        background(235)
        fill(30)
        textSize(26)
        textAlign(LEFT, TOP)
        text('Jeu bonus : trie les mots par ordre alphabetique', 40, 20)

        const temps = Math.floor(((this.endTime ?? Date.now()) - this.startTime) / 1000)
        const minutes = Math.floor(temps / 60)
        const secondes = temps % 60
        textSize(16)
        text(`Temps: ${minutes}:${secondes.toString().padStart(2, '0')}`, 40, 60)

        this.layout()

        this.order.forEach((word, i) => {
            if (i === this.dragIndex) {
                return
            }
            const pos = this.positions[i]
            this.drawTile(word, pos.x, pos.y, pos.w, pos.h)
        })

        if (this.dragIndex >= 0) {
            this.drawTile(
                this.order[this.dragIndex],
                mouseX - this.dragOffsetX,
                mouseY - this.dragOffsetY,
                this.tileW,
                this.tileH,
                true,
            )
        }

        if (this.message) {
            textSize(18)
            text(this.message, 40, height - 60)
        }
    }

    drawTile(word, x, y, w, h, active = false) {
        push()
        stroke(0)
        strokeWeight(2)
        fill(active ? '#FDE68A' : '#FFFFFF')
        rect(x, y, w, h, 8)
        noStroke()
        fill(20)
        textAlign(CENTER, CENTER)
        textSize(14)
        text(word, x + w * 0.5, y + h * 0.5)
        pop()
    }

    indexAt(x, y) {
        for (let i = 0; i < this.positions.length; i += 1) {
            const p = this.positions[i]
            if (x >= p.x && x <= p.x + p.w && y >= p.y && y <= p.y + p.h) {
                return i
            }
        }
        return -1
    }

    onPress(x, y) {
        const idx = this.indexAt(x, y)
        if (idx < 0) {
            return
        }
        this.dragIndex = idx
        const p = this.positions[idx]
        this.dragOffsetX = x - p.x
        this.dragOffsetY = y - p.y
    }

    onRelease(x, y) {
        if (this.dragIndex < 0) {
            return
        }
        const target = this.indexAt(x, y)
        if (target >= 0 && target !== this.dragIndex) {
            const tmp = this.order[this.dragIndex]
            this.order[this.dragIndex] = this.order[target]
            this.order[target] = tmp
        }
        this.dragIndex = -1
        this.checkSorted()
    }

    onDrag() {
        // position handled in draw
    }

    checkSorted() {
        const ref = this.words.slice().sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }))
        const ok = this.order.every((w, i) => w.localeCompare(ref[i], 'fr', { sensitivity: 'base' }) === 0)
        if (ok) {
            if (!this.endTime) {
                this.endTime = Date.now()
            }
            this.message = 'Bravo, ordre correct !'
        } else {
            this.message = ''
        }
    }
}

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

    if (jeu.showBonus) {
        if (!bonusGame || !lastBonusActive) {
            bonusGame = new BonusGame(jeu.aMotTrouve)
        }
        lastBonusActive = true
        bonusGame.draw()
        return
    }

    if (lastBonusActive) {
        bonusGame = null
        lastBonusActive = false
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
    // Ne pas gérer les clics si on est en mode victoire (pour laisser le bouton fonctionner)
    if (jeu.showVictory) {
        return true // Permet aux autres éléments (comme le bouton) de recevoir l'événement
    }

    if (jeu.showBonus) {
        bonusGame.onPress(mouseX, mouseY)
        return true
    }

    console.log('touch')
    return jeu.gererTouch(mouseX, mouseY)
}

function mouseDragged() {
    if (jeu.showBonus) {
        bonusGame.onDrag()
        return false
    }
}

function mouseReleased() {
    if (jeu.showBonus) {
        bonusGame.onRelease(mouseX, mouseY)
        return false
    }
}
