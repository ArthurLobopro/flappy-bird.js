import { setTela, telas } from "../Game.js"
import { bird } from "../components/Bird.js"
import { init } from "../components/Init.js"
import { Screen } from "./Screen.js"

export class InitScreen extends Screen {
    frame = 0

    components = [
        init
    ]

    render() {
        telas.mainGame.render()
        super.render()
    }

    click() {
        setTela(telas.mainGame)
    }

    update() {
        if (this.frame % 10 === 0) {
            bird.toggle()
        }

        this.frame++
    }
}