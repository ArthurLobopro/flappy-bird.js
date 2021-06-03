import { canvas, ctx, sprites } from "./components/render.js";
import bird from "./components/Bird.js";
import chao from "./components/Chao.js";

sprites.onload = () => {
    setInterval(() => {
        bird.draw()
        bird.toggle()
        chao.draw()
    }, 500);
}