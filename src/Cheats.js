import { game } from "./Game.js"
const keys = []

let timeout = null

const clean = () => {
    while(keys.length != 0){
        keys.shift()
    }
    console.log(keys);
}

const cheats = {
    thunderbird(){
        game.imortal = true
    }
}

window.onkeydown = event => {
    keys.push(event.key)
    const string = keys.join('').toLowerCase()
    Object.entries(cheats).forEach( ([key,call]) => {
        if(string.search(key) !== -1) call()
    })
    clearTimeout(timeout)
    timeout = setTimeout(clean, 3000);
}