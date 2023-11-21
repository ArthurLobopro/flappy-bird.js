import { audios } from "../Audio.js"
import { colisao, game } from "../Game.js"
import { ScreenManager, screens } from "../ScreenManager.js"
import { bird } from "../components/Bird.js"
import { floor } from "../components/Floor.js"
import { obstacles } from "../components/Obstacles.js"
import { scenario } from "../components/Scenario.js"
import { canvas, ctx } from "../components/render.js"
import { Screen } from "./Screen.js"

export class GameScreen extends Screen {
    components = [
        scenario,
        obstacles,
        floor,
        bird,
        {
            draw() {
                const formatPontos = txt => String(txt).padStart(3, '0')
                ctx.font = '27px arial'
                ctx.fillStyle = 'black'
                ctx.textAlign = 'right'
                ctx.textBaseline = 'top'
                const y = 10
                const x = canvas.width - 10
                ctx.fillText(formatPontos(game.pontos), x, y)
            }
        }
    ]

    frame = 0

    update() {
        if (colisao()) {
            if (game.pontos > game.record) {
                game.record = game.pontos
                localStorage.record = game.pontos
            }
            audios.hit.play()
            this.render()
            obstacles.reset()
            return ScreenManager.setScreen(screens.gameOver)
        }

        if (this.frame % 25 === 0) {
            game.pontos++
        }

        if (this.frame % 150 === 0) {
            obstacles.spaw()
        }

        if (game.pontos > game.record) {
            game.medalha = 'gold'
        }

        if (game.pontos > game.record / 2) {
            game.medalha = 'silver'
        }

        if (game.pontos > game.record / 4) {
            game.medalha = 'cooper'
        }

        this.frame++
        super.update()
    }

    click() {
        audios.pulo.play()
        bird.fallVelocity = - 5
    }

    onFocus() {
        game.state = "active"
    }

    onBlur() {
        game.state = "inactive"
    }
}