
$(document).ready()

// OLD NAV BAR IN JQUERY
const $closeButton = $('.closeButton');
const $openButton = $('.openButton');
const $slideOutNav = $('.slideOutNav');
const $nav = $('.navBar');

$openButton.on('click', () => {
    $slideOutNav.removeClass('slideOutHidden').addClass('slideOutReveal');

});

$closeButton.on('click', () => {
    $slideOutNav.addClass('slideOutHidden').removeClass('slideOutReveal');

});

$(document).scroll(function () {

    if ($(document).scrollTop() >= 150) {
        $nav.removeClass('heightNone');
    }
    else {
        $nav.addClass('heightNone');
    }
})

// CAROUSEL IN VANILLA JS

// <i class="fa-sharp fa-solid fa-arrow-right"></i>
// <i class="fa-solid fa-arrow-left"></i>

const galleryImage = document.querySelectorAll(".galleryImageContainer")
const galleryContainer = document.querySelector(".galleryContainer");
const scrollRight = document.querySelector(".galleryScrollRight");
const scrollLeft = document.querySelector(".galleryScrollLeft");


let mainImageIndex = 1;


scrollLeft.addEventListener('click', () => {

    galleryContainer.classList.add('moveLeft');
    checkButtonDisabled();
    console.log(mainImageIndex);
    return mainImageIndex += 1;


})

scrollRight.addEventListener('click', () => {

    galleryContainer.classList.add('moveRight');
    checkButtonDisabled();
    return mainImageIndex -= 1;


})



const checkButtonDisabled = () => {
    console.log(mainImageIndex);
    if (mainImageIndex <= 0) {
        scrollLeft.toggleAttribute('disabled');
        console.log(scrollLeft)
    }
    else if (mainImageIndex > ((galleryImage.length) - 1)) {
        scrollRight.toggleAttribute('disabled');
    }
    else {
        scrollRight.removeAttribute('disabled');
        scrollLeft.removeAttribute('disabled');

    }
}


