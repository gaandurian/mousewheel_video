var size = 0

// document.addEventListener('mousewheel', (e) => {
//     document.querySelector('#counter').innerText++
//     if(e.wheelDelta < 0) size += 30;
//     else size -= 30;
//     document.querySelector('#image').style.width =+ size +'px'
//     console.log(e.wheelDelta)
// })
document.querySelector('#video').addEventListener('timeupdate', () => {
    console.log(true)
    document.querySelector('#pos').innerHTML = document.querySelector('#video').currentTime
})

document.querySelector('.cover').addEventListener('mousewheel', (e) => {
    console.log(document.querySelector('.cover #video').currentTime)
    if(e.wheelDelta > 0)
   document.querySelector('.cover #video').currentTime+=1/29.97*5
   else document.querySelector('.cover #video').currentTime-=1/29.97*5
})