document.addEventListener('keydown', playSound)

function playSound (e){
    const sound = document.querySelector(`audio[data-key="${e}"`)
    sound.play()
}