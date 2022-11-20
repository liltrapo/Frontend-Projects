(function() {
const body = document.querySelector('body');
const hexVal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 , 'A', 'B', 'C', 'D', 'E', 'F']
const value = document.querySelector("#hex-value");
const button = document.querySelector("#button");

    button.addEventListener('click', changeBgHex)

    function changeBgHex(){
        let hex = '#';
        
        for (let i=0; i<6; i++){
            let index = Math.floor(Math.random() * hexVal.length)
            hex += hexVal[index]
        }
        value.textContent = hex
        body.style.backgroundColor = hex
    }
})()