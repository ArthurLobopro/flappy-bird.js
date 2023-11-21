import { Component } from "./Component.js"
import { canvas, ctx, sprites } from "./render.js"

class ScenarioComponent extends Component {
    width = 276
    height = 204
    sy = 0
    sx = 390

    draw() {
        ctx.fillStyle = '#70C5CE'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        ctx.drawImage(
            sprites, //Imagem
            this.sx, this.sy, //Posição do Sprite atual
            this.width, this.height, // Recorte feito no Sprite
            this.x, (canvas.height - this.height), // Posição no canvas
            this.width, this.height // Largura e altura no canvas
        )
        ctx.drawImage(
            sprites,
            this.sx, this.sy,
            this.width, this.height,
            (this.x + this.width), (canvas.height - this.height),
            this.width, this.height
        )
    }
}

export const scenario = new ScenarioComponent()