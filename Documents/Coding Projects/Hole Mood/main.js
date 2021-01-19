/* =====GLOBAL===== */



/* =====TITLE===== */



/* =====NAV BAR===== */

// Onscroll remove navbar margin-top and shrink logo to make more compact during scrolling
window.onscroll = function() {navBarScroll()};

function navBarScroll () {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementsByClassName("navbar")[0].style.marginTop = "0";
        document.getElementById("hm-logo").style.display = "none";
    } else {
        document.getElementsByClassName("navbar")[0].style.marginTop = "3rem";
        document.getElementById("hm-logo").style.display = "block";
    }
}

/* =====HERO===== */



/* =====ABOUT US===== */



/* =====HOW IT WORKS===== */



/* =====MENU===== */



/* =====CONTACT US===== */



/* =====FOOTER===== */

