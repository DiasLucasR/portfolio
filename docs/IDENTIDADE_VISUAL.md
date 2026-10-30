# Identidade visual — portfólio Lucas Dias

> ⚠️ Mantenha este arquivo no mesmo commit de qualquer mudança em
> `src/app/globals.css` ou `tailwind.config.ts`.

Página única, tema escuro, **editorial**: tipografia faz o trabalho; sem
gradientes, glows, glassmorphism ou cards. Seções separadas por hairline.

## Cor (tokens em `globals.css`)

| Var | Valor | Uso |
|---|---|---|
| `--bg` | `#0b0b0a` | fundo sólido |
| `--ink` | `#f4f1ea` | títulos |
| `--text` | `#d6d2c8` | corpo |
| `--muted` | `#8b877c` | texto secundário, labels |
| `--blue` | `#c8f560` | **único** acento (nome legado): CTA, cargo, índice de seção, e-mail |
| `--hair` / `--hair-strong` | `rgba(244,241,234,.10/.22)` | divisórias, borda de botão |

Acento usado com parcimônia. Nunca hex solto em componente.

## Tipografia (Google Fonts, `index.html`)

- Display: **Instrument Serif** (`font-display`) — nome, títulos de empresa/curso, lead do About, e-mail.
- Corpo: **Geist** (`font-sans`).
- Labels/metadados: **Geist Mono** (`.label`, maiúsculas, tracking 0.08em).

## Layout

- `.container-page`: máx. 72rem, padding 1.5rem (3rem ≥ lg).
- `Section`: grid `14rem | 1fr`, rótulo numerado (`01 About`) sticky à esquerda, `border-t` + `py-20/28`.
- Hero: nome gigante (`clamp(3.5rem, 11vw, 9rem)`) + retrato P&B 4:5 à direita.
- Skills: lista de definição (grupo → itens separados por `·`), sem chips.

## Movimento

`Reveal` (fade + 20px, uma vez). Hero anima só na carga. Sem animação infinita.
Respeita `prefers-reduced-motion` no scroll suave.

## Checklist

1. Cores via tokens. 2. Um acento. 3. Nova seção usa `Section` com índice.
4. Ícones só `react-icons/fa` via `SocialLinks`. 5. Este arquivo concorda com o CSS.
