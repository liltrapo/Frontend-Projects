// setInterval(showTime);
//     function showTime() {
//         let date = new Date();
//         let hour = date.getHours();
//         let min = date.getMinutes();
//         let sec = date.getSeconds();

//         unit = 'AM';

//         if (hour > 12) {
//             hour -= 12;
//             unit = 'PM';
//         };

//         if (hour == 0) {
//             hour = 12;
//             unit = 'AM';
//         };

//         let currentTime = hour + ":" + min + ":" + sec + unit;

//         document.getElementById("output").innerHTML = currentTime;
// }
let output = document.getElementById('output');
setInterval(function(){
    let date = new Date();
    output.innerHTML = date.toLocaleTimeString();
})