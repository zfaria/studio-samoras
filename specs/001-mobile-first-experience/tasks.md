# Tasks 001 — Mobile-First

Checklist derivado de [`plan.md`](plan.md). Ordem não implica prioridade estrita, mas os itens `Pendente` no topo de cada grupo são os de maior impacto.

## Estrutura e navegação — Feito

- [x] Layout mobile em coluna única como base em todas as seções.
- [x] Menu hambúrguer + drawer abaixo de `lg` (1024px) no [Header](../../src/components/Header.tsx).
- [x] Barra de ações fixa (Agendar + WhatsApp) visível só no mobile, com CTA de agendamento sempre a um toque de distância.
- [x] Botão flutuante de WhatsApp em telas ≥ `sm`.

## Acessibilidade — Feito nesta rodada

- [x] Link "Pular para o conteúdo" (skip-link) adicionado em `App.tsx`.
- [x] `aria-label` em todos os botões/links somente-ícone já existentes.

## PWA / instalação — Feito nesta rodada

- [x] `viewport-fit=cover` + `theme-color` + `<link rel="manifest">` em `index.html`.
- [x] `public/site.webmanifest` criado.
- [x] `public/robots.txt` criado.
- [x] `env(safe-area-inset-bottom)` aplicado na barra fixa mobile para não colidir com o home indicator do iOS.

## Limpeza de repositório — Feito nesta rodada

- [x] Removida pasta `src/assets/images` (duplicata exata e não utilizada de `public/images`, ~1,5MB).
- [x] Removido `public/images/lilian molica.png` (duplicata não referenciada de `lilian-molica.png`).
- [x] Removidas dependências não usadas (`@google/genai`, `express`, `dotenv`, `@types/express`, `motion`) e arquivos de scaffold do AI Studio (`metadata.json`, `.env.example`) sem uso real no código.
- [x] `package.json` renomeado de `react-example` para `studio-samoras`.

## Pendente — Performance de imagens

- [ ] Gerar versões WebP/AVIF das imagens em `public/images/` e servir via `<picture>` ou `srcset`.
- [ ] Substituir `public/logo.jpg` (~560KB) por uma versão otimizada (PNG/WebP com fundo transparente, < 50KB) para uso como favicon/ícone.
- [ ] Adicionar ícones dedicados do manifest em 192×192 e 512×512 (hoje reaproveita `logo.jpg` diretamente).
- [ ] Avaliar `srcset`/tamanhos responsivos para as imagens de galeria e reviews, hoje sempre na resolução original.

## Pendente — Qualidade e verificação

- [ ] Rodar Lighthouse Mobile e registrar baseline de performance/acessibilidade/SEO.
- [ ] Testar em dispositivo real iOS (Safari) o comportamento de `env(safe-area-inset-bottom)` na barra fixa.
- [ ] Configurar checagem automática (CI) de `npm run lint` (`tsc --noEmit`) em pull requests.

## Pendente — Conteúdo futuro

- [ ] Caso o site ganhe mais páginas/rotas, criar `specs/002-.../` para cada nova feature, seguindo o mesmo padrão spec → plan → tasks.
