
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

const centerImage = () => {
    // galleryContainer.classList.remove('moveRight');
    // galleryContainer.classList.remove('moveLeft');
    galleryContainer.removeAttribute('style');
}

const transformLeft = (index) => {
    galleryImage[index].classList.toggle('transformLarge');
    galleryImage[index].classList.toggle('transformSmall');
    galleryImage[index + 1].classList.toggle('transformSmall');
    galleryImage[index + 1].classList.toggle('transformLarge');
}


const transformRight = (index) => {
    galleryImage[index].classList.toggle('transformLarge');
    galleryImage[index].classList.toggle('transformSmall');
    galleryImage[index - 1].classList.toggle('transformSmall');
    galleryImage[index - 1].classList.toggle('transformLarge');
}




scrollLeft.addEventListener('click', () => {
    mainImageIndex -= 1;
    console.log(mainImageIndex);
    checkButtonDisabled();
    if (mainImageIndex === 1) {
        centerImage();
        transformLeft(mainImageIndex);
    }
    else if (mainImageIndex < 1) {
        galleryContainer.setAttribute('style', ` transform: translate(${33 * (mainImageIndex + 1)}%);`);
        // galleryContainer.classList.toggle('moveLeft');
        // galleryContainer.classList.remove('moveRight');
        transformLeft(mainImageIndex);


    }

})

scrollRight.addEventListener('click', () => {
    mainImageIndex += 1;
    console.log(mainImageIndex);
    checkButtonDisabled();

    if (mainImageIndex === 1) {
        centerImage();
        transformRight(mainImageIndex);
    }
    else if (mainImageIndex > 1) {
        galleryContainer.setAttribute('style', ` transform: translate(${-34 * (mainImageIndex - 1)}%);`);
        // galleryContainer.classList.toggle('moveRight');
        // galleryContainer.classList.remove('moveLeft');
        transformRight(mainImageIndex);
    }

});






