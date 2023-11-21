import { game } from "../Game.js"
import { ScreenManager, screens } from "../ScreenManager.js"
import { delay } from "../Util.js"
import { bird } from "../components/Bird.js"
import { gameOver } from "../components/GameOver.js"
import { scoreboard } from "../components/Scoreboard.js"
import { Screen } from "./Screen.js"

export class GameOverScreen extends Screen {
    components = [
        gameOver,
        scoreboard
    ]

    async click() {
        await delay(500)
        game.reset()
        ScreenManager.setScreen(screens.initGame)
        bird.reset()
    }
}