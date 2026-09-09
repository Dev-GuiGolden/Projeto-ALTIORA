/* =========================================================================
   ALTIORA — SCRIPT PRINCIPAL
   Responsável por:
   1. Alternar o fundo do cabeçalho ao rolar a página
   2. Abrir/fechar o menu de navegação em telas pequenas
   3. Revelar as seções suavemente conforme entram na tela
   4. Atualizar o ano exibido no rodapé
   Comentários em português para leitura e manutenção futura.
   ========================================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* -----------------------------------------------------------------------
     1. CABEÇALHO: aplica fundo sólido após rolar um pouco a página
     ----------------------------------------------------------------------- */
  var cabecalho = document.getElementById('cabecalho');
  var LIMITE_ROLAGEM = 60; // distância (em px) para considerar "rolado"

  function atualizarEstadoCabecalho() {
    if (window.scrollY > LIMITE_ROLAGEM) {
      cabecalho.classList.add('cabecalho--rolado');
    } else {
      cabecalho.classList.remove('cabecalho--rolado');
    }
  }

  // Executa uma vez ao carregar (caso a página já abra rolada) e a cada scroll
  atualizarEstadoCabecalho();
  window.addEventListener('scroll', atualizarEstadoCabecalho, { passive: true });

  /* -----------------------------------------------------------------------
     2. MENU MOBILE: abre e fecha a navegação em telas pequenas
     ----------------------------------------------------------------------- */
  var gatilhoMenu = document.getElementById('gatilhoMenu');
  var navegacaoPrincipal = document.getElementById('navegacaoPrincipal');

  function alternarMenu() {
    var estaAberto = navegacaoPrincipal.classList.toggle('cabecalho__navegacao--aberta');
    gatilhoMenu.setAttribute('aria-expanded', estaAberto ? 'true' : 'false');
  }

  gatilhoMenu.addEventListener('click', alternarMenu);

  // Fecha o menu automaticamente ao clicar em algum link (navegação por âncora)
  var linksNavegacao = navegacaoPrincipal.querySelectorAll('a');
  linksNavegacao.forEach(function (link) {
    link.addEventListener('click', function () {
      navegacaoPrincipal.classList.remove('cabecalho__navegacao--aberta');
      gatilhoMenu.setAttribute('aria-expanded', 'false');
    });
  });

  /* -----------------------------------------------------------------------
     3. REVELAÇÃO SUAVE DAS SEÇÕES AO ROLAR A PÁGINA
     ----------------------------------------------------------------------- */
  // Marca os principais blocos de conteúdo para receberem a animação de entrada
  var elementosParaRevelar = document.querySelectorAll(
    '.secao__grade, .secao__cabecalho-centralizado, .grade-pilares, .grade-equipe, .secao--contato > *'
  );

  elementosParaRevelar.forEach(function (elemento) {
    elemento.classList.add('js-revelar');
  });

  // Respeita a preferência do usuário por menos movimento na tela
  var prefereMenosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefereMenosMovimento || !('IntersectionObserver' in window)) {
    // Sem suporte ou com preferência por menos animação: mostra tudo direto
    elementosParaRevelar.forEach(function (elemento) {
      elemento.classList.add('js-revelar--visivel');
    });
  } else {
    var observador = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('js-revelar--visivel');
            observador.unobserve(entrada.target); // anima apenas uma vez
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    elementosParaRevelar.forEach(function (elemento) {
      observador.observe(elemento);
    });
  }

  /* -----------------------------------------------------------------------
     4. RODAPÉ: preenche o ano atual automaticamente
     ----------------------------------------------------------------------- */
  var elementoAno = document.getElementById('anoAtual');
  if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();
  }

});
