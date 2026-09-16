/* =========================================================================
   ALTIORA — TRADUCOES.JS

   Todo o texto visível do site vive aqui, em dois idiomas.
   No index.html cada elemento aponta para uma chave deste dicionário
   (ex.: data-i18n="hero.titulo").

   COMO EDITAR UM TEXTO DO SITE:
     1. localize a chave em "pt" e altere o texto em português;
     2. altere a MESMA chave em "en" com a versão em inglês.
   As duas listas precisam ter exatamente as mesmas chaves.

   COMO ACRESCENTAR UM TEXTO NOVO:
     1. crie a chave nos dois idiomas abaixo;
     2. no HTML, escreva data-i18n="nomeDaSecao.nomeDaChave" no elemento.
   ========================================================================= */

var TRADUCOES = {

  /* ======================= PORTUGUÊS ======================= */
  pt: {
    /* Código do idioma aplicado na tag <html> */
    'idioma.codigo': 'pt-BR',

    /* Título e descrição da aba do navegador / buscadores */
    'meta.titulo': 'ALTIORA — A arte da jornada refinada',
    'meta.descricao': 'A ALTIORA orquestra encontros privados com a essência de cada destino. Turismo de alto padrão, logística invisível e curadoria sem concessões.',

    'acessibilidade.pular': 'Ir para o conteúdo',

    /* Navegação */
    'nav.sobre': 'Sobre nós',
    'nav.proposito': 'Propósito',
    'nav.curadoria': 'Curadoria',
    'nav.destinos': 'Destinos',
    'nav.clientes': 'Clientes',
    'nav.equipe': 'Conselho',
    'nav.contato': 'Contato',

    'idioma.grupo': 'Idioma do site',
    'menu.abrir': 'Abrir menu',
    'menu.fechar': 'Fechar menu',

    /* Topo */
    'hero.abertura': 'Turismo de alto padrão',
    'hero.titulo': 'A arte da<br>jornada refinada.',
    'hero.texto': 'Não desenhamos roteiros de turismo. Orquestramos encontros privados com a essência de cada destino.',
    'hero.botao': 'Conheça a ALTIORA',
    'hero.descer': 'Explorar',
    'hero.descerAria': 'Ir para a próxima seção',

    /* Sobre nós */
    'sobre.rotulo': 'Sobre nós',
    'sobre.titulo': 'A arte da jornada refinada.',
    'sobre.p1': 'A ALTIORA nasce para aqueles que já conquistaram o mundo e agora buscam apenas a raridade do tempo bem vivido. Não desenhamos roteiros de turismo; orquestramos encontros privados com a essência de cada destino.',
    'sobre.p2': 'Viajar em seu nível mais alto é uma forma de arte. É a garantia de que cada segundo da sua jornada transcorra com absoluta fluidez, sob uma logística invisível e impecável. Do instante do embarque aos momentos de contemplação nas arquiteturas de Dubai e Abu Dhabi, nossa presença se revela na perfeição dos detalhes e na privacidade preservada.',
    'sobre.p3': 'Para a ALTIORA, a verdadeira sofisticação não precisa se anunciar. Ela se revela na exclusividade do acesso, no conforto sem concessões e na criação de memórias que pertencem unicamente a você.',
    'sobre.imagemAlt': 'Interior de uma suíte com vista ampla para a cidade',
    'sobre.imagemRotulo': 'Suíte panorâmica',

    /* Propósito */
    'proposito.rotulo': 'Nosso propósito',
    'proposito.titulo': 'Preservar a perfeição em cada instante.',
    'proposito.p1': 'O propósito da ALTIORA é blindar a experiência do viajante, garantindo que o mundo exterior e seus atritos não interfiram na jornada. Elevamos o padrão do turismo de alto padrão, transformando o ato de viajar em um estado de contemplação.',
    'proposito.p2': 'Orquestramos uma logística invisível, em que cada parceiro — da aviação executiva à hospitalidade cinco estrelas — opera em sintonia com o rigor da nossa curadoria. O cliente sente que cada aspecto da viagem foi coreografado para ele, e sua única tarefa é absorver a essência do destino.',
    'proposito.imagemAlt': 'Interior de uma aeronave executiva ao amanhecer',
    'proposito.imagemRotulo': 'Voo privado ao amanhecer',

    /* Curadoria */
    'curadoria.rotulo': 'A filosofia de curadoria',
    'curadoria.titulo': 'O rigor na escolha do extraordinário.',
    'curadoria.intro': 'A exclusividade não está na quantidade de opções, mas na precisão da seleção. Cada parceiro e cada detalhe dos nossos itinerários passam por um escrutínio obsessivo. Se não representa o ápice em conforto, segurança e herança, não entra na nossa coleção.',
    'curadoria.p1Titulo': 'A fluidez na mobilidade',
    'curadoria.p1Texto': 'Trabalhamos apenas com parceiros de aviação e transporte executivo que tratam o deslocamento como descanso: privacidade, pontualidade e nenhum atrito logístico.',
    'curadoria.p1ImagemAlt': 'Jato executivo em pista ao entardecer',
    'curadoria.p1ImagemRotulo': 'Aviação executiva',
    'curadoria.p2Titulo': 'A hospitalidade como destino',
    'curadoria.p2Texto': 'Nossas propriedades parceiras são escolhidas pelo serviço intuitivo, pela arquitetura e por uma atmosfera em que a privacidade do hóspede é tratada como regra, não como pedido.',
    'curadoria.p2ImagemAlt': 'Fachada de hotel de arquitetura icônica',
    'curadoria.p2ImagemRotulo': 'Hotelaria icônica',
    'curadoria.p3Titulo': 'O acesso ao inigualável',
    'curadoria.p3Texto': 'Priorizamos experiências de conexão autêntica com o destino: portas que não abrem por reserva, horários que não constam em agenda pública, encontros que não se repetem.',
    'curadoria.p3ImagemAlt': 'Visita privada a um salão de arte',
    'curadoria.p3ImagemRotulo': 'Acesso privado',

    /* Destinos */
    'destinos.rotulo': 'Destinos',
    'destinos.titulo': 'Onde a ALTIORA opera hoje.',
    'destinos.anterior': 'Ver destino anterior',
    'destinos.proximo': 'Ver próximo destino',
    'destinos.galeriaAria': 'Galeria de destinos',
    'destinos.d1': 'Dubai',
    'destinos.d1Texto': 'Arquitetura vertical, deserto privado e jantares em terraços fechados ao público.',
    'destinos.d1Alt': 'Skyline de Dubai ao anoitecer',
    'destinos.d2': 'Abu Dhabi',
    'destinos.d2Texto': 'Coleções de arte visitadas fora do horário e ilhas com acesso restrito a hóspedes.',
    'destinos.d2Alt': 'Arquitetura contemporânea em Abu Dhabi',
    'destinos.d3': 'Kyoto',
    'destinos.d3Texto': 'Cerimônias conduzidas por mestres em casas que não recebem visitantes.',
    'destinos.d3Alt': 'Jardim tradicional japonês em Kyoto',
    'destinos.d4': 'Lago de Como',
    'destinos.d4Texto': 'Villas históricas alugadas por temporada, com equipe e embarcação próprias.',
    'destinos.d4Alt': 'Villa às margens do Lago de Como',
    'destinos.d5': 'Patagônia',
    'destinos.d5Texto': 'Refúgios isolados com aproximação por helicóptero e guias exclusivos.',
    'destinos.d5Alt': 'Montanhas da Patagônia sob neblina',

    /* Clientes (textos fictícios — substituir antes de publicar) */
    'clientes.rotulo': 'Clientes',
    'clientes.titulo': 'O que dizem quem já viajou conosco.',
    'clientes.c1Texto': 'Viajo doze semanas por ano e nunca tive de pensar em logística uma única vez com a ALTIORA. É a primeira vez que chego a uma reunião descansado.',
    'clientes.c1Nome': 'Helena Marchetti',
    'clientes.c1Cargo': 'Presidente de um family office · Milão',
    'clientes.c2Texto': 'Contratamos discrição e recebemos discrição. Nenhuma agenda vazou, nenhum detalhe foi terceirizado sem que soubéssemos exatamente para quem.',
    'clientes.c2Nome': 'Konstantin Reuter',
    'clientes.c2Cargo': 'Fundador de um grupo de tecnologia · Zurique',
    'clientes.c3Texto': 'Abriram para nós uma coleção particular que eu tentava visitar havia seis anos. O acesso não se compra; se constrói com relacionamento.',
    'clientes.c3Nome': 'Amira Al-Farsi',
    'clientes.c3Cargo': 'Colecionadora e conselheira de arte · Abu Dhabi',
    'clientes.c4Texto': 'Mudamos o roteiro inteiro em pleno voo por uma questão de família. Em duas horas estava tudo refeito, sem que ninguém a bordo percebesse.',
    'clientes.c4Nome': 'Thomas Lindqvist',
    'clientes.c4Cargo': 'Diretor-geral de um grupo naval · Estocolmo',
    'clientes.aviso': 'Depoimentos ilustrativos. Substituir por relatos reais e autorizados antes da publicação.',

    /* Conselho executivo */
    'equipe.rotulo': 'Conselho executivo',
    'equipe.titulo': 'Quem conduz a ALTIORA.',
    'equipe.m1Cargo': 'Chief Executive Officer & Managing Director',
    'equipe.m1Bio': 'Erick detém a visão estratégica e a responsabilidade final pela integridade da marca. Supervisiona as operações globais e as parcerias de alto nível, garantindo que o rigor da Maison seja aplicado sem concessões em cada etapa da jornada.',
    'equipe.m1Alt': 'Retrato de Erick',
    'equipe.m2Cargo': 'Chief Technology Officer & Digital Experience',
    'equipe.m2Bio': 'Matheus é o arquiteto do ecossistema digital e da segurança da informação da ALTIORA. Orquestra a infraestrutura de reservas e comunicações para que a jornada digital seja tão fluida e segura quanto a experiência física.',
    'equipe.m2Alt': 'Retrato de Matheus',
    'equipe.m3Cargo': 'Chief Marketing Officer & Brand Director',
    'equipe.m3Bio': 'Vagner lidera a direção criativa, o posicionamento de mercado e a comunicação de prestígio. É o guardião da identidade visual e conceitual da marca em cada ponto de contato.',
    'equipe.m3Alt': 'Retrato de Vagner',

    /* Contato e rodapé */
    'contato.rotulo': 'Contato',
    'contato.titulo': 'Sua jornada extraordinária<br>começa com uma conversa.',
    'contato.texto': 'Atendemos um número limitado de clientes por temporada. Escreva e um de nossos curadores responde em até 24 horas.',
    'rodape.direitos': 'Todos os direitos reservados.',
    'rodape.navAria': 'Navegação do rodapé'
  },

  /* ========================= INGLÊS ========================= */
  en: {
    'idioma.codigo': 'en',

    'meta.titulo': 'ALTIORA — The art of the refined journey',
    'meta.descricao': 'ALTIORA arranges private encounters with the essence of each destination. High-end travel, invisible logistics and curation without compromise.',

    'acessibilidade.pular': 'Skip to content',

    'nav.sobre': 'About us',
    'nav.proposito': 'Purpose',
    'nav.curadoria': 'Curation',
    'nav.destinos': 'Destinations',
    'nav.clientes': 'Clients',
    'nav.equipe': 'Board',
    'nav.contato': 'Contact',

    'idioma.grupo': 'Site language',
    'menu.abrir': 'Open menu',
    'menu.fechar': 'Close menu',

    'hero.abertura': 'High-end travel',
    'hero.titulo': 'The art of the<br>refined journey.',
    'hero.texto': 'We do not design tourist itineraries. We arrange private encounters with the essence of each destination.',
    'hero.botao': 'Discover ALTIORA',
    'hero.descer': 'Explore',
    'hero.descerAria': 'Go to the next section',

    'sobre.rotulo': 'About us',
    'sobre.titulo': 'The art of the refined journey.',
    'sobre.p1': 'ALTIORA exists for those who have already conquered the world and now seek only the rarity of time well spent. We do not design tourist itineraries; we arrange private encounters with the essence of each destination.',
    'sobre.p2': 'Travelling at its highest level is an art form. It is the certainty that every second of your journey unfolds with absolute ease, under impeccable and invisible logistics. From the moment you board to the quiet hours spent among the architecture of Dubai and Abu Dhabi, our presence shows in the precision of the details and in the privacy we protect.',
    'sobre.p3': 'For ALTIORA, true sophistication never needs to announce itself. It reveals itself in the exclusivity of access, in comfort without compromise, and in memories that belong to you alone.',
    'sobre.imagemAlt': 'Interior of a suite with a wide view over the city',
    'sobre.imagemRotulo': 'Panoramic suite',

    'proposito.rotulo': 'Our purpose',
    'proposito.titulo': 'Preserving perfection in every moment.',
    'proposito.p1': 'ALTIORA exists to shield the traveller, making sure the outside world and its friction never reach the journey. We raise the standard of high-end travel, turning the act of travelling into a state of contemplation.',
    'proposito.p2': 'We orchestrate invisible logistics, where every partner — from executive aviation to five-star hospitality — works in step with the rigour of our curation. The client feels that every aspect of the trip was choreographed for them, leaving one task only: to absorb the destination.',
    'proposito.imagemAlt': 'Cabin of a private aircraft at dawn',
    'proposito.imagemRotulo': 'Private flight at dawn',

    'curadoria.rotulo': 'Our curation philosophy',
    'curadoria.titulo': 'Rigour in choosing the extraordinary.',
    'curadoria.intro': 'Exclusivity is not a matter of how many options exist, but of how precisely they are chosen. Every partner and every detail of our itineraries goes through obsessive scrutiny. If it is not the peak of comfort, safety and heritage, it does not enter our collection.',
    'curadoria.p1Titulo': 'Effortless mobility',
    'curadoria.p1Texto': 'We work only with aviation and executive transport partners who treat movement as rest: privacy, punctuality and no logistical friction.',
    'curadoria.p1ImagemAlt': 'Private jet on the runway at dusk',
    'curadoria.p1ImagemRotulo': 'Executive aviation',
    'curadoria.p2Titulo': 'Hospitality as a destination',
    'curadoria.p2Texto': 'Our partner properties are chosen for intuitive service, for their architecture, and for an atmosphere where guest privacy is the rule rather than a request.',
    'curadoria.p2ImagemAlt': 'Façade of a hotel with iconic architecture',
    'curadoria.p2ImagemRotulo': 'Iconic hospitality',
    'curadoria.p3Titulo': 'Access to the unmatched',
    'curadoria.p3Texto': 'We favour experiences with an authentic connection to the destination: doors that do not open by reservation, hours that appear on no public schedule, encounters that do not repeat.',
    'curadoria.p3ImagemAlt': 'Private visit to an art gallery',
    'curadoria.p3ImagemRotulo': 'Private access',

    'destinos.rotulo': 'Destinations',
    'destinos.titulo': 'Where ALTIORA operates today.',
    'destinos.anterior': 'View previous destination',
    'destinos.proximo': 'View next destination',
    'destinos.galeriaAria': 'Destination gallery',
    'destinos.d1': 'Dubai',
    'destinos.d1Texto': 'Vertical architecture, private desert and dinners on terraces closed to the public.',
    'destinos.d1Alt': 'Dubai skyline at nightfall',
    'destinos.d2': 'Abu Dhabi',
    'destinos.d2Texto': 'Art collections seen outside opening hours and islands reserved for guests.',
    'destinos.d2Alt': 'Contemporary architecture in Abu Dhabi',
    'destinos.d3': 'Kyoto',
    'destinos.d3Texto': 'Ceremonies led by masters in houses that receive no visitors.',
    'destinos.d3Alt': 'Traditional Japanese garden in Kyoto',
    'destinos.d4': 'Lake Como',
    'destinos.d4Texto': 'Historic villas taken for the season, with their own staff and boat.',
    'destinos.d4Alt': 'Villa on the shore of Lake Como',
    'destinos.d5': 'Patagonia',
    'destinos.d5Texto': 'Remote lodges reached by helicopter, with guides reserved for you alone.',
    'destinos.d5Alt': 'Patagonian mountains under mist',

    'clientes.rotulo': 'Clients',
    'clientes.titulo': 'What our travellers say.',
    'clientes.c1Texto': 'I travel twelve weeks a year and with ALTIORA I have never once had to think about logistics. For the first time I arrive at a meeting rested.',
    'clientes.c1Nome': 'Helena Marchetti',
    'clientes.c1Cargo': 'Family office president · Milan',
    'clientes.c2Texto': 'We asked for discretion and we were given discretion. No schedule leaked, and nothing was outsourced without us knowing exactly to whom.',
    'clientes.c2Nome': 'Konstantin Reuter',
    'clientes.c2Cargo': 'Technology group founder · Zurich',
    'clientes.c3Texto': 'They opened a private collection I had been trying to visit for six years. Access is not bought; it is built through relationships.',
    'clientes.c3Nome': 'Amira Al-Farsi',
    'clientes.c3Cargo': 'Collector and art adviser · Abu Dhabi',
    'clientes.c4Texto': 'We changed the entire itinerary mid-flight for a family matter. Within two hours everything was rebuilt, and no one on board noticed.',
    'clientes.c4Nome': 'Thomas Lindqvist',
    'clientes.c4Cargo': 'Managing director, shipping group · Stockholm',
    'clientes.aviso': 'Illustrative testimonials. Replace with real, authorised statements before publishing.',

    'equipe.rotulo': 'Executive board',
    'equipe.titulo': 'Who leads ALTIORA.',
    'equipe.m1Cargo': 'Chief Executive Officer & Managing Director',
    'equipe.m1Bio': 'Erick holds the strategic vision and final responsibility for the integrity of the brand. He oversees global operations and senior partnerships, making sure the rigour of the Maison is applied without compromise at every stage of the journey.',
    'equipe.m1Alt': 'Portrait of Erick',
    'equipe.m2Cargo': 'Chief Technology Officer & Digital Experience',
    'equipe.m2Bio': 'Matheus is the architect of ALTIORA\u2019s digital ecosystem and information security. He runs the booking and communications infrastructure so that the digital journey is as smooth and secure as the physical one.',
    'equipe.m2Alt': 'Portrait of Matheus',
    'equipe.m3Cargo': 'Chief Marketing Officer & Brand Director',
    'equipe.m3Bio': 'Vagner leads creative direction, market positioning and prestige communications. He is the guardian of the visual and conceptual identity of the brand at every point of contact.',
    'equipe.m3Alt': 'Portrait of Vagner',

    'contato.rotulo': 'Contact',
    'contato.titulo': 'Your extraordinary journey<br>begins with a conversation.',
    'contato.texto': 'We take on a limited number of clients each season. Write to us and one of our curators replies within 24 hours.',
    'rodape.direitos': 'All rights reserved.',
    'rodape.navAria': 'Footer navigation'
  }

};
