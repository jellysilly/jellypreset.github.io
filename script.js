document.addEventListener('DOMContentLoaded', () => {
    // Функция для переключения видимости промптов
    const setupToggles = () => {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('toggle-btn')) {
                const btn = e.target;
                const content = btn.parentElement.nextElementSibling;
                content.classList.toggle('hidden');
                btn.textContent = content.classList.contains('hidden') ? 'Показать' : 'Скрыть';
            }
            
            if (e.target.classList.contains('prompt-header')) {
                const header = e.target;
                const content = header.nextElementSibling;
                const btn = header.querySelector('.toggle-btn');
                content.classList.toggle('hidden');
                btn.textContent = content.classList.contains('hidden') ? 'Показать' : 'Скрыть';
            }
        });
    };

    // Функция для копирования текста
    const setupCopy = () => {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('copy-btn')) {
                const btn = e.target;
                const text = btn.previousElementSibling.textContent;
                navigator.clipboard.writeText(text).then(() => {
                    const originalText = btn.textContent;
                    btn.textContent = 'Скопировано!';
                    btn.style.backgroundColor = '#b7d5ff';
                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.style.backgroundColor = '';
                    }, 2000);
                });
            }
        });
    };

    // Инициализация
    setupToggles();
    setupCopy();
});
