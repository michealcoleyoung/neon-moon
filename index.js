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


function setColor() {
    let img = document.getElementById("images").src;
    let slides = document.getElementsByClassName('slides');

    for (let i of slides) {
        for (let x of images) {
            if (img == `${host}${images[x]}`) {
                console.log(slides[i])
            } else {
                console.log('sdfsdf')
            }
        }
    }

    // for (let x of images) {
    //     if (img == `${host}${images[x]}`) {
    //         document.getElementsByClassName('slides')[0].style = "background-color: #2EBAFF";
    //     } else {
    //         document.getElementsByClassName('slides')[0].style = "background-color: white";
    //     }
    // }

    switch (true) {
        case (img == `${host}${images[0]}`):
            document.getElementById("button").style.color = "blue";
            // document.getElementsByClassName('slides')[0].style = "background-color: #2EBAFF";
            break;
        case (img == `${host}${images[1]}`):
            document.getElementById("button").style.color = "green";
            break;
        case (img == `${host}${images[2]}`):
            document.getElementById("button").style.color = "red";
            break;
        case (img == `${host}${images[3]}`):
            document.getElementById("button").style.color = "purple";
            break;
        case (img == `${host}${images[4]}`):
            document.getElementById("button").style.color = "blue";
            break;
        case (img == `${host}${images[5]}`):
            document.getElementById("button").style.color = "blue";
            break;
        case (img == `${host}${images[6]}`):
            document.getElementById("button").style.color = "blue";
            break;
        case (img == `${host}${images[7]}`):
            document.getElementById("button").style.color = "blue";
            break;
    }
}


function changeImg() {
    document.slide.src = images[i];
    setColor();

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);

}

window.onload = changeImg;