# Spec Kit — Studio Samora's

Este diretório guarda as especificações do projeto no formato **spec-driven development**: cada funcionalidade relevante tem uma pasta numerada com três documentos, nesta ordem de leitura e de decisão:

1. **`spec.md`** — o quê e por quê. Requisitos funcionais, critérios de aceite, público e restrições. Não fala de código.
2. **`plan.md`** — o como. Decisões técnicas, breakpoints, padrões de componente, orçamento de performance.
3. **`tasks.md`** — checklist executável derivado do plano, com status (`Feito` / `Pendente`).

## Convenção de pastas

```
specs/
  README.md                      <- este arquivo
  001-mobile-first-experience/   <- baseline mobile-first do site (atual)
    spec.md
    plan.md
    tasks.md
```

Novas funcionalidades (ex.: página de serviços dinâmica, blog, formulário de contato) devem ganhar uma nova pasta `NNN-nome-da-feature/` seguindo o mesmo padrão, numerada sequencialmente.

## Regra de ouro

Este projeto é **mobile-first por padrão**: qualquer especificação nova deve declarar explicitamente o comportamento em telas pequenas (< 640px) antes de descrever telas maiores. Ver [`001-mobile-first-experience/spec.md`](001-mobile-first-experience/spec.md) para os requisitos base que já valem para todo o site.
