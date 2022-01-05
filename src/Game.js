import { canvas, ctx, sprites } from "./components/render.js";
import bird from "./components/Bird.js";
import chao from "./components/Chao.js";
import cenario from "./components/Cenario.js";
import init from "./components/Init.js";
import { gameOver, placar } from "./components/GameOver.js"
import audios from "./Audio.js"
import obstaculos from "./components/Obstaculos.js"
import "./Cheats.js"

let telaAtual = {}
const setTela = tela => telaAtual = tela

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
    renderPlacar() {
        const formatPontos = txt => String(txt).padStart(3, '0')
        ctx.font = '27px arial'
        ctx.fillStyle = 'black'
        ctx.textAlign = 'right'
        ctx.textBaseline = 'top'
        const y = 10
        const x = canvas.width - 10
        ctx.fillText(formatPontos(this.pontos), x, y)
    }
}

game.record = localStorage.record ?? 0

const telas = {
    mainGame: {
        frame: 0,
        render() {
            cenario.draw()
            obstaculos.draw()
            chao.draw()
            chao.att()
            bird.draw()
        },
        att() {
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
            this.render()
            game.renderPlacar()
        },
        click() {
            audios.pulo.play()
            bird.vel = - 5
        }
    },
    initGame: {
        frame: 0,
        render() {
            telas.mainGame.render()
            init.draw()
        },
        click() {
            setTela(telas.mainGame)
        },
        att() {
            if (this.frame % 10 === 0) {
                bird.toggle()
            }
            this.render()
            this.frame++
        }
    },
    gameOver: {
        render() {
            gameOver.draw()
            placar.draw(game)
        },
        att() {
            this.render()
        },
        click() {
            game.reset()
            setTela(telas.initGame)
            bird.reset()
        }
    }
}

const renderGame = () => {
    telaAtual.att()
    requestAnimationFrame(renderGame)
}

const colisao = () => {
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

window.onclick = () => {
    telaAtual.click?.()
}

export { game }