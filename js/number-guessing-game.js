let input = document.getElementById('input');
let button = document.getElementById('validate');

button.addEventListener('click', () => {
    var num = Math.floor(Math.random() * 10 + 1)
    var guess = 1;

    if (input.value == num) {
        guess++
        alert('congratulations, you guessed it correctly. you\'ve guessed ' + guess++ + ' times')
    } else {
        guess++
        alert('you guessed wrong' + ' you\'ve guessed ' + guess++ + ' times')
    }
});
