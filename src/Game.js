import bird from "./components/Bird.js";

const sprites = new Image()
sprites.src = "./assets/sprites.png"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

sprites.onload = () => {
    setInterval(() => {
        bird.draw()
        bird.toggle()
    }, 500);
}