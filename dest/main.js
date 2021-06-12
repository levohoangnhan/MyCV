// $(window).on('load', function () {
//     $('.loading').fadeOut(300);
//     // $('.loading').removeClass('active');
//     $('.svg').svgToInline();
// });


// Home___TAG

let tagList = $(".project .project__list--wrap .project--tag");

$(document).on('click', '.project .project__tag-text .tag', function (e) {
    e.preventDefault();
    $('.project .project__tag-text .tag').removeClass('active');
    $(this).addClass('active');
    let index = $(this).index();
    let projectList = tagList.eq(index);
    $(".project .project__list--wrap .project--tag").removeClass('active');
    projectList.addClass('active');
});

// Button menu nav

let menuNav = $("header .menu-wrap");
let btnMenu = $(".header__logo .nav .btnmenu");

$(document).ready(function () {
    $(document).on('click', '.header__logo .nav .btnmenu', function (e) {
        e.stopPropagation();
        $(this).toggleClass('clicked');
        menuNav.toggleClass('active');
    });
});

//closeNav

function closeNav() {
    menuNav.removeClass('active');
    btnMenu.removeClass('clicked');
};

$(document).click(function () {
    closeNav();
});


menuNav.click(function (e) {
    e.stopPropagation();
});

//Siblings 
let SibLi = $("header .menu-wrap li");

SibLi.hover(
    function () {
        $(this).siblings().addClass('hover');
    },
    function () {
        SibLi.removeClass('hover');
    }
);

// Header

let scrollUp = window.pageYOffset;
console.log(scrollUp);

window.onscroll = function () {
    let scrollDown = window.pageYOffset;
    console.log(scrollDown);
    if (scrollDown > scrollUp) {
        document.querySelector(".header__logo").classList.add('hidden');
        document.querySelector(".header__menu").classList.add('active');
    } else {

        document.querySelector(".header__logo").classList.remove('hidden');
        document.querySelector(".header__menu").classList.remove('active');
    }
    scrollUp == scrollDown;
};


// Rental

$(document).on('click', '.rental-wrap .rental__right .book__btn .btn__text', function () {
    alert("Successful registration");
});

$(document).on('click', 'footer .send', function () {
    alert("Successful registration");
});


// Studio
let $StudioSlider = $('.studio__slider');

$StudioSlider.flickity({
    prevNextButtons: false,
    pageDots: false,
    contain: true,
    cellAlign: 'left',
    wrapAround: true,
    groupCells: 1,
    friction: 0.5,
    // fullscreen: true,
});
// let $logoHide = $("header .header__logo");

// $StudioSlider.on('change.flickity', function (event, index) {
//     console.log('ok');
//     // $logoHide.addClass('hidden');
// });

$('.studio__btn .left-arrow').on('click', function () {
    $StudioSlider.flickity('previous');
});
$('.studio__btn .right-arrow').on('click', function () {
    $StudioSlider.flickity('next');
});





//Project details
let $ProjectSlider = $('.project__slider');

$ProjectSlider.flickity({
    prevNextButtons: false,
    pageDots: false,
    contain: true,
    cellAlign: 'left',
    wrapAround: true,
    groupCells: 1,
    friction: 0.5,

    // fullscreen: true,
});

$('.project__btn .left-arrow').on('click', function () {
    console.log(1);
    $ProjectSlider.flickity('previous');
});
$('.project__btn .right-arrow').on('click', function () {
    console.log(2);
    $ProjectSlider.flickity('next');
});












