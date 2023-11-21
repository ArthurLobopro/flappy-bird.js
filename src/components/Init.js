import { Component } from "./Component.js"
import { canvas, ctx, sprites } from "./render.js"

class InitComponent extends Component {
    sy = 0
    sx = 134
    width = 176
    height = 152
    y = 65

    constructor() {
        super()
        this.x = canvas.width / 2 - this.width / 2
    }

    draw() {
        const { sx, sy, width, height, x, y } = this

        ctx.drawImage(
            sprites,
            sx, sy,
            width, height,
            x, y,
            width, height
        )
    }
}

export const init = new InitComponent()
