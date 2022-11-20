let date = new Date();
let dayOfWeekNum = date.getDay();
let nameOfDay;
let quote;

switch(dayOfWeekNum) {
    case 0:
        nameOfDay = 'Sunday';
        quote = 'Praise God!'
        break;

    case 1:
        nameOfDay = 'Monday';
        quote = 'School \'sad\''
        break;
        
    case 2:
        nameOfDay = 'Tuesday';
        quote = 'School Again'
        break; 
    case 3:
        nameOfDay = 'Wednesday';
        quote = 'Fun day!'
        break;
        
    case 4:
        nameOfDay = 'Thursday';
        quote = 'Sports!!!'
        break;
        
    case 5:
        nameOfDay = 'Friday';
        quote = 'Weekend Vamossss!!!!!'
        break;
    
    case 6:
        nameOfDay = 'Saturday';
        quote = 'Party Time JWWWW!'
        break;
}

let displayDate = document.getElementById('day');
let QuoteDisplay = document.getElementById('quote');


displayDate.innerHTML = nameOfDay;
QuoteDisplay.innerHTML = quote;