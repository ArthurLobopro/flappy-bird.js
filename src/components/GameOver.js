import { canvas, ctx, sprites } from "./render.js";

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
gameOver.x = canvas.width /2 - gameOver.width / 2

export default gameOver