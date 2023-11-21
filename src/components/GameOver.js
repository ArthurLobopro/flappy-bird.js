import { game } from "../Game.js"
import { Component } from "./Component.js"
import { canvas, ctx, sprites } from "./render.js"

export class GameOverComponent extends Component {
    width = 228
    height = 205
    sy = 152
    sx = 133
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

export const gameOver = new GameOverComponent()