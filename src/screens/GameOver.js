import { game } from "../Game.js"
import { ScreenManager, screens } from "../ScreenManager.js"
import { delay } from "../Util.js"
import { bird } from "../components/Bird.js"
import { gameOver, placar } from "../components/GameOver.js"
import { Screen } from "./Screen.js"

export class GameOverScreen extends Screen {
    components = [
        gameOver,
        placar
    ]

    async click() {
        await delay(500)
        game.reset()
        ScreenManager.setScreen(screens.initGame)
        bird.reset()
    }
}