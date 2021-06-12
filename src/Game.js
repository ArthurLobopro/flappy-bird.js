import { canvas, ctx, sprites } from "./components/render.js";
import bird from "./components/Bird.js";
import chao from "./components/Chao.js";
import cenario from "./components/Cenario.js";
import init from "./components/Init.js";
import gameOver from "./components/GameOver.js"
import audios from "./Audio.js"
import obstaculos from "./components/Obstaculos.js"
import "./Cheats.js"

let telaAtual = {}
const setTela = tela => telaAtual = tela

const game = {
    imortal: false
}

const telas = {
    mainGame: {
        frame: 0,
        render(){
            cenario.draw()
            obstaculos.draw()
            chao.draw()
            chao.att()
            bird.draw()
        },
        att(){
            if(colizao()) {
                audios.hit.play()
                obstaculos.reset()
                return setTela(telas.gameOver)
            }
            if(this.frame % 10 === 0){
                bird.toggle()
            }
            if(this.frame % 150 === 0){
                obstaculos.spaw()
            }
            this.frame++
            bird.att()
            this.render()
        },
        click(){
            audios.pulo.play()
            bird.vel = - 5
        }
    },
    initGame:{
        frame: 0,
        render(){
            telas.mainGame.render()
            init.draw()
        },
        click(){
            setTela(telas.mainGame)
        },
        att(){
            if(this.frame % 10 === 0){
                bird.toggle()
            }
            this.render()
            this.frame++
        }
    },
    gameOver:{
        render(){
            gameOver.draw()
        },
        att(){
            this.render()
        },
        click(){
            setTela(telas.initGame)
            bird.reset()
        }
    }
}



const renderGame = () => {
    telaAtual.att()
    requestAnimationFrame(renderGame)
}

const colizao = () => {
    if(game.imortal) return false

    if(bird.y + bird.height + 1 >= chao.y){
        return true
    }

    return obstaculos.ativos.some( ({x,y}) => {
        return bird.x + bird.width >= x && (bird.y <= y + obstaculos.height || bird.y + bird.height >= y + obstaculos.height + obstaculos.espaco)
    })
}

setTela(telas.initGame)

sprites.onload = renderGame

window.onclick = () => {
    telaAtual.click?.()
}

export { game }