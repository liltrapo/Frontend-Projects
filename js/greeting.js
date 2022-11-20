var nameIn = prompt('enter your name please')
let date = new Date();
let dayState = date.getHours();
    if (dayState <= 12) {
        document.write('Good Morning ' + nameIn + '!'); 
    } else if (dayState <= 18) {
        document.write('Good Afternoon ' + nameIn + '!'); 
    } else {
        document.write('Good Evening ' + nameIn + '!');
    }