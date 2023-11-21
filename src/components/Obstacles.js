import { Component } from "./Component.js"
import { canvas, ctx, sprites } from "./render.js"

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

class ObstaclesComponent extends Component {
    width = 52
    height = 400
    space = 100
    sprites = {
        top: {
            sx: 52,
            sy: 169
        },
        bottom: {
            sx: 0,
            sy: 169
        }
    }
    activeObstacles = []

    spaw() {
        const min = 40 + this.space
        const max = this.height - 30
        const x = canvas.width + this.width
        const y = randInt(min, max) * - 1
        this.activeObstacles.push({ x, y })
    }

    reset() {
        this.activeObstacles = []
    }

    update() {
        this.activeObstacles = this.activeObstacles.map(obstacle => {
            return {
                ...obstacle,
                x: obstacle.x - 1,
            }
        }).filter(obstacle => obstacle.x + this.width >= 0)
    }

    draw() {
        this.activeObstacles
            .forEach(({ x, y }) => {
                const { width, height, space } = this
                const { sx: topSx, sy: topSy } = this.sprites.top
                const { sx: bottomSx, sy: bottomSy } = this.sprites.bottom

                //Top
                ctx.drawImage(
                    sprites,
                    topSx, topSy,
                    width, height,
                    x, y,
                    width, height
                )

                //Bottom
                ctx.drawImage(
                    sprites,
                    bottomSx, bottomSy,
                    width, height,
                    x, y + height + space,
                    width, height
                )
            })
    }
}

export const obstacles = new ObstaclesComponent()