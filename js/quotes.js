var slideshowInterval;
var currentSlideIndex = 0;
var slidesCount = document.querySelectorAll('#slides .slide').length;
startSlideshow();

function startSlideshow() {
    slideshowInterval = window.setInterval(function() {
        if (currentSlideIndex < slidesCount - 1) {
            setSlide(currentSlideIndex + 1, true);
        } else {
            currentSlideIndex = 0;
            setSlide(currentSlideIndex, true);
        }
    }, 20000);
}

function stopSlideshow() {
    window.clearInterval(slideshowInterval);
}

function setSlide(slideIndex, fromInterval) {
    if (!fromInterval) {
        stopSlideshow();
    }
    var i;
    var slides = document.querySelectorAll('#slides .slide');
    var dots = document.getElementsByClassName('dot');
    $(slides[currentSlideIndex]).fadeOut(400, function() {
        $(slides[slideIndex]).fadeIn(400);
    });
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[slideIndex].className += ' active';
    currentSlideIndex = slideIndex;
}
