<div align="center">

# Studio Samora's

**Landing page institucional** — Manicure e Pedicure em Suzano, SP

[![Feito com React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Licença MIT](https://img.shields.io/badge/Licença-MIT-green.svg)](LICENSE)

**🔗 Site no ar:** https://studio-samoras.vercel.app/

</div>

---

## Sobre o projeto

Site de página única para o **Studio Samora's**, estúdio de manicure e pedicure localizado no Jardim Monte Cristo, em Suzano - SP. O objetivo do site é apresentar o estúdio e converter visitantes em agendamentos, direcionando para:

- 📅 **Agendamento online** (Agenda Beauty)
- 💬 **WhatsApp**
- 📸 **Instagram**
- ⭐ **Avaliações no Google** (nota 5.0)
- 📍 **Localização e horário de funcionamento** (com indicador de "aberto agora" em tempo real)

O site é construído **mobile-first**: a experiência é desenhada primeiro para celular — a maioria de quem procura um estúdio de beleza pesquisa e agenda pelo telefone — e depois adaptada para tablet/desktop. Os detalhes dessa decisão estão documentados em [`specs/001-mobile-first-experience/`](specs/001-mobile-first-experience/).

## Stack técnica

| Camada | Tecnologia |
|---|---|
| Framework | [React 19](https://react.dev) |
| Build tool | [Vite 6](https://vitejs.dev) |
| Estilo | [Tailwind CSS 4](https://tailwindcss.com) (`@tailwindcss/vite`, tokens via `@theme`) |
| Linguagem | TypeScript |
| Ícones | [lucide-react](https://lucide.dev) |

Não há backend, banco de dados ou build de servidor — é uma SPA 100% estática.

## Deploy

O site está hospedado na **Vercel**, no ar em **https://studio-samoras.vercel.app/**, com integração direta a este repositório:

| Item | Valor |
|---|---|
| Gatilho | Todo push na branch `main` |
| Framework detectado | Vite (automático) |
| Comando de build | `npm run build` |
| Diretório publicado | `dist` |
| Variáveis de ambiente | Nenhuma |

Não há passo manual de publicação nem ambiente de staging: **o que entra em `main` vai ao ar em cerca de um minuto**. Por isso, rode `npm run lint` e `npm run build` antes de commitar.

## Rodando localmente

**Pré-requisito:** Node.js 18+.

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo desenvolvimento (http://localhost:3000)
npm run dev

# 3. Build de produção
npm run build

# 4. Servir o build localmente para conferir
npm run preview
```

### Scripts disponíveis

| Comando | O que faz |
|---|---|
| `npm run dev` | Sobe o servidor de desenvolvimento com hot-reload na porta 3000 |
| `npm run build` | Gera o build de produção otimizado em `dist/` |
| `npm run preview` | Serve o conteúdo de `dist/` localmente |
| `npm run lint` | Checagem de tipos TypeScript (`tsc --noEmit`) |
| `npm run clean` | Remove a pasta `dist/` |

## Estrutura do projeto

```
studio-samoras/
├── src/
│   ├── App.tsx              # Composição das seções da página
│   ├── main.tsx             # Ponto de entrada React
│   ├── index.css            # Tailwind + tokens de tema customizados
│   ├── types.ts             # Tipos TypeScript dos dados do negócio
│   ├── data/
│   │   └── business.ts      # Fonte única de dados: contato, endereço, horários, serviços, avaliações
│   ├── utils/
│   │   └── status.ts        # Cálculo de status "aberto agora" (fuso de São Paulo)
│   └── components/          # Um componente por seção (Header, Hero, About, Services, ...)
├── public/
│   ├── images/               # Imagens usadas no site
│   ├── logo.jpg
│   ├── robots.txt
│   └── site.webmanifest      # Manifest PWA ("Adicionar à tela inicial")
├── specs/                    # Spec Kit do projeto (spec → plan → tasks)
├── CLAUDE.md                  # Guia de contexto para agentes de IA trabalharem no repo
└── README.md
```

## Personalizando os dados do negócio

Todo o conteúdo dinâmico (telefone, endereço, links, horário, serviços, avaliações do Google) está centralizado em [`src/data/business.ts`](src/data/business.ts). Para atualizar qualquer informação do estúdio, edite apenas esse arquivo — os componentes leem os dados de lá, nunca com valores fixos espalhados pelo código.

## Especificações (Spec Kit)

Este repositório segue um fluxo leve de **spec-driven development**: cada funcionalidade relevante tem sua pasta em [`specs/`](specs/) com três documentos — `spec.md` (requisitos), `plan.md` (decisões técnicas) e `tasks.md` (checklist). Comece por [`specs/README.md`](specs/README.md).

## Licença

Distribuído sob a licença MIT. Veja [`LICENSE`](LICENSE) para mais detalhes.
