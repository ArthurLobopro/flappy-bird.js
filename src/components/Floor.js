import { Component } from "./Component.js"
import { canvas, ctx, sprites } from "./render.js"

class FloorComponent extends Component {
    width = 221
    height = 112
    sx = 0
    sy = 610
    move = 0

    constructor() {
        super()
        this.y = (canvas.height - this.height)
    }

    update() {
        this.x = (this.x - 0.75) % (this.width / 2)
    }

    draw() {
        const { sx, sy, x, y, width, height } = this

        ctx.drawImage(
            sprites,
            sx, sy,
            width, height,
            x, y,
            width, height
        )

        ctx.drawImage(
            sprites,
            sx, sy,
            width, height,
            (x + width), (canvas.height - height),
            width, height
        )
    }
}

export const floor = new FloorComponent()