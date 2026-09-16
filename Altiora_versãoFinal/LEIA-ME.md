# ALTIORA — site institucional

Página única, bilíngue (português e inglês), com o código separado por
responsabilidade. Todos os comentários estão em português.

## Estrutura

```
altiora/
├── index.html              estrutura da página (só o esqueleto)
├── css/
│   ├── base.css            variáveis de cor, reset, tipografia, utilitários
│   ├── componentes.css     botões, cabeçalho, seletor de idioma, figuras
│   ├── secoes.css          estilo de cada bloco, na ordem do HTML
│   └── responsivo.css      ajustes para tablet e celular (carregado por último)
├── js/
│   ├── traducoes.js        todos os textos do site, em PT e EN
│   ├── idioma.js           o botão PT/EN e a troca dos textos
│   └── interacoes.js       cabeçalho, menu, galeria, animações
└── imagens/                as fotos (ver imagens/LEIA-ME.md)
```

Para abrir: clique duas vezes em `index.html`. Não precisa de servidor nem de
instalação — os arquivos são carregados como `<link>` e `<script>` comuns.

## Onde mexer em cada coisa

| Quero mudar | Arquivo |
|---|---|
| Um texto do site (nos dois idiomas) | `js/traducoes.js` |
| As cores, a fonte, os espaçamentos | `css/base.css`, no bloco `:root` |
| A ordem das seções | `index.html` |
| O visual de uma seção específica | `css/secoes.css` |
| O comportamento no celular | `css/responsivo.css` |
| As fotos | pasta `imagens/` (nomes em `imagens/LEIA-ME.md`) |

## Como funciona a tradução

Nenhum texto visível fica preso ao HTML. Cada elemento traduzível carrega uma
chave:

```html
<h2 class="titulo" data-i18n="sobre.titulo">A arte da jornada refinada.</h2>
```

O texto entre as tags é apenas o que aparece antes de o JavaScript rodar. O
conteúdo real vem de `js/traducoes.js`, que tem a mesma lista de chaves em `pt`
e em `en`.

Para criar um texto novo: adicione a chave nos dois idiomas e escreva
`data-i18n="sua.chave"` no elemento. Se uma chave não existir no dicionário, o
site mostra o nome da própria chave — é assim que você descobre o que falta.

Variações aceitas: `data-i18n-html` (permite `<br>`), `data-i18n-alt`,
`data-i18n-aria-label`, `data-i18n-content`, `data-i18n-title`,
`data-i18n-data-rotulo`.

O idioma escolhido fica guardado no navegador. Na primeira visita, quem chega
com o navegador em português vê o site em português; os demais veem em inglês.

## Antes de publicar

1. **Depoimentos.** Os quatro relatos da seção "Clientes" são fictícios, criados
   apenas como modelo de formato. Substitua por depoimentos reais com
   autorização por escrito de cada cliente, ou remova a seção. Publicar
   declarações atribuídas a pessoas que não as deram — sobretudo pessoas
   públicas reais — configura uso indevido de imagem e falsa associação de
   marca.
2. **Imagens.** Coloque os arquivos listados em `imagens/LEIA-ME.md`, usando
   apenas fotos licenciadas para uso comercial.
3. **Aviso amarelo.** Apague o parágrafo com `class="aviso-depoimentos"` do
   `index.html` quando os depoimentos forem reais.
4. **E-mail.** Troque `contato@altiora.com` pelo endereço real (aparece duas
   vezes na seção de contato do `index.html`).
