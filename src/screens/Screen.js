export class Screen {
    /** @type {{draw: () => void}} */
    components = []

    render() {
        this.components.forEach(component => component.draw())
    }

    update() { }

    att() { this.update() }
}