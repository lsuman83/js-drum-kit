document.addEventListener('keydown', playSound)

function playSound (e){
    debugger
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"`)
    sound.play()
}