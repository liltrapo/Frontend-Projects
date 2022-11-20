let input = document.getElementById('input');
let display = document.getElementById('messages');
let button = document.getElementById('send');

button.addEventListener('click', function() {
    display.innerHTML = input.value
    input.value = ''
    if (display.innerHTML === '') {
        display.innerHTML = 'please type something'
    }
})