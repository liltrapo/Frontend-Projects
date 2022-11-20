let display = document.getElementById('display');
let count = 0;
display.innerHTML = count


function add() {
    count++
    display.innerHTML = count;
}

function subt() {
    count--
    display.innerHTML = count;

    if (count < 0) {
        count = 'too loww'
    }
}