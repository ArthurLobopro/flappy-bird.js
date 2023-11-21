import { canvas, ctx, sprites } from "./render.js"

class ScenarioComponent {
    width = 276
    height = 204
    sy = 0
    sx = 390

    draw() {
        ctx.fillStyle = '#70C5CE'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        const { sx, sy, width, height, x } = this

        ctx.drawImage(
            sprites, //Imagem
            sx, sy, //Posição do Sprite atual
            width, height, // Recorte feito no Sprite
            x, (canvas.height - height), // Posição no canvas
            width, height // Largura e altura no canvas
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

export const scenario = new ScenarioComponent()