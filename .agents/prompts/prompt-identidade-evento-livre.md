Você é um diretor de arte e estrategista de branding. Crie um **manual-protótipo de identidade visual** para a marca **Evento Livre**, apresentado como um mini-brandbook visual: um layout diagramado, com blocos de cor, amostras tipográficas e textos curtos. O manual deve conter, nesta ordem: (1) descrição da empresa e posicionamento, (2) conceito do símbolo, (3) paleta de cores, (4) sistema tipográfico e (5) tom de voz.

## Contexto e posicionamento da marca

Evento Livre é uma plataforma **SaaS de ticketing e gestão de eventos**, com foco **B2B** (organizadores) e presença **B2C** no momento da portaria. A essência da marca é o **empoderamento operacional**: o significante "Livre" não denota gratuidade, e sim **autonomia e ausência de fricção** — a promessa de *controle sem esforço* para quem produz o evento.

O território de marca conversa com o registro de **fintech / infraestrutura** (sólido, preciso, confiável), porém **humanizado** pelo principal diferencial competitivo: **suporte próximo**. A persona-alvo são produtores e casas de eventos que querem previsibilidade e relacionamento — cansados de plataformas impessoais. O posicionamento se afasta deliberadamente da estética "balada colorida" usada por boa parte do mercado de ticketing.

## Conceito do símbolo (racional semiótico)

O ícone da marca é uma **mão segurando um smartphone** cuja tela exibe um grafismo semelhante a um **QR code**, no **ato de validar um ingresso na portaria** de um evento. Explore este signo em três camadas peircianas:

- **Ícone:** a cena reconhecível da entrada / do acesso.
- **Índice:** o gesto aponta para o **momento-verdade** do acesso — o instante em que o "fora" vira "dentro".
- **Símbolo:** o QR como **passe/chave** e prova de confiança; a **mão** como agência humana, conotando o *suporte próximo* que diferencia a marca.

Trate o momento de validação — o "check" de aprovado — como o **brand moment** central, o ponto de contato que sintetiza a proposta de valor.

## Paleta de cores

Construa a partir de um **azul primário profundo** (confiança, estabilidade, tecnologia). Evite o azul-corporativo genérico e saturado; busque um tom **denso e maduro**. Complemente com:

- Uma família de **neutros** (grafite e off-white) para sustentar o rigor de interface e o espaço em branco.
- **Um acento de validação:** um **verde/ciano de "aprovado"** que traduz cromaticamente o instante do QR validado na portaria — amarrando cor e símbolo num só gesto.

Para cada cor, indique **código hex**, papel no sistema (primária / secundária / apoio / acento) e a **conotação** pretendida.

## Sistema tipográfico

Proponha um **par tipográfico**:

- **Títulos:** uma **grotesca humanista** — confiança com calor, coerente com o "suporte próximo".
- **Corpo e UI:** uma **sans de interface** altamente legível, adequada a um produto SaaS.

Apresente a **escala e a hierarquia** (display, título, corpo, legenda), com amostras reais e observações de peso e tracking.

## Tom de voz

Direto, seguro e **sem jargão intimidador**; próximo e prestativo, como um parceiro que resolve. Traga **3–4 princípios de voz** com exemplos curtos de "fala assim / não fala assim".

## Direção estética geral

Minimalista, escalável, com uso generoso de espaço em branco e **grid** consistente. O resultado deve ser um **layout visual coeso**, pronto para servir de protótipo do brandbook.

## Formato e requisitos técnicos do entregável

Entregue o manual como uma **página web navegável** (um brandbook interativo), com estas restrições:

- **Stack:** HTML, CSS e JavaScript **puros (vanilla)** — **sem bibliotecas nem frameworks** (nada de React, Tailwind, Bootstrap, jQuery etc.). Todo o estilo em CSS próprio; toda a interatividade em JS nativo.
- **Ilustrações:** use **desenhos vetoriais em SVG** inline para o símbolo da marca (a mão + smartphone + QR na portaria), ícones e qualquer grafismo — nada de imagens rasterizadas (PNG/JPG). Os vetores devem ser limpos, escaláveis e coerentes com a direção de arte.
- **Estrutura e navegação:** organize o manual em seções ancoradas (descrição, símbolo, cores, tipografia, tom de voz), com navegação suave entre elas.
- **Micro-interações:** empregue JS nativo para pequenos toques funcionais que reforcem o conceito — por exemplo, **clicar numa amostra de cor para copiar o hex**, ou uma animação sutil do "check de validação" no símbolo (o brand moment).
- **Responsividade:** layout fluido, legível de desktop a mobile, usando CSS Grid/Flexbox.
- **Autocontido:** de preferência num único arquivo `.html` (CSS e JS embutidos), fácil de abrir e prototipar.
