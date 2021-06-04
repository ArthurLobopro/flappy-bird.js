import { ctx, sprites } from "./render.js"

const bird = {
    csx:0,
    csy:0,
    width: 33,
    height: 24,
    gravidade: 0.25,
    sprites:[
        {
            sx:0,
            sy:0,
        },
        {
            sx:0,
            sy:26
        },
        {
            sx:0,
            sy:52,
        }
    ],
    att(){
        this.y += (this.vel + this.gravidade)
        this.vel += this.gravidade
    },
    draw(){
        ctx.drawImage(
            sprites, //Imagem
            this.csx, this.csy, //Posição do Sprite atual
            this.width,this.height, // Recorte feito no Sprite
            this.x,this.y, // Posição no canvas
            this.width, this.height // Largura e altura no canvas
        )
    },
    toggle(){
        const { csx, csy } = this
        const currentIndex = this.sprites.findIndex( ({sx,sy}) => sx === csx && sy === csy)
        const nextIndex = currentIndex === 2 ? 0 : currentIndex+1
        this.csx = this.sprites[nextIndex].sx
        this.csy = this.sprites[nextIndex].sy
    },
    reset(){
        this.x = 0
        this.y = 0
        this.vel = 0
    }
}
bird.reset()

export default bird