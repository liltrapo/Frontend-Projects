var image = document.getElementById('bulboff');
    function toggle() {
        if (image.src.match('bulbon')) {
            image.src = '../img/pic_bulboff.png';
        } 
        else {
            image.src = '../img/pic_bulbon.png';
        }
    }
image.addEventListener('click', toggle)