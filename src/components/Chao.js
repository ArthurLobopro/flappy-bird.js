const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const sprites = new Image()
sprites.src = "./assets/sprites.png"

const chao = {
    width: 221,
    height: 112,
    sx: 0,
    sy: 610,
    draw(){
        ctx.drawImage(
            sprites, //Imagem
            this.sx, this.sy, //Posição do Sprite atual
            this.width,this.height, // Recorte feito no Sprite
            0, (canvas.height - this.height), // Posição no canvas
            this.width, this.height // Largura e altura no canvas
        )
        ctx.drawImage(
            sprites, 
            this.sx, this.sy, 
            this.width,this.height, 
            (canvas.width - this. width),(canvas.height - this.height),
            this.width, this.height
        )
    }
}
export default chao