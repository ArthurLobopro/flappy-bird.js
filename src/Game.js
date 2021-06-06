import { canvas, ctx, sprites } from "./components/render.js";
import bird from "./components/Bird.js";
import chao from "./components/Chao.js";
import cenario from "./components/Cenario.js";
import init from "./components/Init.js";
import gameOver from "./components/GameOver.js"
import audios from "./Audio.js"

let telaAtual = {}
const setTela = tela => telaAtual = tela

const telas = {
    mainGame: {
        render(){
            cenario.draw()
            chao.draw()
            chao.att()
            bird.draw()
        },
        att(){
            if(colizao()) {
                audios.hit.play()
                return setTela(telas.gameOver)
            }
            bird.att()
            this.render()
        },
        click(){
            audios.pulo.play()
            bird.vel = - 5
        }
    },
    initGame:{
        render(){
            telas.mainGame.render()
            init.draw()
        },
        click(){
            setTela(telas.mainGame)
        },
        att(){
            this.render()
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
    if(bird.y + bird.height + 1 >= chao.y){
        return true
    }
    return false
}

setTela(telas.initGame)

sprites.onload = renderGame

window.onclick = () => {
    telaAtual.click?.()
}