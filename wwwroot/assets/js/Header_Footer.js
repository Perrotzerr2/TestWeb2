// Chargement du header et du footer
$(function () {
    $("#header").load("header.html", function () {
        // Cette fonction callback s'exécute une fois que le header est chargé
        setCurrentNavLink();
        initializeSlider();  // Initialisation du slider
    });
    $("#footer").load("footer.html");
});

// Mise à jour de la classe "current" pour le lien de navigation approprié
function setCurrentNavLink() {
    var page = window.location.pathname.split("/").pop();

    $("#nav ul li a").each(function () {
        if ($(this).attr('href') == page) {
            $(this).parent().addClass('current');
        } else {
            $(this).parent().removeClass('current');
        }
    });
}

function initializeSlider() {
    let slides = $(".slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides.eq(currentIndex).css("opacity", "0");
        slides.eq(index).css("opacity", "1");
        currentIndex = index;
    }

    $(".next").click(function () {
        let nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
    });

    $(".prev").click(function () {
        let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    });

    // Pour le défilement auto
    setInterval(function () {
        let nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
    }, 5000); // Changer 5000ms (5 secondes) à la durée souhaitée pour chaque image
}
$(document).ready(function () {
    $(window).scroll(function () {
        $('.section').each(function () {
            var top_of_element = $(this).offset().top;
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            var top_of_screen = $(window).scrollTop();

            console.log('Top of Element:', top_of_element);
            console.log('Bottom of Element:', bottom_of_element);
            console.log('Top of Screen:', top_of_screen);
            console.log('Bottom of Screen:', bottom_of_screen);

            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
                $(this).addClass('inView');  // Add "inView" class if element is in view
            } else {
                $(this).removeClass('inView'); // Remove class if element is not in view
            }
        });
    });
});



