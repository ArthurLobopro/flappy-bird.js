import { audios } from "../Audio.js"
import { colisao, game, setTela, telas } from "../Game.js"
import { bird } from "../components/Bird.js"
import { cenario } from "../components/Cenario.js"
import { chao } from "../components/Chao.js"
import { obstaculos } from "../components/Obstaculos.js"
import { Screen } from "./Screen.js"

export class GameScreen extends Screen {
    components = [
        cenario,
        obstaculos,
        chao,
        bird,
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
            return setTela(telas.gameOver)
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
        this.render()
        game.renderPlacar()
    }

    click() {
        audios.pulo.play()
        bird.vel = - 5
    }
}