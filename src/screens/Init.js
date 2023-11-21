import { game } from "../Game.js"
import { ScreenManager, screens } from "../ScreenManager.js"
import { bird } from "../components/Bird.js"
import { floor } from "../components/Floor.js"
import { init } from "../components/Init.js"
import { scenario } from "../components/Scenario.js"
import { Screen } from "./Screen.js"

export class InitScreen extends Screen {
    frame = 0

    components = [
        scenario,
        init,
        floor,
        bird
    ]

    click() {
        ScreenManager.setScreen(screens.mainGame)
    }

    update() {
        // if (this.frame % 10 === 0) {
        //     bird.toggle()
        // }

        this.frame++
        this.components.forEach(component => component?.update?.())
    }

    onFocus() {
        game.state = "inactive"
    }
}