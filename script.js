document.addEventListener("DOMContentLoaded", function() {

    const logo = document.querySelector(".logo")

    function handleMouseMove(e) {
        var xPos = e.clientX - (logo.offsetWidth / 2);
        var yPos = e.clientY - (logo.offsetHeight / 2);
        
        logo.style.left = xPos + 'px';
        logo.style.top = yPos + 'px';
    }

document.addEventListener("mousemove", handleMouseMove)
});



