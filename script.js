// JavaScript to trigger the animation when the element becomes visible
document.addEventListener("DOMContentLoaded", function() {
    var aboutusHeading = document.getElementById("aboutus");
    var aboutusOffset = aboutusHeading.offsetTop;
    var windowHeight = window.innerHeight;

    function checkScroll() {
        var scrollY = window.scrollY;
        if (scrollY + windowHeight > aboutusOffset) {
            aboutusHeading.classList.add("show");
            window.removeEventListener("scroll", checkScroll);
        }
    }

    window.addEventListener("scroll", checkScroll);
});
