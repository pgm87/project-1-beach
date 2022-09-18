
$(document).ready()

const $closeButton = $('.closeButton');
const $openButton = $('.openButton');
const $slideOutNav = $('.slideOutNav');

$openButton.on('click', () => {
    $slideOutNav.removeClass('slideOutHidden');
    $slideOutNav.addClass('slideOutReveal');
});

$closeButton.on('click', () => {
    $slideOutNav.addClass('slideOutHidden');
    $slideOutNav.removeClass('slideOutReveal');
});

const scrollDetect = () => {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 300) {
            console.log('HI');
        } else {
            console.log('NON');
        }
    });

}

scrollDetect();
