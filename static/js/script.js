// AOS Initialization
AOS.init();

// Navbar smooth scroll
$('a').click(function (e) { 
    e.preventDefault();
    if (this.hash !== "") {
        let hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {
            window.location.hash = hash;
        });
    };
});

// Activate navbar background when scrolled
$(window).scroll(function () { 
    if ($(document).scrollTop() > screenTop) {
        $("nav").addClass("scrolled");
    } else {
        $("nav").removeClass("scrolled");    
    }
});

// Hover btn-dark
$('.btn-dark').hover(
    function () {
        $(this).children("svg").children("path").attr("stroke", "#28293D");
        $(this).children("svg").attr("fill", "#28293D");
    }, 
    function () {
        $(this).children("svg").children("path").attr("stroke", "white");
        $(this).children("svg").attr("fill", "white");
    }
);

// Hover btn-light
$('.btn-light').hover(
    function () {
        $(this).children("svg").children("path").attr("stroke", "white");
    }, 
    function () {
        $(this).children("svg").children("path").attr("stroke", "#28293D");
    }
);

// Hover project-btn
$('.project-btn').hover(
    function () {
        $(this).children("svg").children("path").attr("stroke", "#28293D");
    }, 
    function () {
        $(this).children("svg").children("path").attr("stroke", "white");
    }
);

// Bring up navbar-toggler
$(document).click(function (e) { 
    e.preventDefault();
    $(this).toggleClass("clicked");
    $(".navbar-nav").toggleClass("show");
});

// Bring up dropdown-content
$('.nav-link').hover(
    function () {
        $(this).find(".dropdown-content").slideDown(200);
    }, 
    function () {
        $(this).find(".dropdown-content").slideUp(200);
    }
);

// Bring up bottom-skill
$('.card-skill').hover(
    function () {
        $(this).find(".bottom-skill").slideDown(500);
    }, 
    function () {
        $(this).find(".bottom-skill").slideUp(500);
    }
);

// Add listener from card-skill to figcaption when button clicked
$(document).ready(function() {
    $('.show-description').click(function() {
        const cardSkill = $(this).closest('.card-skill');
        const figcaption = cardSkill.find('figcaption');
        figcaption.toggle();
    });

    $('.hide-description').click(function() {
        const cardSkill = $(this).closest('.card-skill');
        const figcaption = cardSkill.find('figcaption');
        figcaption.toggle();
    });
});

if (window.location.protocol !== 'http:' && window.location.protocol !== 'https:') {
    window.location.href = 'alert.html';
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    alert('Oiya gais, kalo mau liat web ini, disaranin buka di laptop atau komputer ya, biar enak liatnya😁.');
}