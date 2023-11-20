import "./Cheats.js"
import { screens } from "./ScreenManager.js"
import { bird } from "./components/Bird.js"
import { chao } from "./components/Chao.js"
import { obstaculos } from "./components/Obstaculos.js"
import { sprites } from "./components/render.js"

let telaAtual = {}
export const setTela = tela => telaAtual = tela

const game = {
    imortal: false,
    pontos: 0,
    record: 0,
    medalha: 'iron',
    reset() {
        this.imortal = false
        this.pontos = 0
        this.medalha = 'iron'
    },
}

game.record = localStorage.record ?? 0

const renderGame = () => {
    telaAtual.att()
    telaAtual.render()
    requestAnimationFrame(renderGame)
}

export const colisao = () => {
    if (game.imortal) return false

    if (bird.y + bird.height + 1 >= chao.y) {
        return true
    }

    if (bird.y < 0) return true

    return obstaculos.ativos
        .filter(({ x }) => x + obstaculos.width > bird.x)
        .some(({ x, y }) => {
            const bateuEmCima = bird.y <= y + obstaculos.height
            const bateuEmBaixo = bird.y + bird.height >= y + obstaculos.height + obstaculos.espaco
            return bird.x + bird.width >= x && (bateuEmCima || bateuEmBaixo)
        })
}

setTela(screens.initGame)

sprites.onload = renderGame

window.addEventListener("click", () => {
    telaAtual.click?.()
})

window.addEventListener("keydown", (event) => {
    event.key === " " && telaAtual?.click()
})

export { game }
