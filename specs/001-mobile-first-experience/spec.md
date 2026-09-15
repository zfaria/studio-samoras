# Spec 001 — Experiência Mobile-First

## Status
`Baseline ativa` — a maior parte já está implementada em [src/](../../src); este documento formaliza o que existe e o que falta, servindo de referência para qualquer mudança futura no site.

## Contexto e por quê

O Studio Samora's é um negócio local (manicure/pedicure em Suzano-SP). O comportamento real de clientes de estúdios de beleza é:

- Pesquisam no Google/Instagram **pelo celular**, geralmente em movimento ou entre um compromisso e outro.
- Decidem em segundos se ligam, mandam WhatsApp ou agendam online.
- Uma página lenta, com texto ilegível ou botão de agendar difícil de tocar, custa cliente.

Por isso o site é **mobile-first**: toda tela e todo componente são desenhados primeiro para viewport pequeno (≥ 360px de largura) e só depois adaptados para tablet/desktop — nunca o inverso.

## Público-alvo de dispositivos

| Categoria | Largura | Prioridade |
|---|---|---|
| Celular pequeno/médio | 360px – 430px | **Máxima** — maioria do tráfego esperado |
| Celular grande / tablet retrato | 431px – 767px | Alta |
| Tablet paisagem | 768px – 1023px | Média |
| Desktop | ≥ 1024px | Suporte completo, não é o foco principal |

## Requisitos funcionais

1. **Navegação por toque**: todo alvo clicável (botões, links, ícones) tem no mínimo ~44×44px de área de toque em telas < 640px.
2. **Ações críticas sempre visíveis no mobile**: "Agendar Horário" e "WhatsApp" devem estar acessíveis sem rolar a página, via barra fixa inferior.
3. **Menu de navegação**: em telas < 1024px (`lg`), a navegação colapsa em um menu do tipo drawer/gaveta acionado por um botão hambúrguer.
4. **Conteúdo em coluna única no mobile**: grids de serviços, avaliações, galeria e localização usam 1 coluna em `base`, expandindo em `sm`/`md`/`lg`.
5. **Sem rolagem horizontal** em nenhuma largura de viewport a partir de 320px.
6. **Compatibilidade com áreas seguras (safe-area)**: elementos fixos na borda inferior (barra de ações mobile) não podem ficar atrás do indicador de home / notch em iPhones.
7. **Instalável como app**: o site deve expor um Web App Manifest válido para "Adicionar à tela inicial" em Android/iOS.
8. **Acessibilidade mínima**: link de "pular para o conteúdo", `aria-label` em ícones/botões sem texto, contraste de texto adequado (AA) sobre os fundos usados.
9. **Performance no mobile**: a primeira imagem visível (hero) carrega com prioridade alta (`fetchPriority="high"`); imagens abaixo da dobra usam `loading="lazy"`.
10. **Idioma e formatação**: conteúdo em pt-BR, `lang="pt-BR"` no documento e no manifest.

## Critérios de aceite

- [ ] Em um viewport de 375×812 (iPhone padrão), nenhum elemento overflow horizontal ocorre.
- [ ] A barra de ação fixa mobile não sobrepõe conteúdo do rodapé nem é sobreposta pelo indicador de home.
- [ ] Todos os links externos (WhatsApp, Instagram, agendamento) abrem em nova aba com `rel="noopener noreferrer"`.
- [ ] O Lighthouse Mobile (categoria Performance) não deve regredir abaixo de 85 ao adicionar novas seções.
- [ ] Qualquer nova seção adicionada ao site segue a ordem: layout mobile primeiro (classes sem prefixo) → ajustes `sm:` → `md:` → `lg:`.

## Fora de escopo (por enquanto)

- Modo escuro (dark mode).
- Internacionalização (i18n) / versão em outro idioma.
- App nativo (iOS/Android) — o manifest cobre apenas "instalar como PWA leve".
