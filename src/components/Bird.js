import { ctx, sprites } from "./render.js"

const bird = {
    csx: 0,
    csy: 0,
    width: 33,
    height: 24,
    gravidade: 0.25,
    currentSprite: 0,
    lastSprite: 1,
    x: 0,
    y: 0,
    vel: 0,
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
        let nextIndex

        if(this.currentSprite === 1){
            if(this.lastSprite === 0) nextIndex = 2
            if(this.lastSprite === 2) nextIndex = 0
        }else{
            nextIndex = 1
        }

        this.lastSprite = this.currentSprite
        this.currentSprite = nextIndex

        this.csx = this.sprites[nextIndex].sx
        this.csy = this.sprites[nextIndex].sy
    },
    reset(){
        this.x = 15
        this.y = 15
        this.vel = 0
    }
}
bird.reset()

export default bird