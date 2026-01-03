const images = [ 'image/page1.PNG', 'image/page2.PNG', 'image/page3.PNG', 'image/page4.PNG', 'image/page5.PNG', 'image/page6.PNG',];
var valuePage = [];

function randomImage() {
    var randImg = [];
    valuePage = [];

    for (var i = 0; i<=1; i++) {
        var shuffled = Math.floor(Math.random()* images.length);
        randImg.push(images[shuffled]);
        valuePage.push(shuffled);
    }

    document.getElementById("image1").src = randImg[0];
    document.getElementById("image2").src = randImg[1];

    changTitle();
}


function changTitle() {

    if ( valuePage[0] === valuePage[1]) {
        document.querySelector("h1").innerHTML = "You Draw!"
    }
    else if ( valuePage[0] >  valuePage[1]) {
        document.querySelector("h1").innerHTML = "Player 1 Win"
    }
    else {
        document.querySelector("h1").innerHTML = "Player 2 win"
    }
}