const $video = document.querySelector('#video')
    const $play = document.querySelector('#play')
    const $pause = document.querySelector('#pause')
    const $backward = document.querySelector('#backward')
    const $forward = document.querySelector('#forward')

    $play.addEventListener('click',handlePlay)
    $pause.addEventListener('click',handlePause)
    $backward.addEventListener('click', handleBackward)
    $forward.addEventListener('click',handleForward)


    function handlePlay(){
        $video.play()
        $play.hidden = true
        $pause.hidden = false
        console.log('Le di clic en Play')
    }

    function handlePause(){
        $video.pause()
        $pause.hidden = true
        $play.hidden = false
        console.log('Le di clic en pause')
    }

    function handleBackward(){
        $video.currentTime = $video.currentTime - 10
        
        console.log('Retrocede 10s -> ', $video.currentTime)
    }

    function handleForward(){
        // $video.currentTime = $video.currentTime + 10
        $video.currentTime += 10

        console.log('Avanza 10s -> ', $video.currentTime)
    }

const $range = document.querySelector('#range')
$video.addEventListener('loadedmetadata',handleLoaded)
$video.addEventListener('timeupdate',handleTimeUpdate)

function handleLoaded(){
    $range.max = $video.duration
    console.log('Enpieza a recorer e range -> ', $video.duration)
}

function handleTimeUpdate(){
    // $range.value = $video.currentTime
    // console.log('Tiempo actual -> ', $video.currentTime)
}

$range.addEventListener('input',handleInput)
function handleInput(){
    $video.currentTime = $range.value
}