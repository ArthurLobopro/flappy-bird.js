import { sprites, canvas, ctx } from "./render.js";

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const obstaculos = {
    width: 52,
    height: 400,
    espaco: 90,
    render: 0,
    sprites: {
        top: {
            sx: 52,
            sy: 169
        },
        down: {
            sx: 0,
            sy: 169
        }
    },
    ativos: [],
    spaw() {
        const min = 40 + this.espaco
        const max = this.height - 30
        const x = canvas.width + this.width
        const y = randInt(min, max) * - 1
        this.ativos.push({ x, y })
    },
    draw() {
        this.ativos = this.ativos.map(({ x, y }) => {
            //Céu
            ctx.drawImage(
                sprites, //Imagem
                this.sprites.top.sx, this.sprites.top.sy, //Posição do Sprite atual
                this.width, this.height, // Recorte feito no Sprite
                x, y, // Posição no canvas
                this.width, this.height // Largura e altura no canvas
            )
            //Chão
            ctx.drawImage(
                sprites, //Imagem
                this.sprites.down.sx, this.sprites.down.sy, //Posição do Sprite atual
                this.width, this.height, // Recorte feito no Sprite
                x, y + this.height + this.espaco, // Posição no canvas
                this.width, this.height // Largura e altura no canvas
            )

            if (x + this.width >= 0) {
                return {
                    x: x - 1,
                    y
                }
            }

            return null

        })
            .filter(v => v !== null)
    },
    reset() {
        this.ativos = []
    }

}
export default obstaculos