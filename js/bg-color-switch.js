let body = document.getElementById('body');
let blackC = document.getElementById('black');
let redC = document.getElementById('red');
let blueC = document.getElementById('blue');
let yellowC = document.getElementById('yellow');

    function black() {
        body.style.backgroundColor = 'black';
        body.style.color = "white";
    }

    function red() {
        body.style.backgroundColor = 'red';
    }

    function blue() {
        body.style.backgroundColor = 'blue';
    }

    function yellow() {
        body.style.backgroundColor = 'yellow';
    }

    blackC.addEventListener('click', black)
    redC.addEventListener('click', red)
    blueC.addEventListener('click', blue)
    yellowC.addEventListener('click', yellow)