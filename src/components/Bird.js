import { ctx, sprites } from "./render.js"

export const bird = {
    frame: 0,
    width: 33,
    height: 24,
    gravity: 0.25,
    currentSprite: 0,
    x: 0,
    y: 0,
    fallVelocity: 0,
    sprites: [
        {
            sx: 0,
            sy: 0,
        },
        {
            sx: 0,
            sy: 26
        },
        {
            sx: 0,
            sy: 52,
        }
    ],

    update() {
        this.y += (this.fallVelocity + this.gravity)
        this.fallVelocity += this.gravity
        this.frame++

        if (this.frame % 10 === 0) {
            this.toggle()
        }
    },

    draw() {
        const { sx, sy } = this.sprites[this.currentSprite]
        const { width, height, x, y } = this

        ctx.drawImage(
            sprites, //Imagem
            sx, sy, //Posição do Sprite atual
            width, height, // Recorte feito no Sprite
            x, y, // Posição no canvas
            width, height // Largura e altura no canvas
        )
    },

    toggle() {
        this.currentSprite++
        if (this.currentSprite === 3) {
            this.currentSprite = 0
        }
    },

    reset() {
        this.x = 15
        this.y = 15
        this.fallVelocity = 0
    }
}
bird.reset()