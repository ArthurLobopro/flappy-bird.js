import { GameScreen } from "./screens/Game.js"
import { GameOverScreen } from "./screens/GameOver.js"
import { InitScreen } from "./screens/Init.js"

export const screens = {
    mainGame: new GameScreen(),
    initGame: new InitScreen(),
    gameOver: new GameOverScreen()
}

export class ScreenManager {
    static __currentScreen

    static get screen() {
        return this.__currentScreen
    }

    static setScreen(screen) {
        this.__currentScreen = screen
    }
}