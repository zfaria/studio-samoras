# CLAUDE.md

Guia de contexto para o Claude Code (ou qualquer agente de IA) trabalhar neste repositório.

## O que é este projeto

Landing page institucional de página única (SPA estática) do **Studio Samora's**, um estúdio de manicure e pedicure em Suzano - SP. Não há backend, banco de dados ou autenticação — é um site de apresentação/conversão que direciona visitantes para WhatsApp, Instagram e um sistema de agendamento externo (Agenda Beauty).

O site é **mobile-first por princípio de projeto**, não apenas responsivo. Antes de qualquer alteração de layout, leia [`specs/001-mobile-first-experience/spec.md`](specs/001-mobile-first-experience/spec.md).

## Stack técnica

- **React 19** + **Vite 6** (SPA, sem SSR/roteamento — tudo em uma única página com âncoras `#id`)
- **TypeScript** (`tsc --noEmit` como linter, sem ESLint configurado)
- **Tailwind CSS v4** via `@tailwindcss/vite` — tokens de tema em `@theme` dentro de [`src/index.css`](src/index.css), **não existe** `tailwind.config.js`
- **lucide-react** para ícones
- Sem dependências de IA/backend (não usar `@google/genai`, `express` etc. — foram removidos por não terem uso real)

## Estrutura

```
src/
  App.tsx                 # composição das seções da página, nesta ordem
  main.tsx                # bootstrap do React
  index.css               # import do Tailwind + tokens de tema (@theme)
  types.ts                # interfaces de dados (BusinessInfo, GalleryPhoto, etc.)
  data/business.ts         # ÚNICA fonte de verdade para textos/dados do negócio
  utils/status.ts          # cálculo de "aberto agora" baseado em horário de Suzano (America/Sao_Paulo)
  components/              # um componente por seção da página (Header, Hero, About, ...)
public/
  images/                  # imagens servidas estaticamente, referenciadas como "/images/arquivo.jpg"
  logo.jpg, robots.txt, site.webmanifest
specs/                     # spec-kit do projeto (spec → plan → tasks por feature)
```

## Regras de trabalho neste repositório

1. **Dados do negócio vêm de `src/data/business.ts`.** Nunca hardcode telefone, endereço, horário ou links de agendamento/Instagram/WhatsApp direto em um componente — sempre leia de `BUSINESS_DATA` (ou das outras constantes exportadas ali: `SERVICES_STRUCTURE`, `GOOGLE_REVIEWS`, etc.).
2. **Não invente dados do negócio** (preços, promoções, depoimentos, horários). Se uma informação não existir em `business.ts` ou não for fornecida explicitamente, use um placeholder claro ("Consulte no agendamento") em vez de inventar.
3. **Mobile-first sempre**: escreva classes Tailwind sem prefixo para o layout mobile primeiro, depois `sm:` → `md:` → `lg:`. Nunca escreva uma seção pensando primeiro em desktop.
4. **Imagens**: todo `<img>` fora da dobra inicial leva `loading="lazy"`. A imagem do Hero é a única com `loading="eager"` + `fetchPriority="high"` (é o LCP da página) — não duplicar esse tratamento em outras imagens.
5. **Não reintroduza duplicatas de imagem.** `public/images/` é a única pasta de imagens do projeto (não recriar `src/assets/images` — foi removida por ser cópia exata e não utilizada).
6. **Links externos** (WhatsApp, Instagram, agendamento, Google Maps/Reviews) sempre com `target="_blank"` e `rel="noopener noreferrer"`.
7. **Idioma**: todo conteúdo visível é em pt-BR. Não traduzir para outro idioma sem pedido explícito.
8. **Sem novas dependências pesadas** sem necessidade real — este é um site estático simples; antes de adicionar uma lib, verifique se dá para resolver com Tailwind/React puro.

## Comandos

```bash
npm install       # instalar dependências
npm run dev       # servidor de desenvolvimento (porta 3000)
npm run build     # build de produção em dist/
npm run preview   # servir o build de produção localmente
npm run lint      # checagem de tipos (tsc --noEmit) — rodar antes de considerar uma tarefa concluída
npm run clean     # remove dist/
```

## Spec Kit

Antes de adicionar uma seção/feature nova, confira [`specs/README.md`](specs/README.md). O fluxo esperado é: escrever/atualizar `spec.md` (o quê/por quê) → `plan.md` (como, tecnicamente) → `tasks.md` (checklist), na pasta `specs/NNN-nome-da-feature/`. A pasta [`specs/001-mobile-first-experience/`](specs/001-mobile-first-experience/) documenta a baseline mobile-first já implementada e lista pendências conhecidas (otimização de imagens, ícones do manifest em tamanhos dedicados, testes em dispositivo real, CI de lint) — vale conferir `tasks.md` antes de assumir que algo já foi feito.

## Ao terminar uma alteração

Sempre rode `npm run build` (e, se a mudança for visual, valide em viewport mobile ~375px) antes de reportar a tarefa como concluída — não há suíte de testes automatizados neste projeto além do build e da checagem de tipos.
