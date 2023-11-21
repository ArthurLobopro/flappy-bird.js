export class Screen {
    /** @type {{draw: () => void}} */
    components = []

    render() {
        this.components.forEach(component => component.draw())
    }

    update() {
        this.components.forEach(component => component?.update?.())
    }
}