let date = new Date();
let hour = date.getHours();
let output = document.getElementById('output');
let button = document.getElementById('get-message');
var greeting;


button.addEventListener('click', function(e) {
    if (hour >= 16) {
        greeting = 'Good Evening!'
    } else if (hour >= 12) {
        greeting = 'Good Afternoon!'
    } else {
        greeting = 'Good Morning!'
    }

    output.innerHTML = greeting;
})