# Identidade visual — portfólio Lucas Dias

> ⚠️ Mantenha este arquivo no mesmo commit de qualquer mudança em
> `src/app/globals.css` ou `tailwind.config.ts`.

Página única, tema escuro, **editorial e plana**: tipografia e hairlines fazem o trabalho. Sem glow, gradiente, glassmorphism, cards, pílulas, bento, chips nem animação de entrada.

## Cor (tokens em `globals.css`)

| Var | Valor | Uso |
|---|---|---|
| `--bg` | `#0a0e17` | fundo azul-noite sólido |
| `--ink` | `#eef2fa` | títulos |
| `--text` | `#c5cde0` | corpo |
| `--muted` | `#7f8aa3` | texto secundário, labels |
| `--blue` | `#6b95e0` | **único** acento (nome legado): CTA, cargo, índice de seção, e-mail |
| `--hair` / `--hair-strong` | `rgba(160,185,255,.10/.24)` | divisórias, borda de botão |

Acento usado com parcimônia. Nunca hex solto em componente.

## Tipografia (Google Fonts, `index.html`)

- Display: **Instrument Serif** (`font-display`) — nome, títulos de empresa/curso, lead do About, e-mail.
- Corpo: **Geist** (`font-sans`).
- Labels/metadados: **Geist Mono** (`.label`, maiúsculas, tracking 0.08em).

## Layout

- `.container-page`: máx. 72rem, padding 1.5rem (3rem ≥ lg).
- `Section`: grid `14rem | 1fr`, título serif sticky à esquerda, `border-t` + `py-20/28`.
- Hero: duas colunas, sem foto — nome em serif gigante à esquerda; intro, botão de e-mail e ícones à direita.
- Focus: lista numerada em linhas; Skills: lista de definição (itens separados por vírgula); About termina com grade de fatos (hairline, `rounded-sm`).

## Movimento

Nenhum. Só transições de cor/underline em hover; scroll suave respeita `prefers-reduced-motion`.

## Código

Dependências: só `react`, `react-dom`, `react-icons`. Não adicionar componentes de biblioteca sem uso.

## Checklist

1. Cores via tokens. 2. Um acento. 3. Nova seção usa `Section` com índice.
4. Ícones só `react-icons/fa` via `SocialLinks`. 5. Este arquivo concorda com o CSS.
