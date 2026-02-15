const FRAMES = 7
const LAST_FRAME = FRAMES - 1 // Frame 6 = face visible
const FIRST_FRAME = 0 // Frame 0 = face cachée
let carteImage = null
let pileCacheeCount = 0

class Carte {
    constructor(lettre, isTexte) {
        if (!carteImage) {
            carteImage = loadImage('assets/img_carte.png')
        }
        this.image = carteImage
        this.sens = 'cache' // 'cache' ou 'visible'
        this.display = 'normal' // 'normal' ou 'hidden'
        this.frameIndex = FIRST_FRAME // Commence sur frame 0 (carte cachée avec points)
        this.frameValue = FIRST_FRAME
        this.frameDirection = 0 // 1 pour avancer, -1 pour reculer, 0 pour arrêt
        this.frameSpeed = 0.15
        this.isAnimating = false
        this.isTexte = isTexte
        this.lettre = lettre
        this.x = 0
        this.y = 0
        this.w = 0
        this.h = 0
        this.stackIndex = -1
        this.vicSeed = random(1000)
        this.vicSpeed = random(0.02, 0.06)
        this.vicDir = random() < 0.5 ? -1 : 1
        this.vicX = null
        this.vicY = null
        this.vicVx = null
        this.vicVy = null
        this.vicRot = null
        this.vicRotSpeed = null
    }

    // Retourne vers la face cachée (animation de droite à gauche : frame 6 → 0)
    faceCachee() {
        this.sens = 'cache'
        this.demarrerAnimationVersFaceCachee()
    }

    // Retourne vers la face visible (animation de gauche à droite : frame 0 → 6)
    faceVisible() {
        this.sens = 'visible'
        this.demarrerAnimationVersFaceVisible()
    }

    // Démarre l'animation vers la face visible (frames 0 → 6)
    demarrerAnimationVersFaceVisible() {
        this.isAnimating = true
        this.frameDirection = 1 // Avance vers la droite
        this.frameValue = FIRST_FRAME // Démarre de la frame 0
    }

    // Démarre l'animation vers la face cachée (frames 6 → 0)
    demarrerAnimationVersFaceCachee() {
        this.isAnimating = true
        this.frameDirection = -1 // Recule vers la gauche
        this.frameValue = LAST_FRAME // Démarre de la frame 6
    }

    // Met à jour l'animation (à appeler dans la boucle draw)
    updateAnimation() {
        // Si pas d'animation en cours, retourne la frame actuelle
        if (!this.isAnimating) {
            return this.frameIndex
        }

        // Avance ou recule d'une frame (valeur fractionnaire)
        this.frameValue = this.frameValue + this.frameSpeed * this.frameDirection

        // Vérifie si on atteint la frame 0 (face cachée)
        if (this.frameValue <= FIRST_FRAME) {
            this.frameValue = FIRST_FRAME
            this.isAnimating = false
        }

        // Vérifie si on atteint la frame 6 (face visible)
        if (this.frameValue >= LAST_FRAME) {
            this.frameValue = LAST_FRAME
            this.isAnimating = false
        }

        this.frameIndex = Math.floor(this.frameValue)
        return this.frameIndex
    }

    cacherCarte() {
        this.display = 'hidden'
        this.isAnimating = false
        this.frameIndex = FIRST_FRAME
        this.frameValue = FIRST_FRAME
        if (this.stackIndex < 0) {
            this.stackIndex = pileCacheeCount
            pileCacheeCount += 1
        }
    }

    afficheCarte(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        if (this.display === 'hidden' || !this.image) {
            return
        }

        const frameWidth = this.image.width / FRAMES
        const frameHeight = this.image.height
        const sx = frameWidth * Math.floor(this.frameIndex)

        //Décalage si autre que 1e frame
        const decalageX = this.frameIndex !== FIRST_FRAME ? Math.min(w * 0.35, 50) : 0

        image(this.image, x + decalageX, y, w, h, sx, 0, frameWidth, frameHeight)

        if (this.sens === 'visible' && !this.isAnimating && this.frameIndex === LAST_FRAME) {
            this.afficherContenu()
        }
    }

