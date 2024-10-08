$(document).ready(() => {

    $(".hamberger").click(function(event) {
        event.stopPropagation();
        $(".menu").slideDown(300);
    });

    $(".close").click(function() {
        $(".menu").slideUp(300);
    });

    const specificDiv = document.querySelector('.menu');

    document.addEventListener('click', function(event) {
        if (!specificDiv.contains(event.target) && !$(".hamberger").is(event.target)) {
            $(".menu").slideUp(300);
        }
    });
});