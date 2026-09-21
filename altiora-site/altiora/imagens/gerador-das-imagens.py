# -*- coding: utf-8 -*-
"""Ilustracoes originais em tons de cinza para o site ALTIORA (PIL)."""
import math, random
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

SAIDA = "/mnt/user-data/outputs/altiora/imagens/"

def fundo(w, h, topo, base):
    y = np.linspace(0, 1, h)[:, None]
    arr = topo + (base - topo) * (y ** 1.15)
    return np.repeat(arr, w, axis=1).astype(np.float64)

def brilho(arr, cx, cy, r, forca):
    h, w = arr.shape
    yy, xx = np.mgrid[0:h, 0:w]
    d = np.sqrt((xx - cx) ** 2 + (yy - cy) ** 2)
    arr += forca * np.exp(-(d / r) ** 2)
    return np.clip(arr, 0, 255)

def bruma(arr, y0, y1, forca):
    h, w = arr.shape
    y = np.arange(h)[:, None]
    fator = np.clip((y1 - y) / max(y1 - y0, 1), 0, 1) * np.clip((y - y0) / max(y1 - y0, 1), 0, 1) * 4
    arr += forca * np.repeat(fator, w, axis=1)
    return np.clip(arr, 0, 255)

def para_img(arr):
    return Image.fromarray(arr.astype(np.uint8), "L")

def grao(img, forca=3.0):
    a = np.asarray(img).astype(np.float64)
    rng = np.random.default_rng(7)
    a += rng.normal(0, forca, a.shape)
    return Image.fromarray(np.clip(a, 0, 255).astype(np.uint8), "L")

def salvar(img, nome):
    img = grao(img).convert("RGB")
    img.save(SAIDA + nome + ".jpg", quality=84, optimize=True, progressive=True)
    print(nome + ".jpg", img.size)

def onda(d, y, amp, fase, w, passo=24):
    pts = []
    for x in range(-passo, w + passo * 2, passo):
        pts.append((x, y + math.sin(x / w * math.pi * 2 + fase) * amp
                      + math.sin(x / w * 6.3 + fase * 1.7) * amp * 0.3))
    return pts

def duna(d, y, amp, fase, w, h, cor):
    pts = onda(d, y, amp, fase, w)
    d.polygon(pts + [(w + 50, h + 50), (-50, h + 50)], fill=cor)

def predios(d, x0, x1, base, alt_min, alt_max, cor, semente, janela=(220, 0.30), largura=(40, 95)):
    r = random.Random(semente)
    x = x0
    while x < x1:
        lw = r.randint(*largura)
        lh = r.randint(alt_min, alt_max)
        lw = min(lw, x1 - x)
        if lw < 12: break
        d.rectangle([x, base - lh, x + lw, base], fill=cor)
        jc, jp = janela
        for jy in range(int(base - lh) + 16, int(base) - 12, 22):
            for jx in range(x + 9, x + lw - 7, 14):
                if r.random() < jp:
                    d.rectangle([jx, jy, jx + 3, jy + 7], fill=jc)
        x += lw + r.randint(8, 22)

# ---------------------------------------------------------------- HERO
def hero():
    w, h = 2000, 1170
    arr = fundo(w, h, 118, 22)
    arr = brilho(arr, 1450, 390, 300, 70)
    img = para_img(arr); d = ImageDraw.Draw(img)
    predios(d, 1040, 2000, 740, 60, 270, 38, 3, (200, 0.32), (30, 70))
    arr = np.asarray(img).astype(np.float64)
    arr = bruma(arr, 470, 760, 26)
    img = para_img(arr); d = ImageDraw.Draw(img)
    duna(d, 760, 78, 0.3, w, h, 58)
    duna(d, 880, 104, 2.2, w, h, 34)
    duna(d, 1010, 76, 4.1, w, h, 15)
    salvar(img, "hero")