    afficherDansPile(w, h) {
        if (this.display !== 'hidden' || !this.image || this.stackIndex < 0) {
            return
        }

        const frameWidth = this.image.width / FRAMES
        const frameHeight = this.image.height
        const pileX = 20 + this.stackIndex * 2
        const pileY = height - h - 20 - this.stackIndex * 2
        const pileSx = frameWidth * FIRST_FRAME
        image(this.image, pileX, pileY, w, h, pileSx, 0, frameWidth, frameHeight)
    }

    afficherContenu() {
        const decalageCarte = this.frameIndex !== FIRST_FRAME ? Math.min(this.w * 0.35, 50) : 0
        const centreX = this.x + decalageCarte + this.w * 0.5
        const centreY = this.y + this.h * 0.5

        const decalageX = Math.min(this.w * 0.35, 50)

        if (this.isTexte === true) {
            const mot = tabMots[this.lettre] ?? this.lettre
            push()
            textAlign(CENTER, CENTER)
            let fontSize = this.h * 0.12
            textSize(fontSize)
            //
            const padding = this.h * 0.06
            const maxLargeur = this.w * 0.75
            while (textWidth(mot) + padding * 2 > maxLargeur && fontSize > 8) {
                fontSize -= 1
                textSize(fontSize)
            }

            /*
            const zoneLargeur = Math.min(textWidth(mot) + padding * 2, maxLargeur)
            const zoneHauteur = textAscent() + textDescent() + padding * 2
            noFill()
            stroke(30)
            strokeWeight(2)
            rectMode(CENTER)
            rect(centreX, centreY, zoneLargeur - decalageX / 3, zoneHauteur, 8)
            */
            fill(30)
            noStroke()
            text(mot, centreX - decalageX / 3, centreY)
            pop()
            return
        }

        //Dessin du fruit
        const fnName = tabFonctions[this.lettre]
        const fn = typeof fnName === 'string' ? window[fnName] : null
        if (typeof fn === 'function') {
            fn(centreX - decalageX / 3, centreY, Math.min(this.w, this.h) * 0.5)
        }
    }

    contientPoint(px, py) {
        return px >= this.x && px <= this.x + this.w && py >= this.y && py <= this.y + this.h
    }

    animVictoire(options = null) {
        if (!options || !this.image) {
            return
        }

        // Force l'affichage de la face visible pendant l'animation de victoire
        this.sens = 'visible'
        this.isTexte = false
        this.isAnimating = false
        this.frameIndex = LAST_FRAME
        this.frameValue = LAST_FRAME

        const { centerX, centerY, radius, index, sizeW, sizeH, speed } = options

        if (this.vicX == null) {
            this.vicX = random(sizeW, width - sizeW)
            this.vicY = random(sizeH, height - sizeH)
            this.vicVx = random(-2, 2) || 1.2
            this.vicVy = random(-2, 2) || -1.4
            this.vicRot = random(TWO_PI)
            this.vicRotSpeed = random(-0.08, 0.08)
        }

        this.vicX += this.vicVx
        this.vicY += this.vicVy
        this.vicRot += this.vicRotSpeed

        const minX = sizeW * 0.5
        const maxX = width - sizeW * 0.5
        const minY = sizeH * 0.5
        const maxY = height - sizeH * 0.5

        if (this.vicX <= minX || this.vicX >= maxX) {
            this.vicVx *= -1
        }
        if (this.vicY <= minY || this.vicY >= maxY) {
            this.vicVy *= -1
        }

        const x = this.vicX
        const y = this.vicY

        const frameWidth = this.image.width / FRAMES
        const frameHeight = this.image.height
        const sx = frameWidth * LAST_FRAME

        push()
        translate(x, y)
        rotate(this.vicRot)
        image(this.image, -sizeW * 0.5, -sizeH * 0.5, sizeW, sizeH, sx, 0, frameWidth, frameHeight)
        // Dessiner le contenu dans l'espace local de la carte (pour suivre la rotation)
        const prevX = this.x
        const prevY = this.y
        const prevW = this.w
        const prevH = this.h
        this.x = -sizeW * 0.8
        this.y = -sizeH * 0.5
        this.w = sizeW
        this.h = sizeH
        this.afficherContenu()
        this.x = prevX
        this.y = prevY
        this.w = prevW
        this.h = prevH
        pop()
    }
}
