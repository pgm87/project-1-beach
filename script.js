
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

console.log(scrollRight)



scrollLeft.addEventListener('click', () => {

    const className = galleryImage[1].getAttribute("class");

    galleryImage[1].classList.add('moveLeft');
    console.log(galleryImage[1])

})


