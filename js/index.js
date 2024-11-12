document.addEventListener('DOMContentLoaded', function() {
    let blocks = document.querySelectorAll('.block-animation');

    function checkBlocksVisibility() {
        let windowHeight = window.innerHeight;

        blocks.forEach(block => {
            let blockPosition = block.getBoundingClientRect().top;

            if (blockPosition < windowHeight - 50) {
            block.style.opacity = "1";
            block.style.transform = "translateY(0)";
        }
    });
    }

    checkBlocksVisibility();

    window.addEventListener('scroll', function() {
        checkBlocksVisibility();
    });
});