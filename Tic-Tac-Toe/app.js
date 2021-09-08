'use strict'
const targetBox = document.getElementById('area')
const resultContentWrapper = document.getElementById('result-content')
const firstContentWrapper = document.getElementById('first-content')
const resultWrapper = document.getElementById('result-wrapper')
const firstWrapper = document.getElementById('first-wrapper')
const btnCloseRes = document.getElementById('result-btn-close')
const btnCloseFirst = document.getElementById('first-btn-close')
const btnGenerate = document.getElementById('btn-generate')
const btnRestart = document.getElementById('btn-restart')

let move = 0
let countMove = 0
let result

targetBox.addEventListener('click', e => {
    if (e.target.className === 'box' && e.target.innerHTML !== 'X' && e.target.innerHTML !== 'O') {
        move % 2 === 0 ?
            e.target.innerHTML = 'X' :
            e.target.innerHTML = 'O';
        move++
        countMove++
        check()
    }
})



const check = () => {
    const boxes = document.getElementsByClassName('box');
    const winArrays = [
        [0, 1, 2], //horizontal
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], //vertical
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8], //diagonal
        [2, 4, 6]];

    for (let i = 0; i < winArrays.length; i++) {
        if (boxes[winArrays[i][0]].innerHTML === 'X' &&
            boxes[winArrays[i][1]].innerHTML === 'X' &&
            boxes[winArrays[i][2]].innerHTML === 'X') {
            result = 'X'
            prepareResult(result);
        } else if (boxes[winArrays[i][0]].innerHTML === 'O' &&
            boxes[winArrays[i][1]].innerHTML === 'O' &&
            boxes[winArrays[i][2]].innerHTML === 'O') {
            result = 'O'
            prepareResult(result);
        } else if (countMove === 9) {
            result = 'NOBODY'
            prepareResult(result);
        }
    }
}

const prepareResult = winner => {
    resultContentWrapper.innerHTML = `THE ${winner} WON!`
    resultWrapper.style.display = 'block'
}

const closeModalRes = () => {
    resultWrapper.style.display = 'none';
}

const closeModalFirst = () => {
    firstWrapper.style.display = 'none';
}

const restartModal = () => {
    resultWrapper.style.display = 'none'
    location.reload()
}

const firstMove = () => {
    let rand = Math.floor(Math.random() * 2)
    let first
    if (rand === 0) {
        first = 'O'
        move++
    } else {
        first = 'X'
    }
    firstContentWrapper.innerHTML = `THE FIRST MOVE FOR ${first}`
}

btnGenerate.addEventListener('click', firstMove);
btnCloseRes.addEventListener('click',closeModalRes);
btnCloseFirst.addEventListener('click',closeModalFirst);
btnRestart.addEventListener('click', restartModal);
