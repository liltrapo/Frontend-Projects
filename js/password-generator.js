function getPassword() {
    var password = '';
    var passwordChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345689@$#*';
    var passwordLength = 16;

    for (let i=0; i<passwordLength; i++) {
        var random = Math.floor(Math.random() * passwordChars.length);
        password += passwordChars.substring(random, random + 1);
    };

  
    display.value = password;

}      

let display = document.getElementById('output');
let genBtn = document.getElementById('get-password');
let resetBtn = document.getElementById('reset');

    function reset() {
        display.value = '';
    };

 genBtn.addEventListener('click', getPassword)
 resetBtn.addEventListener('click', reset);

 function textcopy() {  
    display.select();
    display.setSelectionRange(0, 99999);
  
    navigator.clipboard.writeText(display.value);
    
  }