// Arquivo JavaScript inicial do projeto.
console.log('script.js carregado com sucesso.');

// Menu hambúrguer
const hamburger = document.getElementById('hamburger');
const navLinksMenu = document.getElementById('itens-do-menu');

if (hamburger && navLinksMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinksMenu.classList.toggle('open');
  });
}
// Seleciona todos os links do menu
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".itens-do-menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // ajuste para altura do menu
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Marcar o item do menu como ativo com base na página atual

(function marcarMenuAtivo() {
  const aplicar = () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.itens-do-menu li a');

    links.forEach((link) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#')) return;

      const targetPage = href.split('/').pop();
      if (targetPage === currentPage) {
        link.parentElement.classList.add('active');
      }
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', aplicar);
  } else {
    aplicar();
  }
})();