class Jeu_Bonus {
    constructor(words, game) {
        this.game = game
        this.words = Array.isArray(words) ? words.slice() : []
        this.order = this.words.slice().sort(() => Math.random() - 0.5)
        this.sorted = this.words.slice().sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }))
        this.placed = []
        this.dragIndex = -1
        this.dragOffsetX = 0
        this.dragOffsetY = 0
        this.startTime = Date.now()
        this.endTime = null
        this.message = ''
        this.wrongUntil = 0
        this.btnMenu = createButton('Menu principal')
        this.btnMenu.mousePressed(() => {
            window.location.href = 'index.html'
        })
        this.btnMenu.style('padding', '8px 20px')
        this.btnMenu.style('font-size', '14px')
        this.btnMenu.style('cursor', 'pointer')
        this.btnMenu.style('background-color', '#444')
        this.btnMenu.style('color', 'white')
        this.btnMenu.style('border', 'none')
        this.btnMenu.style('border-radius', '5px')
        this.btnMenu.style('z-index', '1000')
        this.btnMenu.style('position', 'absolute')
        this.btnMenu.style('pointer-events', 'auto')

        this.btnReplay = createButton('Rejouer')
        this.btnReplay.mousePressed(() => {
            if (this.game) {
                this.game.showBonus = false
                this.game.showVictory = false
                this.game.initJeu()
            }
        })
        this.btnReplay.style('padding', '8px 20px')
        this.btnReplay.style('font-size', '14px')
        this.btnReplay.style('cursor', 'pointer')
        this.btnReplay.style('background-color', '#4CAF50')
        this.btnReplay.style('color', 'white')
        this.btnReplay.style('border', 'none')
        this.btnReplay.style('border-radius', '5px')
        this.btnReplay.style('z-index', '1000')
        this.btnReplay.style('position', 'absolute')
        this.btnReplay.style('pointer-events', 'auto')

        this.lastWidth = width
        this.lastHeight = height
        this.layout()
    }

    layout() {
        const padding = 40
        const gap = 12
        const tileH = 44
        const tileW = Math.max(90, Math.min(180, width * 0.18))

        const zoneW = Math.min(width - padding * 2, 700)
        const zoneH = 70
        const zoneX = (width - zoneW) * 0.5
        const zoneY = 90
        this.dropZone = { x: zoneX, y: zoneY, w: zoneW, h: zoneH }

        const tilesAreaY = zoneY + zoneH + 30
        const tilesAreaH = Math.max(tileH + gap, height - tilesAreaY - 140)
        this.tilesArea = {
            x: padding,
            y: tilesAreaY,
            w: width - padding * 2,
            h: tilesAreaH,
        }

        this.tileW = tileW
        this.tileH = tileH
        this.gap = gap
        const cols = Math.max(1, Math.floor(this.tilesArea.w / (tileW + gap)))
        this.positions = []
        for (let i = 0; i < this.order.length; i += 1) {
            let placed = false
            for (let attempt = 0; attempt < 200; attempt += 1) {
                const x = this.tilesArea.x + random(0, Math.max(0, this.tilesArea.w - tileW))
                const y = this.tilesArea.y + random(0, Math.max(0, this.tilesArea.h - tileH))
                if (!this.overlapsExisting(x, y, tileW, tileH)) {
                    this.positions.push({ x, y, w: tileW, h: tileH })
                    placed = true
                    break
                }
            }
            if (!placed) {
                const col = i % cols
                const row = Math.floor(i / cols)
                const x = this.tilesArea.x + col * (tileW + gap)
                const y = this.tilesArea.y + row * (tileH + gap)
                this.positions.push({ x, y, w: tileW, h: tileH })
            }
        }
    }

    ensureLayout() {
        if (this.lastWidth !== width || this.lastHeight !== height || this.positions.length !== this.order.length) {
            this.lastWidth = width
            this.lastHeight = height
            this.layout()
        }
    }

    overlapsExisting(x, y, w, h) {
        const pad = this.gap
        for (let i = 0; i < this.positions.length; i += 1) {
            const p = this.positions[i]
            const overlapX = x < p.x + p.w + pad && x + w + pad > p.x
            const overlapY = y < p.y + p.h + pad && y + h + pad > p.y
            if (overlapX && overlapY) {
                return true
            }
        }
        return false
    }

    setButtonsVisible(visible) {
        if (visible) {
            const btnY = height - 90
            this.btnMenu.show()
            this.btnReplay.show()
            this.btnMenu.position(40, btnY)
            this.btnReplay.position(200, btnY)
        } else {
            this.btnMenu.hide()
            this.btnReplay.hide()
        }
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

        this.ensureLayout()

        const now = Date.now()
        const zoneColor = now < this.wrongUntil ? '#FCA5A5' : '#FFFFFF'
        const zoneStroke = now < this.wrongUntil ? '#B91C1C' : '#111111'
        push()
        stroke(zoneStroke)
        strokeWeight(2)
        fill(zoneColor)
        rect(this.dropZone.x, this.dropZone.y, this.dropZone.w, this.dropZone.h, 10)
        noStroke()
        fill(20)
        textSize(16)
        textAlign(CENTER, CENTER)
        const attendu = this.sorted[this.placed.length] ?? ''
        const placedText = this.placed.join(', ')
        text('Depose tes mots ici', this.dropZone.x + this.dropZone.w * 0.5, this.dropZone.y + this.dropZone.h * 0.35)
        if (placedText) {
            text(placedText, this.dropZone.x + this.dropZone.w * 0.5, this.dropZone.y + this.dropZone.h * 0.75)
        }
        pop()

        this.order.forEach((word, i) => {
            if (i === this.dragIndex) {
                return
            }
            const pos = this.positions[i]
            this.drawTile(word, pos.x, pos.y, pos.w, pos.h)
        })

        if (this.dragIndex >= 0) {
            this.drawTile(this.order[this.dragIndex], mouseX - this.dragOffsetX, mouseY - this.dragOffsetY, this.tileW, this.tileH, true)
        }

        if (this.message) {
            textSize(18)
            text(this.message, 40, height - 60)
        }

        this.setButtonsVisible(Boolean(this.endTime))
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
        if (this.endTime) {
            return
        }
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
        const word = this.order[this.dragIndex]
        const inZone =
            x >= this.dropZone.x && x <= this.dropZone.x + this.dropZone.w && y >= this.dropZone.y && y <= this.dropZone.y + this.dropZone.h

        if (inZone) {
            const attendu = this.sorted[this.placed.length]
            if (word === attendu) {
                this.placed.push(word)
                this.order.splice(this.dragIndex, 1)
                this.positions.splice(this.dragIndex, 1)
                if (this.placed.length === this.sorted.length) {
                    this.endTime = Date.now()
                    this.message = 'Bravo, vous avez réussi !'
                }
            } else {
                this.wrongUntil = Date.now() + 300
                this.message = ''
            }
        } else {
            const target = this.indexAt(x, y)
            if (target >= 0 && target !== this.dragIndex) {
                const tmp = this.order[this.dragIndex]
                this.order[this.dragIndex] = this.order[target]
                this.order[target] = tmp
            }
        }
        this.dragIndex = -1
    }

    onDrag() {}

    checkSorted() {}
}
