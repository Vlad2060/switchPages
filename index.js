let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');

prevButton.addEventListener('click', prevFun);
nextButton.addEventListener('click', nextFun);

const cirlces = document.querySelectorAll('.cirlce')
const lines = document.querySelectorAll('.line')

let length = 0;

function nextFun() {
    if(length >= 0) prevButton.classList.remove('disabled');
    if(!(length >= cirlces.length)) length++;
    addColors();
}

function prevFun() {
    if(!(length <= 0)) length--;
    if(length <= 0) prevButton.classList.add('disabled')
    addColors();
}

function addColors() {
    for(let i = 0; i < cirlces.length; i++) {
        lines[i].style.background = 'rgb(171, 171, 171)'
        cirlces[i].style.borderColor = 'rgb(171, 171, 171)'
        cirlces[i].style.color = 'rgb(171, 171, 171)'
    }

    for(let i = 0; i < length; i++) {
        cirlces[i].style.borderColor = 'rgb(77, 77, 255)'
        cirlces[i].style.color = 'rgb(77, 77, 255)'
        lines[i].style.background = 'rgb(77, 77, 255)'
    }
}
