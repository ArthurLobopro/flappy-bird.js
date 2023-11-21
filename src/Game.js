import "./Cheats.js"
import { ScreenManager, screens } from "./ScreenManager.js"
import { bird } from "./components/Bird.js"
import { floor } from "./components/Floor.js"
import { obstacles } from "./components/Obstacles.js"
import { sprites } from "./components/render.js"

const game = {
    imortal: false,
    pontos: 0,
    record: 0,
    medalha: 'iron',
    state: "inactive",
    reset() {
        this.imortal = false
        this.pontos = 0
        this.medalha = 'iron'
    },
}

game.record = localStorage.record ?? 0

const renderGame = () => {
    ScreenManager.screen.update()
    ScreenManager.screen.render()
    requestAnimationFrame(renderGame)
}

export const colisao = () => {
    if (game.imortal) return false

    if (bird.y + bird.height + 1 >= floor.y) {
        return true
    }

    if (bird.y < 0) return true

    return obstacles.activeObstacles
        .filter(({ x }) => x + obstacles.width > bird.x)
        .some(({ x, y }) => {
            const bateuEmCima = bird.y <= y + obstacles.height
            const bateuEmBaixo = bird.y + bird.height >= y + obstacles.height + obstacles.space
            return bird.x + bird.width >= x && (bateuEmCima || bateuEmBaixo)
        })
}

ScreenManager.setScreen(screens.initGame)

sprites.onload = renderGame

window.addEventListener("click", () => {
    ScreenManager.screen.click?.()
})

window.addEventListener("keydown", (event) => {
    event.key === " " && ScreenManager.screen?.click()
})

export { game }
