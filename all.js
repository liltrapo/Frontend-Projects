var alerted = sessionStorage.getItem('alerted') || '';
if (alerted != 'yes') {
    alert('made by Leonard, Warning!! not responsive. view on a larger screen')
    sessionStorage.setItem('alerted','yes');
}

let head = document.head;
var script = document.createElement('script');
script.async;
script.src = 'https://kit.fontawesome.com/ad98cec03b.js';
script.crossOrigin = 'anonymous';

head.appendChild(script)