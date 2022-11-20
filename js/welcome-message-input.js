let submit = document.getElementById('submit');

submit.addEventListener('click', function(){
 let display = document.getElementById('output');
 let input = document.getElementById('input').value;
 display.innerHTML = 'Hello and welcome ' + input + '!!!';
 if (input == '') {
    display.innerHTML = 'please enter your name';
 }
})