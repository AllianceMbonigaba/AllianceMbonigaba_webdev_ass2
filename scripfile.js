

let i = 0;

function slideChanger() {
    let images = []; // array of images
    // initiate image at this potion
    images[0] = 'image7.jpg';
    images[1] = 'image6.png';
    images[2] = 'rwanda.png';
    document.header_image.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }


    setTimeout("slideChanger()", 3500);
}
window.onload = slideChanger;

//***************************
// gallery slides movement
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// defining how we show the slide
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active ", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;


}


