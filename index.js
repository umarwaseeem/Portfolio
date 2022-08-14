//- Animating scroll to specific div on page
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
        }
    });
    }
);



// - Theme Toggle
//  execute toggle() when img is clicked
document.getElementById("half-image").addEventListener("click", toggleTheme);
function toggleTheme(){
    document.body.classList.toggle("light");
}




// - Size of main divs same as screen size 

var height = window.innerHeight;
var width = window.innerWidth;

document.querySelector(".upper-portion").style.height = height + "px";
// document.querySelector("#lower-portion").style.height = height + "px";
document.querySelector("#middle-portion").style.height = height + "px";