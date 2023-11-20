import { canvas, ctx, sprites } from "./render.js"

export const chao = {
    width: 221,
    height: 112,
    sx: 0,
    sy: 610,
    y: null,
    x: 0,
    move: 0,
    draw() {
        ctx.drawImage(
            sprites, //Imagem
            this.sx, this.sy, //Posição do Sprite atual
            this.width, this.height, // Recorte feito no Sprite
            this.x, this.y, // Posição no canvas
            this.width, this.height // Largura e altura no canvas
        )
        ctx.drawImage(
            sprites,
            this.sx, this.sy,
            this.width, this.height,
            //(canvas.width - this. width - this.move),(canvas.height - this.height),
            (this.x + this.width), (canvas.height - this.height),
            this.width, this.height
        )
    },
    att() {
        // Esta forma reseta automaticamente, o segundo parametro define quando será repetido (no caso metade)
        this.x = (this.x - 0.75) % (this.width / 2)
    }
}
chao.y = (canvas.height - chao.height)