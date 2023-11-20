import { audios } from "../Audio.js"
import { colisao, game } from "../Game.js"
import { ScreenManager, screens } from "../ScreenManager.js"
import { bird } from "../components/Bird.js"
import { cenario } from "../components/Cenario.js"
import { chao } from "../components/Chao.js"
import { obstaculos } from "../components/Obstaculos.js"
import { canvas, ctx } from "../components/render.js"
import { Screen } from "./Screen.js"

export class GameScreen extends Screen {
    components = [
        cenario,
        obstaculos,
        chao,
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
            obstaculos.reset()
            return ScreenManager.setScreen(screens.gameOver)
        }

        if (this.frame % 10 === 0) {
            bird.toggle()
        }

        if (this.frame % 25 === 0) {
            game.pontos++
        }

        if (this.frame % 150 === 0) {
            obstaculos.spaw()
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
        bird.att()
        chao.att()
    }

    click() {
        audios.pulo.play()
        bird.vel = - 5
    }
}