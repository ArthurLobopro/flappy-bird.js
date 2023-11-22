import "./Cheats.js"
import { ScreenManager, screens } from "./ScreenManager.js"
import { bird } from "./components/Bird.js"
import { floor } from "./components/Floor.js"
import { obstacles } from "./components/Obstacles.js"
import { sprites } from "./components/render.js"

class Game {
    imortal = false
    pontos = 0
    record = 0
    medalha = 'iron'
    state = "inactive"

    constructor() {
        this.record = localStorage.record ?? 0
    }

    reset() {
        this.imortal = false
        this.pontos = 0
        this.medalha = 'iron'
    }

    colision() {
        if (this.imortal) return false

        if (bird.y + bird.height + 1 >= floor.y) {
            return true
        }

        if (bird.y < 0) return true

        return obstacles.activeObstacles
            .filter(({ x }) => x + obstacles.width > bird.x)
            .some(({ x, y }) => {
                const collisionOnTop = bird.y <= y + obstacles.height
                const collisionOnBottom = bird.y + bird.height >= y + obstacles.height + obstacles.space
                return bird.x + bird.width >= x && (collisionOnTop || collisionOnBottom)
            })
    }
}

export const game = new Game()

const renderGame = () => {
    ScreenManager.screen.update()
    ScreenManager.screen.render()
    requestAnimationFrame(renderGame)
}

ScreenManager.setScreen(screens.initGame)

sprites.onload = renderGame

window.addEventListener("click", () => {
    ScreenManager.screen.click?.()
})

window.addEventListener("keydown", (event) => {
    event.key === " " && ScreenManager.screen?.click()
})