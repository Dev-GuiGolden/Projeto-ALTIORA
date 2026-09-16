# Pasta de imagens

O site funciona sem as fotos: onde faltar um arquivo, aparece um espaço
reservado escuro com o nome da imagem, e o layout continua correto.
Para deixar o site completo, salve os arquivos abaixo **com exatamente estes
nomes** dentro desta pasta.

| Arquivo | Onde aparece | Proporção | Tamanho sugerido |
|---|---|---|---|
| `hero.jpg` | fundo do topo | paisagem | 2400 × 1400 px |
| `sobre.jpg` | seção "Sobre nós" | 3:4 (vertical) | 1200 × 1600 px |
| `proposito.jpg` | faixa larga do "Propósito" | 21:9 (bem larga) | 2400 × 1030 px |
| `curadoria-mobilidade.jpg` | pilar "Fluidez na mobilidade" | 4:3 | 1200 × 900 px |
| `curadoria-hospitalidade.jpg` | pilar "Hospitalidade como destino" | 4:3 | 1200 × 900 px |
| `curadoria-acesso.jpg` | pilar "Acesso ao inigualável" | 4:3 | 1200 × 900 px |
| `destino-dubai.jpg` | galeria de destinos | 3:4 (vertical) | 900 × 1200 px |
| `destino-abu-dhabi.jpg` | galeria de destinos | 3:4 | 900 × 1200 px |
| `destino-kyoto.jpg` | galeria de destinos | 3:4 | 900 × 1200 px |
| `destino-como.jpg` | galeria de destinos | 3:4 | 900 × 1200 px |
| `destino-patagonia.jpg` | galeria de destinos | 3:4 | 900 × 1200 px |
| `equipe-erick.jpg` | Conselho Executivo | 1:1 (quadrada) | 1000 × 1000 px |
| `equipe-matheus.jpg` | Conselho Executivo | 1:1 | 1000 × 1000 px |
| `equipe-vagner.jpg` | Conselho Executivo | 1:1 | 1000 × 1000 px |

## Recomendações

- **Não precisa converter para preto e branco.** O CSS já aplica o filtro
  (`filter: grayscale(1)` em `css/componentes.css`), mantendo a paleta da marca.
  Se um dia quiser fotos coloridas, basta remover essa linha.
- Exporte em JPG com qualidade entre 75% e 85% e largura máxima de 2400 px.
  Arquivos acima de 400 KB deixam a abertura do site lenta.
- Prefira imagens com **áreas vazias** (céu, parede, água): o texto do topo
  fica sobre a foto e precisa de espaço para respirar.
- Use apenas fotos licenciadas para uso comercial. Bancos gratuitos com essa
  licença: Unsplash, Pexels e Pixabay. Para um site de marca, vale contratar
  banco pago (Stocksy, Getty) ou fotografia própria.
- Se preferir outro nome de arquivo, altere o `src` correspondente no
  `index.html`.
