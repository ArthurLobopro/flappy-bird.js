import { canvas, ctx, sprites } from "./render.js";

const medalhas = {
    width: 44,
    height: 44,
    iron:{
        sx: 0,
        sy: 78
    },
    gold:{
        sx: 0,
        sy: 124
    },
    silver: {
        sx: 48,
        sy:78
    },
    cooper:{
        sx: 48,
        sy: 124
    }

}

const gameOver = {
    width: 228,
    height: 162,
    sy: 152,
    sx: 133,
    y: 65,
    x: null,
    draw(){
        ctx.drawImage(
            sprites, //Imagem
            this.sx, this.sy, //Posição do Sprite atual
            this.width,this.height, // Recorte feito no Sprite
            this.x, this.y, // Posição no canvas
            this.width, this.height // Largura e altura no canvas
        )
    }
}
const placar = {
    formatPontos: txt => String(txt).padStart(3, '0'),
    draw({pontos,record}){
        this.drawPoints(pontos)
        this.drawRecord(record)
    },
    drawRecord(record){
        ctx.font = '27px arial'
        ctx.fillStyle = 'black'
        ctx.textAlign = 'right'
        ctx.textBaseline = "alphabetic"
        const y = gameOver.y + 100 + 40
        const x = gameOver.x + gameOver.width - 20
        ctx.fillText(this.formatPontos(record), x, y)
    },
    drawPoints(pontos){
        ctx.font = '27px arial'
        ctx.fillStyle = 'black'
        ctx.textAlign = 'right'
        ctx.textBaseline = "alphabetic"
        const y = gameOver.y + 100
        const x = gameOver.x + gameOver.width - 20
        ctx.fillText(this.formatPontos(pontos), x, y)
    },
    drawMedalha(type){
        const x = gameOver.x + 26
        const y = gameOver.y + 88
        const { sx, sy } = medalhas[type]
        const { width, height } = medalhas
        tx.drawImage(
            sprites, //Imagem
            sx, sy, //Posição do Sprite atual
            width,height, // Recorte feito no Sprite
            x, y, // Posição no canvas
            width, height // Largura e altura no canvas
        )
    }
}
gameOver.x = canvas.width /2 - gameOver.width / 2

export {placar, gameOver}