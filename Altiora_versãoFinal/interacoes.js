/* =========================================================================
   ALTIORA — INTERACOES.JS
   Comportamentos da página:
     1. fundo do cabeçalho ao rolar
     2. menu lateral em telas pequenas
     3. galeria de destinos (setas e teclado)
     4. imagens que ainda não existem na pasta /imagens
     5. revelação suave das seções
     6. ano do rodapé
   ========================================================================= */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  /* -----------------------------------------------------------------------
     1. CABEÇALHO — ganha fundo sólido depois de uma pequena rolagem
     ----------------------------------------------------------------------- */
  var cabecalho = document.getElementById('cabecalho');
  var LIMITE_ROLAGEM = 60; // em pixels

  function atualizarCabecalho() {
    cabecalho.classList.toggle('cabecalho--rolado', window.scrollY > LIMITE_ROLAGEM);
  }

  atualizarCabecalho(); // caso a página abra já rolada
  window.addEventListener('scroll', atualizarCabecalho, { passive: true });

  /* -----------------------------------------------------------------------
     2. MENU LATERAL (telas pequenas)
     ----------------------------------------------------------------------- */
  var gatilhoMenu = document.getElementById('gatilhoMenu');
  var navegacao = document.getElementById('navegacaoPrincipal');

  function traduzir(chave) {
    return (window.ALTIORA && window.ALTIORA.traduzir) ? window.ALTIORA.traduzir(chave) : '';
  }

  /* Mantém o rótulo do botão coerente com o estado e com o idioma atual */
  function atualizarRotuloMenu() {
    var aberto = navegacao.classList.contains('cabecalho__navegacao--aberta');
    gatilhoMenu.setAttribute('aria-label', traduzir(aberto ? 'menu.fechar' : 'menu.abrir'));
  }

  function definirMenu(aberto) {
    navegacao.classList.toggle('cabecalho__navegacao--aberta', aberto);
    cabecalho.classList.toggle('cabecalho--menu-aberto', aberto);
    gatilhoMenu.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    atualizarRotuloMenu();
  }

  gatilhoMenu.addEventListener('click', function () {
    definirMenu(!navegacao.classList.contains('cabecalho__navegacao--aberta'));
  });

  /* Fecha o menu ao escolher um destino da navegação */
  navegacao.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { definirMenu(false); });
  });

  /* Fecha o menu com a tecla Esc */
  document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape') definirMenu(false);
  });

  /* Quando o idioma muda, o rótulo do botão também precisa mudar */
  document.addEventListener('idiomaAlterado', atualizarRotuloMenu);

  /* -----------------------------------------------------------------------
     3. GALERIA DE DESTINOS — setas laterais e navegação por teclado
     ----------------------------------------------------------------------- */
  var galeria = document.getElementById('galeriaDestinos');

  if (galeria) {
    /* Move a galeria pela largura de um cartão mais o espaçamento */
    function deslocarGaleria(direcao) {
      var cartao = galeria.querySelector('.destino');
      if (!cartao) return;

      var espacamento = parseFloat(getComputedStyle(galeria).columnGap) || 24;
      var passo = cartao.getBoundingClientRect().width + espacamento;

      galeria.scrollBy({ left: passo * direcao, behavior: 'smooth' });
    }

    document.querySelectorAll('[data-galeria]').forEach(function (botao) {
      botao.addEventListener('click', function () {
        deslocarGaleria(botao.getAttribute('data-galeria') === 'proximo' ? 1 : -1);
      });
    });

    /* Setas do teclado quando a galeria está em foco */
    galeria.addEventListener('keydown', function (evento) {
      if (evento.key === 'ArrowRight') { evento.preventDefault(); deslocarGaleria(1); }
      if (evento.key === 'ArrowLeft')  { evento.preventDefault(); deslocarGaleria(-1); }
    });
  }

  /* -----------------------------------------------------------------------
     4. IMAGENS AUSENTES
     Enquanto os arquivos reais não forem colocados na pasta /imagens,
     a figura mostra apenas o espaço reservado, sem ícone de imagem
     quebrada. Assim o layout continua apresentável.
     ----------------------------------------------------------------------- */
  function marcarSemImagem(imagem) {
    var recipiente = imagem.closest('.figura, .faixa, .hero__midia');
    if (recipiente) recipiente.classList.add('sem-imagem');
    imagem.style.display = 'none';
  }

  document.querySelectorAll('.figura__imagem, .hero__imagem').forEach(function (imagem) {
    /* A imagem pode já ter falhado antes deste script rodar */
    if (imagem.complete && imagem.naturalWidth === 0) {
      marcarSemImagem(imagem);
    }
    imagem.addEventListener('error', function () { marcarSemImagem(imagem); });
  });

  /* -----------------------------------------------------------------------
     5. REVELAÇÃO DAS SEÇÕES AO ENTRAR NA TELA
     ----------------------------------------------------------------------- */
  var blocos = document.querySelectorAll(
    '.dupla, .cabecalho-secao, .pilares, .galeria, .depoimentos, .equipe, .secao--contato > *'
  );

  blocos.forEach(function (bloco) { bloco.classList.add('revelar'); });

  var menosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (menosMovimento || !('IntersectionObserver' in window)) {
    /* Sem animação: tudo aparece imediatamente */
    blocos.forEach(function (bloco) { bloco.classList.add('revelar--visivel'); });
  } else {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add('revelar--visivel');
        observador.unobserve(entrada.target); // anima uma única vez
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    blocos.forEach(function (bloco) { observador.observe(bloco); });
  }

  /* -----------------------------------------------------------------------
     6. ANO DO RODAPÉ
     ----------------------------------------------------------------------- */
  var campoAno = document.getElementById('anoAtual');
  if (campoAno) campoAno.textContent = new Date().getFullYear();

});
