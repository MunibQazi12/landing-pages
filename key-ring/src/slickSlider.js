
$(document).ready(function () {
    $('.fade').slick({
        speed: 1000,
        autoplaySpeed: 3000,
        autoplay: false,
        fade: true,
        arrows: true,
        cssEase: 'linear',
        dots: true,
        infinite: true,
        customPaging: function (slider, i) {
            return '<button>' + (i + 1) + '</button>';
        },
    });

    $('.slick-prev').click(function () {
        $('.fade').slick('slickPrev');
    });

    $('.slick-next').click(function () {
        $('.fade').slick('slickNext');
    });
});

$(document).ready(function () {
    $('.compniessLogo').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.ReviewSlider').slick({
        speed: 1000,
        autoplaySpeed: 3000,
        autoplay: false,
        fade: true,
        arrows: true,
        cssEase: 'linear',
        dots: true,
        infinite: true,
        customPaging: function (slider, i) {
            return '<button>' + (i + 1) + '</button>';
        },
    });

    $('.slick-prev').click(function () {
        $('.ReviewSlider').slick('slickPrev');
    });

    $('.slick-next').click(function () {
        $('.ReviewSlider').slick('slickNext');
    });

    $('.ammetSlider').slick({
        speed: 1000,
        autoplaySpeed: 3000,
        autoplay: false,
        fade: true,
        arrows: true,
        cssEase: 'linear',
        dots: true,
        infinite: true,
        customPaging: function (slider, i) {
            return '<button>' + (i + 1) + '</button>';
        },
    });

    $('.slick-prev').click(function () {
        $('.ammetSlider').slick('slickPrev');
    });

    $('.slick-next').click(function () {
        $('.ammetSlider').slick('slickNext');
    });
});


// Animations 

const eventListener = (className) => {
    const element = document.querySelectorAll(`${className}`);
    for (var i = 0; i < element.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = element[i].getBoundingClientRect().top;
        var elementVisible = 75;
        if (elementTop < windowHeight - elementVisible) {
            element[i].classList.add("active");
        } else {
            element[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", () => { eventListener('.BottomAnimation') });
window.addEventListener("scroll", () => { eventListener('.LeftAnimation') });
window.addEventListener("scroll", () => { eventListener('.RightAnimation') });
window.addEventListener("scroll", () => { eventListener('.footerLogoRotate') });

handleButtonClick = () => {
    const btn = document.getElementById('open-button');
    btn.classList.toggle("open--on");
    const tools = document.getElementById('toolbar');
    tools.classList.toggle("visibile");
}

//Glossary page Accordian 

let acc = document.getElementsByClassName("accordion");
let i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";

        }
    });
}

// Mobile navbar

//     function myFunction() {
//         let x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//         x.style.display = "none";
//         x.classList.add("fadeInLeft");
//         x.classList.remove("fadeInRight");
//   } 
//   else {
//         x.style.display = "block";
//         x.classList.add("fadeInRight");
//         x.classList.remove("fadeInLeft");
//   }
// }

function sideBar() {
    var element = document.getElementById("mobSideBar");
    element.classList.add("open");

    var element = document.getElementById("overlay");
    element.classList.add("open");
}

function sideBarClose() {
    var element = document.getElementById("mobSideBar");
    element.classList.remove("open");

    var element = document.getElementById("overlay");
    element.classList.remove("open");
}

