i = 0;
let images = [];
let time = 3000;


let host = `http://${window.location.host}/`;
console.log(host);

images[0] = 'images/slide-1.png';
images[1] = 'images/slide-2.png';
images[2] = 'images/slide-3.png';
images[3] = 'images/slide-4.png';
images[4] = 'images/slide-5.png';
images[5] = 'images/slide-6.png';
images[6] = 'images/slide-7.png';
images[7] = 'images/slide-8.png';

// sets CREATE button color that corresponds to given image
function setButtonColor() {
    let img = document.getElementById("images").src;
    let button = document.getElementById('button');
    let slide = document.getElementsByClassName('slides');

    button.classList.remove('hover-class1', 'hover-class2',
        'hover-class3', 'hover-class4', 'hover-class5',
        'hover-class6', 'hover-class7',
        'hover-class8');

    switch (true) {
        case (img == `${host}${images[0]}`):
            slide[0].style = "background-color: #2EBAFF";
            button.classList.add('hover-class1');
            break;
        case (img == `${host}${images[1]}`):
            slide[1].style = "background-color: #2EBAFF";
            button.classList.add('hover-class2');
            break;
        case (img == `${host}${images[2]}`):
            slide[2].style = "background-color: #2EBAFF";
            button.classList.add('hover-class3');
            break;
        case (img == `${host}${images[3]}`):
            slide[3].style = "background-color: #2EBAFF";
            button.classList.add('hover-class4');
            break;
        case (img == `${host}${images[4]}`):
            slide[4].style = "background-color: #2EBAFF";
            button.classList.add('hover-class5');
            break;
        case (img == `${host}${images[5]}`):
            slide[5].style = "background-color: #2EBAFF";
            button.classList.add('hover-class6');
            break;
        case (img == `${host}${images[6]}`):
            slide[6].style = "background-color: #2EBAFF";
            button.classList.add('hover-class7');
            break;
        case (img == `${host}${images[7]}`):
            slide[7].style = "background-color: #2EBAFF";
            button.classList.add('hover-class8');
            break;
    }

}

// changes slide dot to #2EBAFF when on given image
function setSlides() {
    let slides = document.getElementsByClassName('slides');
    for (let slide of slides) {
        slide.style = "background-color: white";
    }
}


// starts image slideshow
function changeImg() {
    document.slide.src = images[i];
    setSlides();
    setButtonColor();
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);

}

window.onload = changeImg;