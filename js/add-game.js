let firstNum = document.getElementById('first-num');
let secondNum = document.getElementById('second-num');

let num1 = parseInt(Math.random() * 100);
let num2 = parseInt(Math.random() * 100);

var answer = num1 + num2;

firstNum.innerHTML = num1
secondNum.innerHTML = num2

var validateAns = document.getElementById('check');
validateAns.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    input = Number(input);

    if (input === answer) {
        alert('correct');
        window.location.reload()
    } else {
        alert('wrong, the answer was ' + answer)
        window.location.reload()
    }
});