document.addEventListener("DOMContentLoaded", function() {
    const menuIcons = document.querySelector('.menu-icons');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');

    function updateArrowVisibility() {
        const isAtEnd = menuIcons.scrollWidth - Math.floor(menuIcons.scrollLeft) <= menuIcons.clientWidth;
        const isAtStart = menuIcons.scrollLeft === 0;

        arrowRight.style.display = isAtEnd ? 'none' : '';
        arrowLeft.style.display = isAtStart ? 'none' : '';
    }

    menuIcons.addEventListener('scroll', updateArrowVisibility);

    updateArrowVisibility();

    arrowRight.addEventListener('click', () => {
        menuIcons.scrollBy({ left: 100, behavior: 'smooth' }); // Ajuste o valor de 100 conforme necessário
    });

    arrowLeft.addEventListener('click', () => {
        menuIcons.scrollBy({ left: -100, behavior: 'smooth' }); // Ajuste o valor de -100 conforme necessário
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const menuIcons = document.querySelectorAll('.button-menu');
    const titleCard = document.querySelector('.title-card');

    // Adiciona um ouvinte de evento de clique a cada ícone
    menuIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            // Obtém o texto do atributo 'data-tech' do ícone clicado
            const tech = icon.getAttribute('data-tech');
            // Atualiza o conteúdo da tag <strong> com o texto obtido
            titleCard.textContent = tech;
        });
    });
});