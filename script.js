// AOS Initialization
AOS.init();

// Navbar smooth scroll
$('a').click(function (e) { 
    if (this.hash !== "") {
        e.preventDefault();
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
$('.navbar-toggler').click(function (e) { 
    e.preventDefault();
    $(this).toggleClass("clicked");
    $(".navbar-nav").toggleClass("show");
});

// Bring up dropdown-content
$('.nav-link').hover(
    function () {
        $(this).find(".dropdown-content").slideDown(200);
        $(this).find('.svg-dropdown').css('transform', 'rotate(0deg)');
    }, 
    function () {
        $(this).find(".dropdown-content").slideUp(200);
        $(this).find('.svg-dropdown').css('transform', 'rotate(-90deg)');
    }
);

// Bring up bottom-skill
$('.card-skill').hover(
    function () {
        $(this).find(".bottom-skill").slideDown(500);
        $(this).find(".sub-title-skill").css("display", "none");
    }, 
    function () {
        $(this).find(".bottom-skill").slideUp(500);
        $(this).find(".sub-title-skill").css("display", "block");
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

// Check if protocol is http or https, then show error
if (window.location.protocol !== 'http:' && window.location.protocol !== 'https:') {
    Swal.fire({
        icon: 'error',
        title: 'Protocol Error',
        text: 'Pake live server dulu buat buka website ini yakk 😁!',
    }).then(function () {
        window.close();
    });
}

// Check if user is using mobile device, then show info
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    Swal.fire({
        icon: 'info',
        title: 'Hmmm...',
        text: 'Disaranin buka web ini di laptop atau komputer ya, biar enak diliatnya😁.',
    })
}