import { canvas, ctx, sprites } from "./render.js"

const chao = {
    width: 221,
    height: 112,
    sx: 0,
    sy: 610,
    y: null,
    draw(){
        ctx.drawImage(
            sprites, //Imagem
            this.sx, this.sy, //Posição do Sprite atual
            this.width,this.height, // Recorte feito no Sprite
            0, this.y, // Posição no canvas
            this.width, this.height // Largura e altura no canvas
        )
        ctx.drawImage(
            sprites, 
            this.sx, this.sy, 
            this.width,this.height, 
            (canvas.width - this. width),(canvas.height - this.height),
            this.width, this.height
        )
    }
}
chao.y = (canvas.height - chao.height)

export default chao