# ---------------------------------------------------------------- SOBRE
def sobre():
    w, h = 1050, 1400
    img = Image.new("L", (w, h), 26); d = ImageDraw.Draw(img)
    jx, jy, jw, jh = 95, 130, 860, 790
    vidro = para_img(brilho(fundo(jw, jh, 150, 78), jw * 0.7, jh * 0.22, 230, 55))
    dv = ImageDraw.Draw(vidro)
    predios(dv, 0, jw, jh, 150, 560, 62, 11, (215, 0.30), (42, 90))
    a = bruma(np.asarray(vidro).astype(np.float64), jh * 0.35, jh, 22)
    img.paste(para_img(a), (jx, jy))
    d = ImageDraw.Draw(img)
    for mx in (jx + jw // 3, jx + 2 * jw // 3):
        d.rectangle([mx, jy, mx + 7, jy + jh], fill=26)
    d.rectangle([jx - 12, jy - 12, jx + jw + 12, jy + jh + 12], outline=58, width=12)
    piso = jy + jh
    d.rectangle([0, piso + 96, w, piso + 100], fill=46)
    d.rounded_rectangle([110, piso + 150, 520, piso + 340], radius=8, fill=40)   # sofa
    d.rounded_rectangle([130, piso + 130, 500, piso + 170], radius=10, fill=52)
    d.rounded_rectangle([560, piso + 215, 720, piso + 330], radius=6, fill=36)   # mesa
    d.ellipse([820, piso + 150, 900, piso + 230], fill=48)                        # luminaria
    d.rectangle([856, piso + 190, 862, piso + 340], fill=44)
    salvar(img, "sobre")

# ------------------------------------------------------------ PROPOSITO
# silhueta de jato executivo em coordenadas proprias (nariz a esquerda)
FUSELAGEM = [(6, 66), (40, 52), (110, 45), (250, 43), (340, 46), (424, 30), (436, 40),
             (412, 62), (330, 72), (150, 76), (60, 76), (20, 72)]
DERIVA    = [(336, 48), (318, -22), (346, -24), (420, 36)]
ESTAB     = [(300, -20), (392, -30), (398, -18), (306, -8)]
ASA       = [(196, 70), (300, 122), (338, 120), (262, 66)]
ASA_FUNDO = [(206, 60), (120, 104), (156, 106), (250, 62)]

def desenhar_jato(d, dx, dy, esc, cor, trem=False):
    def p(pontos):
        return [(dx + x * esc, dy + y * esc) for (x, y) in pontos]
    d.polygon(p(ASA_FUNDO), fill=cor)
    d.polygon(p(FUSELAGEM), fill=cor)
    d.polygon(p(DERIVA), fill=cor)
    d.polygon(p(ESTAB), fill=cor)
    d.polygon(p(ASA), fill=cor)
    # motor junto a cauda
    d.ellipse(p([(330, 34), (398, 66)]), fill=cor)
    # janelas da cabine
    for i in range(7):
        jx = 150 + i * 26
        d.ellipse(p([(jx, 52), (jx + 11, 62)]), fill=170)
    d.polygon(p([(34, 56), (66, 48), (74, 58), (40, 62)]), fill=170)  # para-brisa
    if trem:
        for bx in (104, 268):
            d.rectangle(p([(bx, 74), (bx + 7, 104)]), fill=cor)
            d.ellipse(p([(bx - 9, 98), (bx + 16, 118)]), fill=cor)

def proposito():
    w, h = 2100, 900
    arr = fundo(w, h, 140, 34)
    arr = brilho(arr, 430, 560, 300, 85)
    img = para_img(arr); d = ImageDraw.Draw(img)
    d.rectangle([0, 612, w, h], fill=22)
    d.rectangle([0, 610, w, 613], fill=96)
    desenhar_jato(d, 1080, 300, 1.35, 10, trem=False)
    for i in range(8):
        d.rectangle([i * 260 + 60, 690, i * 260 + 170, 694], fill=54)
    arr = bruma(np.asarray(img).astype(np.float64), 470, 640, 20)
    salvar(para_img(arr), "proposito")

# ------------------------------------------------------------ CURADORIA
def curadoria_mobilidade():
    w, h = 1200, 900
    arr = brilho(fundo(w, h, 132, 30), 300, 280, 200, 78)
    img = para_img(arr); d = ImageDraw.Draw(img)
    d.rectangle([0, 600, w, h], fill=20)
    d.rectangle([0, 598, w, 601], fill=88)
    desenhar_jato(d, 300, 330, 1.25, 9, trem=True)
    for i in range(6):
        d.rectangle([i * 210 + 30, 700, i * 210 + 140, 704], fill=52)
    arr = bruma(np.asarray(img).astype(np.float64), 450, 620, 18)
    salvar(para_img(arr), "curadoria-mobilidade")

def curadoria_hospitalidade():
    w, h = 1200, 900
    arr = brilho(fundo(w, h, 92, 24), 1000, 160, 260, 44)
    img = para_img(arr); d = ImageDraw.Draw(img)
    r = random.Random(17)
    solo = 790
    # volumes em socalcos: torre central e duas alas mais baixas
    d.rectangle([252, 352, 336, solo], fill=21)
    d.rectangle([864, 306, 952, solo], fill=21)
    d.rectangle([336, 186, 864, solo], fill=27)
    # grade unica de janelas, com lajes horizontais separando os andares
    def andares(x0, x1, topo, tom):
        y = topo + 30
        while y < solo - 26:
            d.rectangle([x0 + 8, y + 24, x1 - 8, y + 28], fill=tom + 22)
            for jx in range(x0 + 18, x1 - 30, 46):
                aceso = r.random() < 0.24
                d.rectangle([jx, y, jx + 28, y + 20], fill=r.randint(150, 205) if aceso else tom + 12)
            y += 46
    andares(336, 864, 186, 27)
    andares(252, 336, 352, 21)
    andares(864, 952, 306, 21)
    # podio e marquise da entrada
    d.rectangle([196, solo, 1004, 862], fill=17)
    d.rectangle([168, solo - 10, 1032, solo], fill=58)
    d.rectangle([548, 806, 652, 862], fill=158)
    d.rectangle([0, 862, w, h], fill=12)
    # espelho d'agua: riscos claros na frente
    for i in range(6):
        d.rectangle([90 + i * 190, 880 + (i % 3) * 8, 210 + i * 190, 883 + (i % 3) * 8], fill=40)
    arr = bruma(np.asarray(img).astype(np.float64), 480, 780, 14)
    salvar(para_img(arr), "curadoria-hospitalidade")

def curadoria_acesso():
    w, h = 1200, 900
    img = Image.new("L", (w, h), 228); d = ImageDraw.Draw(img)
    d.rectangle([0, 0, w, 130], fill=242)
    d.rectangle([0, 700, w, h], fill=198)
    d.rectangle([0, 694, w, 700], fill=168)
    for i, (x, lw, lh) in enumerate([(120, 190, 250), (400, 150, 200), (640, 230, 300), (950, 140, 190)]):
        y = 250 + (i % 2) * 34
        d.rectangle([x, y, x + lw, y + lh], fill=252, outline=46, width=7)
        d.rectangle([x + 20, y + 20, x + lw - 20, y + lh - 20], fill=150)
    d.polygon([(300, 700), (302, 620), (318, 592), (300, 560), (306, 534), (334, 532),
               (346, 560), (338, 596), (352, 630), (356, 700)], fill=38)
    salvar(img, "curadoria-acesso")

# ------------------------------------------------------------- DESTINOS
def destino_dubai():
    w, h = 900, 1200
    arr = brilho(fundo(w, h, 126, 32), 620, 300, 190, 72)
    img = para_img(arr); d = ImageDraw.Draw(img)
    base = 980
    for (x, lw, lh) in [(40, 110, 400), (170, 82, 540), (280, 64, 720)]:
        d.rectangle([x, base - lh, x + lw, base], fill=26)
    d.polygon([(370, base), (370, base - 640), (430, base - 1010), (490, base - 640), (490, base)], fill=22)
    for (x, lw, lh) in [(520, 78, 610), (620, 100, 450), (750, 112, 360), (860, 60, 300)]:
        d.rectangle([x, base - lh, x + lw, base], fill=26)
    r = random.Random(4)
    for _ in range(900):
        x = r.randint(40, 900); y = r.randint(base - 700, base - 20)
        if img.getpixel((min(x, 899), y)) < 40 and r.random() < 0.5:
            d.rectangle([x, y, x + 2, y + 5], fill=r.randint(120, 200))
    d.rectangle([0, base, w, h], fill=16)
    arr = bruma(np.asarray(img).astype(np.float64), base - 300, base, 24)
    salvar(para_img(arr), "destino-dubai")

def destino_abu_dhabi():
    w, h = 900, 1200
    arr = brilho(fundo(w, h, 140, 40), 450, 420, 260, 50)
    img = para_img(arr); d = ImageDraw.Draw(img)
    d.rectangle([0, 820, w, h], fill=22)
    d.ellipse([280, 530, 620, 870], fill=36)
    d.ellipse([125, 655, 335, 865], fill=30)
    d.ellipse([565, 655, 775, 865], fill=30)
    d.rectangle([120, 760, 780, 905], fill=26)
    for i in range(6):
        x = 150 + i * 105
        d.pieslice([x, 796, x + 72, 868], 180, 360, fill=78)
        d.rectangle([x, 832, x + 72, 900], fill=78)
    for x in (146, 772):
        d.rectangle([x - 16, 470, x + 14, 900], fill=32)
        d.ellipse([x - 24, 438, x + 22, 484], fill=32)
    d.rectangle([0, 900, w, 940], fill=18)
    arr = bruma(np.asarray(img).astype(np.float64), 520, 820, 18)
    salvar(para_img(arr), "destino-abu-dhabi")

def destino_kyoto():
    w, h = 900, 1200
    arr = fundo(w, h, 150, 54)
    img = para_img(arr); d = ImageDraw.Draw(img)
    d.rectangle([0, 900, w, h], fill=28)
    px = 450
    for i, (lw, y) in enumerate([(300, 470), (252, 592), (204, 714), (156, 836)]):
        d.polygon([(px - lw / 2 - 44, y), (px - lw / 2 + 10, y - 48),
                   (px + lw / 2 - 10, y - 48), (px + lw / 2 + 44, y)], fill=19)
        d.rectangle([px - lw / 2 + 26, y, px + lw / 2 - 26, y + 74], fill=31)
    d.rectangle([px - 5, 362, px + 5, 424], fill=19)
    d.ellipse([px - 14, 348, px + 14, 376], fill=19)
    r = random.Random(9)
    for tx in (70, 165, 730, 830):
        d.rectangle([tx, 770, tx + 14, 910], fill=16)
        rr = r.randint(62, 90)
        d.ellipse([tx + 7 - rr, 730 - rr, tx + 7 + rr, 730 + rr], fill=20)
    arr = np.asarray(img).astype(np.float64)
    arr = bruma(arr, 600, 880, 26)
    arr = bruma(arr, 300, 520, 14)
    salvar(para_img(arr), "destino-kyoto")

def destino_como():
    w, h = 900, 1200
    arr = fundo(w, h, 158, 62)
    img = para_img(arr); d = ImageDraw.Draw(img)
    d.polygon([(0, 780), (0, 700), (140, 470), (300, 610), (430, 370), (600, 560),
               (760, 430), (900, 600), (900, 780)], fill=84)
    arr = bruma(np.asarray(img).astype(np.float64), 470, 700, 22)
    img = para_img(arr); d = ImageDraw.Draw(img)
    d.polygon([(0, 810), (0, 762), (180, 600), (360, 700), (520, 556), (700, 680),
               (900, 620), (900, 810)], fill=46)
    d.rectangle([330, 700, 560, 800], fill=26)
    d.polygon([(316, 702), (445, 632), (574, 702)], fill=17)
    for i in range(4):
        d.rectangle([352 + i * 52, 726, 378 + i * 52, 768], fill=104)
    d.rectangle([0, 800, w, h], fill=27)
    r = random.Random(2)
    for i in range(9):
        y = 830 + i * 38
        x = r.randint(20, 400)
        d.rectangle([x, y, x + r.randint(90, 180), y + 3], fill=64)
    d.polygon([(600, 1040), (700, 1040), (684, 1068), (616, 1068)], fill=15)
    d.rectangle([644, 1006, 648, 1040], fill=15)
    arr = bruma(np.asarray(img).astype(np.float64), 640, 810, 16)
    salvar(para_img(arr), "destino-como")

def destino_patagonia():
    w, h = 900, 1200
    arr = fundo(w, h, 172, 74)
    img = para_img(arr); d = ImageDraw.Draw(img)
    d.polygon([(0, 900), (0, 820), (120, 560), (230, 700), (360, 290), (520, 620),
               (650, 410), (780, 640), (900, 540), (900, 900)], fill=66)
    d.polygon([(360, 290), (300, 400), (340, 392), (372, 430), (404, 380), (430, 396)], fill=196)
    d.polygon([(650, 410), (610, 486), (640, 480), (664, 508), (690, 470)], fill=182)
    arr = bruma(np.asarray(img).astype(np.float64), 540, 760, 30)
    img = para_img(arr); d = ImageDraw.Draw(img)
    d.polygon([(0, 980), (0, 880), (150, 720), (300, 820), (470, 640), (640, 800),
               (800, 700), (900, 780), (900, 980)], fill=34)
    arr = bruma(np.asarray(img).astype(np.float64), 790, 960, 22)
    img = para_img(arr); d = ImageDraw.Draw(img)
    d.rectangle([0, 960, w, h], fill=22)
    r = random.Random(6)
    for i in range(8):
        y = 990 + i * 26
        x = r.randint(10, 500)
        d.rectangle([x, y, x + r.randint(70, 150), y + 3], fill=58)
    salvar(img, "destino-patagonia")

for fn in (hero, sobre, proposito, curadoria_mobilidade, curadoria_hospitalidade,
           curadoria_acesso, destino_dubai, destino_abu_dhabi, destino_kyoto,
           destino_como, destino_patagonia):
    fn()
