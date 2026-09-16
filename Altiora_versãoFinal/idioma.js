/* =========================================================================
   ALTIORA — IDIOMA.JS
   Responsável pelo botão PT / EN.

   O que este arquivo faz:
     1. descobre qual idioma mostrar na primeira visita;
     2. percorre a página trocando os textos marcados com data-i18n;
     3. guarda a escolha do visitante para as próximas visitas;
     4. avisa o restante do site quando o idioma muda.

   Depende de: js/traducoes.js (precisa ser carregado antes deste arquivo).
   ========================================================================= */

(function () {
  'use strict';

  var IDIOMA_PADRAO = 'pt';
  var CHAVE_MEMORIA = 'altiora-idioma';

  /* Atributos de HTML que também podem ser traduzidos.
     No HTML eles são escritos com o prefixo data-i18n-
     (por exemplo: data-i18n-alt="sobre.imagemAlt"). */
  var ATRIBUTOS_TRADUZIVEIS = ['alt', 'aria-label', 'content', 'title', 'placeholder', 'data-rotulo'];

  var idiomaAtual = IDIOMA_PADRAO;

  /* -----------------------------------------------------------------------
     Busca o texto de uma chave no idioma corrente.
     Se a chave não existir, devolve a própria chave — assim fica fácil
     identificar no navegador qual tradução está faltando.
     ----------------------------------------------------------------------- */
  function texto(chave) {
    var dicionario = TRADUCOES[idiomaAtual] || TRADUCOES[IDIOMA_PADRAO];
    return Object.prototype.hasOwnProperty.call(dicionario, chave) ? dicionario[chave] : chave;
  }

  /* -----------------------------------------------------------------------
     Leitura e gravação da preferência do visitante.
     Fica dentro de try/catch porque alguns navegadores bloqueiam o
     armazenamento local (navegação privada, por exemplo).
     ----------------------------------------------------------------------- */
  function lerPreferencia() {
    try {
      return window.localStorage.getItem(CHAVE_MEMORIA);
    } catch (erro) {
      return null;
    }
  }

  function gravarPreferencia(idioma) {
    try {
      window.localStorage.setItem(CHAVE_MEMORIA, idioma);
    } catch (erro) {
      /* Sem armazenamento disponível: a escolha vale só para esta visita. */
    }
  }

  /* -----------------------------------------------------------------------
     Decide o idioma inicial:
     1º a escolha guardada, 2º o idioma do navegador, 3º o padrão.
     ----------------------------------------------------------------------- */
  function descobrirIdiomaInicial() {
    var guardado = lerPreferencia();
    if (guardado && TRADUCOES[guardado]) {
      return guardado;
    }

    var idiomaNavegador = (navigator.language || '').toLowerCase();
    if (idiomaNavegador.indexOf('pt') === 0) return 'pt';
    if (idiomaNavegador) return 'en';

    return IDIOMA_PADRAO;
  }

  /* -----------------------------------------------------------------------
     Aplica o idioma em toda a página.
     ----------------------------------------------------------------------- */
  function aplicarIdioma(idioma) {
    if (!TRADUCOES[idioma]) return;
    idiomaAtual = idioma;

    /* Informa o idioma ao navegador e aos leitores de tela */
    document.documentElement.setAttribute('lang', texto('idioma.codigo'));

    /* Textos simples */
    document.querySelectorAll('[data-i18n]').forEach(function (elemento) {
      elemento.textContent = texto(elemento.getAttribute('data-i18n'));
    });

    /* Textos que contêm marcação simples, como quebras de linha (<br>) */
    document.querySelectorAll('[data-i18n-html]').forEach(function (elemento) {
      elemento.innerHTML = texto(elemento.getAttribute('data-i18n-html'));
    });

    /* Atributos (alt, aria-label, content das meta tags, etc.) */
    ATRIBUTOS_TRADUZIVEIS.forEach(function (atributo) {
      var marcador = 'data-i18n-' + atributo;
      document.querySelectorAll('[' + marcador + ']').forEach(function (elemento) {
        elemento.setAttribute(atributo, texto(elemento.getAttribute(marcador)));
      });
    });

    /* Marca visualmente o botão do idioma ativo */
    document.querySelectorAll('.seletor-idioma__opcao').forEach(function (botao) {
      var ativo = botao.getAttribute('data-idioma') === idioma;
      botao.setAttribute('aria-pressed', ativo ? 'true' : 'false');
    });

    /* Avisa os outros scripts (interacoes.js escuta este evento) */
    document.dispatchEvent(new CustomEvent('idiomaAlterado', { detail: { idioma: idioma } }));
  }

  /* -----------------------------------------------------------------------
     Ligação dos botões PT / EN
     ----------------------------------------------------------------------- */
  function ligarBotoes() {
    document.querySelectorAll('.seletor-idioma__opcao').forEach(function (botao) {
      botao.addEventListener('click', function () {
        var escolhido = botao.getAttribute('data-idioma');
        if (escolhido === idiomaAtual) return;
        aplicarIdioma(escolhido);
        gravarPreferencia(escolhido);
      });
    });
  }

  /* -----------------------------------------------------------------------
     Partida
     ----------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    ligarBotoes();
    aplicarIdioma(descobrirIdiomaInicial());
  });

  /* Deixa a função de tradução disponível para os demais scripts */
  window.ALTIORA = window.ALTIORA || {};
  window.ALTIORA.traduzir = texto;
  window.ALTIORA.idiomaAtual = function () { return idiomaAtual; };

})();
