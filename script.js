
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

const galleryImage = document.querySelectorAll(".galleryImageContainer");
const galleryContainer = document.querySelector(".galleryContainer");
const scrollRight = document.querySelector(".galleryScrollRight");
const scrollLeft = document.querySelector(".galleryScrollLeft");

let mainImageIndex = 1;

console.log(mainImageIndex);
console.log(galleryImage.length);

const checkButtonDisabled = () => {

    if (mainImageIndex <= 0) {
        scrollLeft.setAttribute('disabled', 'true');
        console.log('Set disabled to true! for scroll left');

    }
    else if (mainImageIndex === ((galleryImage.length) - 1)) {
        scrollRight.setAttribute('disabled', 'true');
        console.log('Set disabled to true! for scroll right');
    }
    else {
        console.log("Removed disabled image checker");
        scrollRight.removeAttribute('disabled');
        scrollLeft.removeAttribute('disabled');
    }
}


scrollLeft.addEventListener('click', () => {
    mainImageIndex -= 1;
    console.log(mainImageIndex);
    checkButtonDisabled();

    if (mainImageIndex < 1) {
        galleryContainer.classList.toggle('moveLeft');
        galleryContainer.classList.remove('moveRight');
    }
    galleryImage[mainImageIndex].classList.toggle('transformLarge');
    galleryImage[mainImageIndex].classList.toggle('transformSmall');
    galleryImage[mainImageIndex + 1].classList.toggle('transformSmall');
    galleryImage[mainImageIndex + 1].classList.toggle('transformLarge');

})

scrollRight.addEventListener('click', () => {
    mainImageIndex += 1;
    console.log(mainImageIndex);
    checkButtonDisabled();
    if (mainImageIndex > 1) {
        galleryContainer.classList.toggle('moveRight');
        galleryContainer.classList.remove('moveLeft');
    }
    galleryImage[mainImageIndex].classList.toggle('transformLarge');
    galleryImage[mainImageIndex].classList.toggle('transformSmall');
    galleryImage[mainImageIndex - 1].classList.toggle('transformSmall');
    galleryImage[mainImageIndex - 1].classList.toggle('transformLarge');

});






