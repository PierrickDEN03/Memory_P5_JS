class Jeu {
    constructor(mode = null, nbPaire) {
        this.mode = mode
        this.nbPaire = nbPaire
        this.aCarte = []
        this.isFinished = null
        this.temps = null
        this.nbTentative = null
        this.aMotTrouve = null
        this.aLettres = null
        this.aChoixUser = null
        this.isVerifying = null
        this.showVictory = null
        this.showBonus = null
        this.tempsFinal = null
        this.btnRejouer = null
        this.btnMenu = null
        this.btnBonus = null
        this.jeuBonus = null

        this.initJeu()
    }

    initJeu() {
        this.aChoixUser = []
        this.isVerifying = false
        this.isFinished = false
        this.showVictory = false
        this.showBonus = false
        this.nbTentative = 0
        this.aMotTrouve = []
        this.aLettres = []
        this.temps = Date.now() //Timestamp de départ
        this.aCarte = []
        this.tempsFinal = null
        if (this.jeuBonus) {
            this.jeuBonus.setButtonsVisible(false)
        }
        this.jeuBonus = null
        if (this.btnRejouer) {
            this.btnRejouer.hide()
        }
        if (this.btnMenu) {
            this.btnMenu.hide()
        }
        if (this.btnBonus) {
            this.btnBonus.hide()
        }

        //Création des paires
        const lettres = Object.keys(tabMots)
        const nbPaires = Math.min(this.nbPaire ?? lettres.length, lettres.length)
        while (this.aLettres.length < nbPaires && this.aLettres.length < lettres.length) {
            const lettre = lettres[Math.floor(Math.random() * lettres.length)]

            if (this.aLettres.includes(lettre)) {
                continue
            }

            this.aLettres.push(lettre)
            // Facile: 2 images. Difficile: 1 image + 1 texte.
            if (this.mode === 'facile') {
                this.aCarte.push(new Carte(lettre, false))
                this.aCarte.push(new Carte(lettre, false))
            } else {
                this.aCarte.push(new Carte(lettre, false))
                this.aCarte.push(new Carte(lettre, true))
            }
        }

        this.shuffle()
        console.log(this.aCarte)
    }

    shuffle() {
        // Mélange le tableau de cartes
        for (let i = this.aCarte.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = this.aCarte[i]
            this.aCarte[i] = this.aCarte[j]
            this.aCarte[j] = temp
        }
    }

    afficheCartes(
        xDepart = 40,
        yDepart = 40,
        margeBas = 220,
        ecartX = null,
        ecartY = null,
        largeur = null,
        hauteur = null,
        nbColonnes = null,
        debug = false,
    ) {
        const startX = xDepart
        const startY = yDepart
        const gapX = ecartX ?? 12
        const gapY = ecartY ?? 12
        const baseLargeur = largeur ?? 120
        const baseHauteur = hauteur ?? 160
        const ratio = baseHauteur / baseLargeur

        const hauteurDispo = height - startY - margeBas
        const largeurDispo = width - startX - 40
        const total = this.aCarte.length

        let colonnes = nbColonnes ?? 1
        let carteLargeur = baseLargeur
        let carteHauteur = baseHauteur

        const calculerTaille = (cols) => {
            const rows = Math.ceil(total / cols)
            let w = (largeurDispo - gapX * (cols - 1)) / cols
            let h = w * ratio

            const totalH = h * rows + gapY * (rows - 1)
            if (totalH > hauteurDispo) {
                h = (hauteurDispo - gapY * (rows - 1)) / rows
                w = h / ratio
            }

            return { w, h, rows }
        }

        if (nbColonnes == null) {
            let best = { w: 0, h: 0, cols: 1 }
            for (let cols = 1; cols <= total; cols += 1) {
                const { w, h } = calculerTaille(cols)
                if (w <= 0 || h <= 0) {
                    continue
                }
                if (w * h > best.w * best.h) {
                    best = { w, h, cols }
                }
            }
            colonnes = best.cols
            carteLargeur = best.w
            carteHauteur = best.h
        } else {
            const taille = calculerTaille(nbColonnes)
            colonnes = nbColonnes
            carteLargeur = taille.w
            carteHauteur = taille.h
        }

        // Rectangle de debug pour visualiser la zone disponible
        if (debug) {
            push()
            noFill()
            stroke(255, 0, 0)
            strokeWeight(2)
            rect(startX, startY, largeurDispo, hauteurDispo)
            pop()
        }

        this.aCarte.forEach((carte, index) => {
            const col = index % colonnes
            const row = Math.floor(index / colonnes)
            const x = startX + col * (carteLargeur + gapX)
            const y = startY + row * (carteHauteur + gapY)
            carte.updateAnimation()
            carte.afficheCarte(x, y, carteLargeur, carteHauteur)
        })

        // Afficher les cartes cachées dans la pile
        this.aCarte.forEach((carte) => {
            carte.afficherDansPile(carteLargeur, carteHauteur)
        })
    }

    gererTouch(px, py) {
        if (this.showVictory || this.showBonus) {
            return false
        }

        if (this.isVerifying) {
            return false
        }

        for (let i = this.aCarte.length - 1; i >= 0; i -= 1) {
            const carte = this.aCarte[i]
            if (carte.contientPoint(px, py)) {
                if (this.aChoixUser.includes(carte) || carte.display === 'hidden') {
                    return false
                }

                carte.faceVisible()
                this.aChoixUser.push(carte)

                if (this.aChoixUser.length === 2) {
                    this.isVerifying = true
                    setTimeout(() => this.verifCartes(), 600)
                }

                return true
            }
        }
        return false
    }

    verifCartes() {
        if (this.aChoixUser.length !== 2) {
            this.isVerifying = false
            return
        }
        this.nbTentative++
        const [carteA, carteB] = this.aChoixUser
        if (carteA.lettre === carteB.lettre) {
            const mot = tabMots[carteA.lettre] ?? carteA.lettre
            this.aMotTrouve.push(mot)
            setTimeout(() => {
                carteA.cacherCarte()
                carteB.cacherCarte()
                this.aChoixUser = []
                this.isVerifying = false
                const allHidden = this.aCarte.every((carte) => carte.display === 'hidden')
                if (allHidden) {
                    this.isFinished = true
                    this.showVictory = true
                    this.tempsFinal = Math.floor((Date.now() - this.temps) / 1000)
                }
            }, 400)
            return
        }
        setTimeout(() => {
            carteA.faceCachee()
            carteB.faceCachee()
            this.aChoixUser = []
            this.isVerifying = false
        }, 400)
    }

    finishJeu() {
        this.temps = '' //Temps courant - this.temps
    }

    animVictoire() {
        const centerX = width * 0.5
        const centerY = height * 0.5
        const radius = Math.min(width, height) * 0.35
        const sizeW = Math.max(40, Math.min(120, width * 0.12))
        const sizeH = sizeW * (160 / 120)

        this.aCarte.forEach((carte, index) => {
            carte.animVictoire({
                centerX,
                centerY,
                radius,
                index,
                sizeW,
                sizeH,
                speed: 0.04,
            })
        })

        const tempsEcoule = this.tempsFinal ?? Math.floor((Date.now() - this.temps) / 1000)
        const heures = Math.floor(tempsEcoule / 3600)
        const minutes = Math.floor((tempsEcoule % 3600) / 60)
        const secondes = tempsEcoule % 60

        push()
        textAlign(CENTER, CENTER)
        fill(0)
        textSize(34)
        text('Bravo ! Vous avez gagné !', centerX, height * 0.1)
        textSize(18)
        text(
            `Nombre de tentatives : ${this.nbTentative} - Temps : ${heures
                .toString()
                .padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondes.toString().padStart(2, '0')}`,
            centerX,
            height * 0.2,
        )
        pop()

        // Créer le bouton UNE SEULE FOIS
        if (!this.btnRejouer) {
            this.btnRejouer = createButton('Rejouer')
            this.btnRejouer.mousePressed(() => {
                console.log('click replay')
                this.initJeu()
            })
            this.btnRejouer.style('padding', '10px 30px')
            this.btnRejouer.style('font-size', '16px')
            this.btnRejouer.style('cursor', 'pointer')
            this.btnRejouer.style('background-color', '#4CAF50')
            this.btnRejouer.style('color', 'white')
            this.btnRejouer.style('border', 'none')
            this.btnRejouer.style('border-radius', '5px')
            this.btnRejouer.style('z-index', '1000')
        }

        // Repositionner le bouton (au cas où la fenêtre change de taille)
        this.btnRejouer.show()
        const btnY = height * 0.3
        const btnW = 140
        const gap = 20
        const totalW = btnW * 3 + gap * 2
        const startX = centerX - totalW * 0.5
        this.btnRejouer.style('width', `${btnW}px`)
        this.btnRejouer.position(startX, btnY)

        if (!this.btnMenu) {
            this.btnMenu = createButton('Menu')
            this.btnMenu.mousePressed(() => {
                window.location.href = 'index.html'
            })
            this.btnMenu.style('padding', '10px 30px')
            this.btnMenu.style('font-size', '16px')
            this.btnMenu.style('cursor', 'pointer')
            this.btnMenu.style('background-color', '#444')
            this.btnMenu.style('color', 'white')
            this.btnMenu.style('border', 'none')
            this.btnMenu.style('border-radius', '5px')
            this.btnMenu.style('z-index', '1000')
        }
        this.btnMenu.show()
        this.btnMenu.style('width', `${btnW}px`)
        this.btnMenu.position(startX + btnW + gap, btnY)

        if (!this.btnBonus) {
            this.btnBonus = createButton('Jeu bonus')
            this.btnBonus.mousePressed(() => {
                this.showVictory = false
                this.showBonus = true
                this.jeuBonus = new Jeu_Bonus(this.aMotTrouve, this)
                if (this.btnRejouer) this.btnRejouer.hide()
                if (this.btnMenu) this.btnMenu.hide()
                if (this.btnBonus) this.btnBonus.hide()
            })
            this.btnBonus.style('padding', '10px 30px')
            this.btnBonus.style('font-size', '16px')
            this.btnBonus.style('cursor', 'pointer')
            this.btnBonus.style('background-color', '#2F6BFF')
            this.btnBonus.style('color', 'white')
            this.btnBonus.style('border', 'none')
            this.btnBonus.style('border-radius', '5px')
            this.btnBonus.style('z-index', '1000')
        }
        this.btnBonus.show()
        this.btnBonus.style('width', `${btnW}px`)
        this.btnBonus.position(startX + (btnW + gap) * 2, btnY)

        // (bloc duplique supprime)
    }
}
