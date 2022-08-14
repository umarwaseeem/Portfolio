// animating scroll to div
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

function toggleTheme(){
    document.body.classList.toggle("dark");
}

//  execute toggle() when img is clicked

document.getElementById("half-image").addEventListener("click", toggleTheme);