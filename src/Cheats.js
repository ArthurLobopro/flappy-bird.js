import { game } from "./Game.js"

let keys = []
let timeout = null

const clean = () => keys = []

const cheats = {
    thunderbird() {
        game.imortal = true
    }
}

window.addEventListener("keydown", event => {
    keys.push(event.key)

    const string = keys.join('').toLowerCase()
    Object.entries(cheats).forEach(([key, call]) => {
        if (string.search(key) !== -1) call()
    })
    clearTimeout(timeout)

    timeout = setTimeout(clean, 3000)
})