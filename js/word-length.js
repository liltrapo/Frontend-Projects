var button = document.getElementById('getcount');

button.addEventListener('click', function() {
    var input = document.getElementById('input').value;
    var output = document.getElementById('count');
    var count = input.length;

    output.innerHTML = count

    if (input = '') {
        count = 0
    }

})
