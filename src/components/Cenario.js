import { canvas, ctx, sprites } from "./render.js";
import chao from "./Chao.js"

const cenario = {
    width: 276,
    height: 204,
    sy:0,
    sx: 390,
    x: 0,
    draw(){
        //ctx.fillStyle = "#6495ED"
        ctx.fillStyle= '#70C5CE'
        ctx.fillRect(0,0,canvas.width, canvas.height)
        
        ctx.drawImage(
            sprites, //Imagem
            this.sx, this.sy, //Posição do Sprite atual
            this.width,this.height, // Recorte feito no Sprite
            this.x, (canvas.height - this.height), // Posição no canvas
            this.width, this.height // Largura e altura no canvas
        )
        ctx.drawImage(
            sprites, 
            this.sx, this.sy, 
            this.width,this.height, 
            (this.x + this.width),(canvas.height - this.height),
            this.width, this.height
        )
    }

}
export default cenario