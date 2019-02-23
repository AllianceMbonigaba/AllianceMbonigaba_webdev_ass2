

let i = 0;

function imageChanger() {
    let images = []; // array of images
    // initiate image at this potion
    images[0] = 'header.jpg';
    images[1] = 'alu.jpg';
    images[2] = 'madeinrwanda.jpg';
    document.header_image.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }


    setTimeout("imageChanger()", 3000);
}



window.onload = imageChanger;