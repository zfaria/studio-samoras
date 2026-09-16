# Plan 001 — Como implementamos mobile-first

## Stack

- **React 19 + Vite 6** — SPA estática, sem SSR.
- **Tailwind CSS v4** (via `@tailwindcss/vite`), configurado em [`src/index.css`](../../src/index.css) com `@theme` (tokens de cor/fonte customizados, sem `tailwind.config.js`).
- **lucide-react** para ícones (sem sprites customizados).

## Escala de breakpoints (Tailwind padrão, usada em todo o projeto)

| Prefixo | Min-width | Uso no projeto |
|---|---|---|
| _(nenhum)_ | 0px | Estilo base — sempre o layout mobile |
| `sm:` | 640px | Celular grande / transição para 2 colunas |
| `md:` | 768px | Tablet — grids de 2/3 colunas, espaçamentos maiores |
| `lg:` | 1024px | Desktop — grids de até 4 colunas nas seções |
| `xl:` | 1280px | Cabeçalho — menu horizontal completo substitui o hambúrguer |
| `2xl:` | 1536px | Cabeçalho — selo de status "aberto/fechado agora" |

Regra de escrita de classes: **sempre declarar o estado mobile sem prefixo primeiro**, depois `sm:`/`md:`/`lg:`/`xl:`/`2xl:` na mesma linha, nessa ordem. Não pular direto para um prefixo grande sem definir o comportamento mobile.

## Padrões de componente

- **Header** ([`src/components/Header.tsx`](../../src/components/Header.tsx)): navegação horizontal escondida (`hidden xl:flex`) até `xl`; abaixo disso, botão hambúrguer + drawer `xl:hidden` (`isMobileMenuOpen`). O WhatsApp compacto da faixa mobile é `md:hidden`, para não duplicar o ícone que já existe no bloco de ações entre 768 e 1280px. O link da seção visível é destacado em tempo real durante a rolagem (`activeSection` + `aria-current`), tanto no menu horizontal quanto na gaveta.
- **Barra de ações fixa mobile** ([`src/components/FloatingActions.tsx`](../../src/components/FloatingActions.tsx)): `fixed bottom-0`, visível apenas `sm:hidden` (ou seja, só abaixo de 640px); usa `env(safe-area-inset-bottom)` via `style` inline (Tailwind v4 ainda não tem utilitário nativo estável para safe-area) para não colidir com o home indicator do iOS. O botão flutuante de WhatsApp (`aside`) assume esse papel a partir de `sm:`.
- **Rodapé** ([`src/components/Footer.tsx`](../../src/components/Footer.tsx)): `pb-24` no mobile para abrir espaço físico acima da barra fixa; `md:pb-12` quando a barra não existe mais.
- **Grids de conteúdo** (Services, GoogleReviews, LocationAndSchedule): `grid-cols-1` como base, expandindo com `sm:grid-cols-2`, `md:grid-cols-3`, `lg:grid-cols-4` conforme a densidade de conteúdo da seção.
- **Imagens**: contêiner com `aspect-*` fixo (`aspect-4/5`, `aspect-4/3`, etc.) para reservar espaço e evitar CLS; `loading="lazy"` em toda imagem fora da dobra inicial; a imagem do Hero usa `loading="eager"` + `fetchPriority="high"` por ser o LCP (Largest Contentful Paint) da página.

## PWA / instalável

- `index.html` inclui `<meta name="viewport" content="... viewport-fit=cover">` (permite `env(safe-area-inset-*)`), `<meta name="theme-color">` e `<link rel="manifest">`.
- `public/site.webmanifest` define nome, cores e ícone a partir do logo existente (`/logo.jpg`).

## Acessibilidade

- Link "Pular para o conteúdo" no topo de [`src/App.tsx`](../../src/App.tsx), visível apenas em foco (`sr-only focus:not-sr-only`).
- Todo link/botão apenas com ícone tem `aria-label`.
- `#main-content` como alvo do skip-link e landmark `<main>`.

## Decisões não óbvias (não desfazer sem ler)

- **A barra fixa do cabeçalho usa `max-w-[90rem]`, enquanto as seções usam `max-w-7xl`.** É intencional. Com marca + 7 links + selo + 2 ícones + CTA, o conteúdo do cabeçalho passa de 1300px; preso em `max-w-7xl`, ele estourava o contêiner e o `overflow-x: hidden` do `body` **cortava o botão "Agende seu horário" sem gerar rolagem horizontal** — quebrava em silêncio. Alinhar a barra às seções reintroduz o corte.
- **O menu horizontal só aparece em `xl` (1280px), não em `lg`.** Mesmo motivo: entre 1024 e 1279px não há largura para o menu completo sem sacrificar o CTA, então o hambúrguer assume.
- **A seção ativa é detectada por posição de rolagem, não por `IntersectionObserver`.** `#horarios` é um card *dentro* de `#localizacao`; com observers as duas disputariam a marcação. A regra: vence a última seção cujo topo já passou pela barra fixa.
- **O gradiente do Instagram vive em `.bg-instagram` ([`src/index.css`](../../src/index.css))**, com as paradas quentes comprimidas entre 0% e 34% para o texto branco cair sobre a faixa rosa/roxa — branco sobre o amarelo `#ffdc80` não tem contraste suficiente.
- **A busca do mapa vem de `maps.embedQuery` ([`business.ts`](../../src/data/business.ts)) e é pelo nome do negócio**, não pelo endereço. Buscando por endereço, o Google usava o logradouro como título e repetia o endereço completo no subtítulo do próprio cartão.

## Orçamento de performance (referência, não enforced por CI ainda)

- LCP mobile alvo: < 2.5s em 4G simulado.
- Nenhuma imagem acima de ~200KB deveria ser carregada sem `loading="lazy"` (exceção: hero).
- Total de imagens na pasta `public/images` deve refletir apenas arquivos realmente referenciados em `src/data/business.ts` ou componentes — sem duplicatas (ver auditoria em `tasks.md`).

## Riscos conhecidos / dívida técnica

- Imagens em `public/images` estão em JPG/PNG sem versão WebP/AVIF nem `srcset` — maior risco de performance mobile hoje.
- `public/logo.jpg` tem ~560KB e é reusado como favicon, apple-touch-icon e ícone do manifest — pesado para esses usos.
- Não há verificação automatizada (CI/Lighthouse) do orçamento de performance acima.
