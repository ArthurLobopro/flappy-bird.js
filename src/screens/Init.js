import { setTela } from "../Game.js"
import { screens } from "../ScreenManager.js"
import { bird } from "../components/Bird.js"
import { init } from "../components/Init.js"
import { Screen } from "./Screen.js"

export class InitScreen extends Screen {
    frame = 0

    components = [
        init
    ]

    render() {
        screens.mainGame.render()
        super.render()
    }

    click() {
        setTela(screens.mainGame)
    }

    update() {
        if (this.frame % 10 === 0) {
            bird.toggle()
        }

        this.frame++
    }
}