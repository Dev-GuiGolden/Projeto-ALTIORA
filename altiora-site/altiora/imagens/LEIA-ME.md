# Pasta de imagens

As onze ilustrações desta pasta foram **desenhadas por código**, especialmente
para este site. Não são fotografias nem recortes de banco de imagens, então não
há nenhuma questão de direito autoral: são formas geométricas (gradientes,
polígonos, círculos) compostas em tons de cinza para combinar com a paleta da
marca.

O arquivo `gerador-das-imagens.py` é o programa que as produziu, em Python com
a biblioteca Pillow. Ele está aqui por dois motivos: comprova a origem das
imagens e permite regerar tudo caso você queira mudar alguma coisa.

## Arquivos e onde aparecem

| Arquivo | Seção | Cena |
|---|---|---|
| `hero.jpg` | topo | dunas com uma cidade ao longe |
| `sobre.jpg` | Sobre nós | suíte com janela panorâmica |
| `proposito.jpg` | Propósito (faixa larga) | jato executivo ao amanhecer |
| `curadoria-mobilidade.jpg` | pilar 1 | jato em pista |
| `curadoria-hospitalidade.jpg` | pilar 2 | fachada de hotel ao anoitecer |
| `curadoria-acesso.jpg` | pilar 3 | salão de arte com visitante |
| `destino-dubai.jpg` | galeria | skyline vertical |
| `destino-abu-dhabi.jpg` | galeria | cúpulas e arcos |
| `destino-kyoto.jpg` | galeria | pagode entre árvores |
| `destino-como.jpg` | galeria | villa à beira do lago |
| `destino-patagonia.jpg` | galeria | picos com neblina |

## Como regerar ou alterar

1. Instale a biblioteca: `pip install pillow numpy`
2. Abra o `gerador-das-imagens.py` e altere o que quiser. A variável `SAIDA`,
   no começo do arquivo, é a pasta onde os arquivos são salvos — ajuste para o
   caminho da sua máquina.
3. Rode: `python gerador-das-imagens.py`

Cada cena é uma função (`hero()`, `sobre()`, `destino_kyoto()`...). Os números
são coordenadas em pixels e os tons vão de 0 (preto) a 255 (branco).

## Se preferir trocar por fotos

Basta salvar a foto com o mesmo nome do arquivo que quer substituir. Mantenha
a proporção: `hero` e `proposito` são deitadas, os destinos e o `sobre` são
verticais (3:4), e os pilares são 4:3. Use apenas imagens licenciadas para uso
comercial — Unsplash, Pexels e Pixabay oferecem esse tipo de licença de graça.
Não é preciso converter para preto e branco: o CSS já aplica o filtro.
