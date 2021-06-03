const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const sprites = new Image()
sprites.src = "./assets/sprites.png"

export { ctx, canvas, sprites }