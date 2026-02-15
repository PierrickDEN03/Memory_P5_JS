let modeRadio
let pairesSlider
let pairesLabel
let lancerButton

function setup() {
    createCanvas(windowWidth, windowHeight)
    noLoop()

    textAlign(CENTER, TOP)
    textSize(28)

    modeRadio = createRadio()
    modeRadio.option('facile', 'Facile')
    modeRadio.option('difficile', 'Difficile')
    modeRadio.selected('facile')
    modeRadio.style('font-size', '18px')

    pairesSlider = createSlider(1, 26, 10, 1)
    pairesSlider.style('width', '240px')

    pairesLabel = createP('Paires: 10')
    pairesLabel.style('margin', '8px 0 0 0')

    lancerButton = createButton('Lancer la partie')
    lancerButton.style('margin-top', '16px')

    positionUI()

    pairesSlider.input(() => {
        pairesLabel.html(`Paires: ${pairesSlider.value()}`)
    })

    lancerButton.mousePressed(() => {
        const mode = modeRadio.value() || 'facile'
        const paires = pairesSlider.value()
        const url = `jeu.html?mode=${encodeURIComponent(mode)}&paires=${encodeURIComponent(paires)}`
        window.location.href = url
    })
}

function draw() {
    background(230)
    fill(30)
    text('Memory', width * 0.5, 30)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    positionUI()
}

function positionUI() {
    const cx = width * 0.5
    const startY = height * 0.25

    modeRadio.position(cx - 70, startY)
    pairesSlider.position(cx - 120, startY + 70)
    pairesLabel.position(cx - 120, startY + 100)
    lancerButton.position(cx - 70, startY + 150)
}
