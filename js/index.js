document.addEventListener('DOMContentLoaded', () => {

    // Получение списка блоков для анимации
    let blocks = document.querySelectorAll('.block-animation');

    /**
     * Функция проверки видимости блока
     */
    const checkBlocksVisibility = () => {
        let windowHeight = window.innerHeight; // Высота окна браузера

        // Проверяем на видимость все блоки с классом анимации
        blocks.forEach(block => {
            let blockPosition = block.getBoundingClientRect().top;

            //Если блок в активной области высоты с запасом 50px
            if (blockPosition < windowHeight - 50) {
                block.style.opacity = "1";
                block.style.transform = "translateY(0)";
            }
        });
    }

    checkBlocksVisibility();

    // Обработчик для скролла страницы
    window.addEventListener('scroll', () => {
        checkBlocksVisibility();
    });
});