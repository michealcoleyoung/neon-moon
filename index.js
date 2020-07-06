i = 0;

let images = [];
let time = 3000;


images[0] = 'images/slide-1.png';
images[1] = 'images/slide-2.png';
images[2] = 'images/slide-3.png';
images[3] = 'images/slide-4.png';
images[4] = 'images/slide-5.png';
images[5] = 'images/slide-6.png';
images[6] = 'images/slide-7.png';
images[7] = 'images/slide-8.png';




function changeImg() {
    document.slide.src = images[i];
    let img = document.getElementById("images").src;
    console.log(img);

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);

}


window.onload = changeImg;