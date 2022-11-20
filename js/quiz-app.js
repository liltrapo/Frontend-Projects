let body = document.getElementById("body");

let scores = document.getElementById('score');
scores.innerHTML = 0;

let slide = document.getElementById("slide");
let ogSlide = 1;
slide.innerHTML = ogSlide;

let slide1 =  document.getElementById("slide-1");

let slide2 =  document.getElementById("slide-2");

let slide3 =  document.getElementById("slide-3");

let slide4 =  document.getElementById("slide-4");


function togglemood() {
    body.style.animation = "changebg";
    body.style.animationDuration = "2s";
}



function correct1() {
    scores.innerHTML = 1;
    slide.innerHTML =  2;

    slide1.style.display = 'none';

    slide2.style.display = 'block';
}


function correct2() {
    scores.innerHTML = 2;
    slide.innerHTML = 3;


    slide2.style.display = 'none';

    slide3.style.display = 'block';
}

function correct3() {
    scores.innerHTML = 3;
    slide.innerHTML = 4;


    slide3.style.display = 'none';

    slide4.style.display = 'block';
}