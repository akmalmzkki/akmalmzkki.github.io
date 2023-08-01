AOS.init();

$("a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        let hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
});

$(window).scroll(function(){
    if ($(window).scrollTop() > screenTop) {
        $("nav").addClass("scrolled");
    } else {
        $("nav").removeClass("scrolled");
    }
});

function setupButtonHover() {
    const btndark = $(".btn-dark");
    const btnlight = $(".btn-light");
    const projectbtn = $(".project-btn");
  
    btndark.hover(function() {
        $(this).children("svg").children("path").attr("stroke", "#28293D");
        $(this).children("svg").attr("fill", "#28293D");
    });
  
    btndark.mouseout(function() {
        $(this).children("svg").children("path").attr("stroke", "white");
        $(this).children("svg").attr("fill", "white");
    });
  
    btnlight.hover(function() {
        $(this).children("svg").children("path").attr("stroke", "white");
    });
  
    btnlight.mouseout(function() {
        $(this).children("svg").children("path").attr("stroke", "#28293D");
    });
  
    projectbtn.hover(function() {
        $(this).children("svg").children("path").attr("stroke", "#28293D");
    });
  
    projectbtn.mouseout(function() {
        $(this).children("svg").children("path").attr("stroke", "white");
    });
}
setupButtonHover();
  
$(".navbar-toggler").click(function() {
    $(this).toggleClass("clicked");
    $(".navbar-nav").toggleClass("show");
});

$(document).ready(function() {
    $(".nav-link").hover(
        function() {
            $(this).find(".dropdown-content").slideDown(200);
        },
        function() {
            $(this).find(".dropdown-content").slideUp(200);
        }
    );
});

$('.card-skill').hover(function() {
    $(this).find('.bottom-skill').stop().slideToggle();
    $(this).find('bottom-skill').slideUp();
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.show-description');

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const cardSkill = this.closest('.card-skill');
            const figcaption = cardSkill.querySelector('figcaption');
            figcaption.style.display = (figcaption.style.display == 'block') ? 'none' : 'block';
        })
    })
    
    const hideButtons = document.querySelectorAll('.hide-description');
    
    hideButtons.forEach(button => {
        button.addEventListener("click", function() {
            const cardSkill = this.closest('.card-skill');
            const figcaption = cardSkill.querySelector('figcaption');
            figcaption.style.display = (figcaption.style.display == 'block') ? 'none' : 'block';
        })
    })
});

if (window.location.protocol !== 'http:' && window.location.protocol !== 'https:') {
    window.location.href = 'alert.html';
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    alert('Oiya gais, kalo mau liat web ini, disaranin buka di laptop atau komputer ya, biar enak liatnya😁.');
}