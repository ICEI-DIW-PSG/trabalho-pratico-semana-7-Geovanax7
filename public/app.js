// Efeito suave de rolagem nos links do menu
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const alvo = document.querySelector(this.getAttribute('href'));
    alvo.scrollIntoView({ behavior: 'smooth' });
  });
});
