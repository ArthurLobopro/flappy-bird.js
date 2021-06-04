import { ctx, sprites, canvas } from "./render.js"

const init = {
    sy: 0,
    sx: 134,
    width: 176,
    height: 152,
    x: null,
    y: 65,
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

;( function() {
    init.x = canvas.width /2 - init.width/ 2
})()

export default init