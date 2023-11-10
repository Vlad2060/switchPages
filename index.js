let prevButton = document.getElementById('prev').onclick = prevFun
let nextButton = document.getElementById('next').onclick = nextFun

const cirlces = document.querySelectorAll('.cirlce')
const lines = document.querySelectorAll('.line')

let a = -1

function nextFun() {
    a++
    check()
    cirlces[a].style.borderColor = 'rgb(77, 77, 255)'
    cirlces[a].style.color = 'rgb(77, 77, 255)'
    lines[a].style.background = 'rgb(77, 77, 255)'
}

function prevFun() {
    a--
    check()
    lines[a].style.background = 'rgb(171, 171, 171)'
    cirlces[a].style.borderColor = 'rgb(171, 171, 171)'
    cirlces[a].style.color = 'rgb(171, 171, 171)'
}


function check() {
    if (a > 4) {
        a = 4
    } else if (a < -1) {
        a = -1
    }
}