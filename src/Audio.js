function loadAudio(src) {
    const audio = new Audio()
    audio.src = src
    return audio
}

export const audios = {
    hit: loadAudio("./assets/sons/hit.wav"),
    pulo: loadAudio("./assets/sons/pulo.wav")
}