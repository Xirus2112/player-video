const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')
const $range = document.querySelector('#range')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)
$range.addEventListener('input', handleInput)


function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('Le di clic en Play')
}

function handlePause() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    
}

function handleBackward() {
    $video.currentTime = $video.currentTime - 10
}

function handleForward() {
    // $video.currentTime = $video.currentTime + 10
    $video.currentTime += 10
}

function handleLoaded() {
    $range.max = $video.duration
    
}

function handleTimeUpdate() {
    $range.value = $video.currentTime
}


function handleInput() {
    $video.currentTime = $range.value
}