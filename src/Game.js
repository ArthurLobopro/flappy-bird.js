import "./Cheats.js"
import { bird } from "./components/Bird.js"
import { chao } from "./components/Chao.js"
import { obstaculos } from "./components/Obstaculos.js"
import { sprites } from "./components/render.js"
import { GameScreen } from "./screens/Game.js"
import { GameOverScreen } from "./screens/GameOver.js"
import { InitScreen } from "./screens/Init.js"

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

export const telas = {
    mainGame: new GameScreen(),
    initGame: new InitScreen(),
    gameOver: new GameOverScreen()
}

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

setTela(telas.initGame)

sprites.onload = renderGame

window.addEventListener("click", () => {
    telaAtual.click?.()
})

window.addEventListener("keydown", (event) => {
    event.key === " " && telaAtual?.click()
})

export { game }
