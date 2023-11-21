import { game } from "../Game.js"
import { Component } from "./Component.js"
import { gameOver } from "./GameOver.js"
import { ctx, sprites } from "./render.js"

class ScoreboardComponent extends Component {
    formatPoints(points) {
        return String(points).padStart(3, '0')
    }

    setupText() {
        ctx.font = '27px arial'
        ctx.fillStyle = 'black'
        ctx.textAlign = 'right'
        ctx.textBaseline = "alphabetic"
    }

    draw() {
        const { pontos, record, medalha } = game
        this.drawPoints(pontos)
        this.drawRecord(record)
        this.drawBadge(medalha)
    }

    drawRecord(record) {
        this.setupText()

        const y = gameOver.y + 100 + 40
        const x = gameOver.x + gameOver.width - 20
        ctx.fillText(this.formatPoints(record), x, y)
    }

    drawPoints() {
        this.setupText()

        const { pontos } = game
        const y = gameOver.y + 100
        const x = gameOver.x + gameOver.width - 20
        ctx.fillText(this.formatPoints(pontos), x, y)
    }

    drawBadge(type) {
        const { width, height } = badges
        const { sx, sy } = badges.types[type]

        const x = gameOver.x + 26
        const y = gameOver.y + 88
        ctx.drawImage(
            sprites,
            sx, sy,
            width, height,
            x, y,
            width, height
        )
    }
}

export const scoreboard = new ScoreboardComponent()

const badges = {
    width: 44,
    height: 44,
    types: {
        iron: {
            sx: 0,
            sy: 78
        },
        gold: {
            sx: 0,
            sy: 124
        },
        silver: {
            sx: 48,
            sy: 78
        },
        cooper: {
            sx: 48,
            sy: 124
        }
    }
}