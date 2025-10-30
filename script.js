document.addEventListener('DOMContentLoaded', function () {
    // Adiciona funcionalidade de scroll suave para links de navegação
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Previne o comportamento padrão do link (salto instantâneo)

            const targetId = this.getAttribute('href'); // Pega o ID da seção (ex: "#sobre")
            const targetElement = document.querySelector(targetId); // Encontra o elemento correspondente

            if (targetElement) {
                // Rola suavemente para o elemento
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Funcionalidade do menu hambúrguer para mobile
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.main-nav');

    hamburgerButton.addEventListener('click', () => {
        nav.classList.toggle('is-active');
        const isExpanded = nav.classList.contains('is-active');
        hamburgerButton.setAttribute('aria-expanded', isExpanded);
    });
});