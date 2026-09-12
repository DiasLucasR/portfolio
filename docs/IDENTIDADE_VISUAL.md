# Identidade visual — portfólio Lucas Dias

> ⚠️ **Mantenha este arquivo atualizado.** Se `src/app/globals.css`,
> `tailwind.config.ts`, tokens de cor, tipografia, raio ou o tom da marca
> mudarem, atualize aqui **no mesmo commit**. Este documento e o código devem
> sempre concordar.

Fonte de verdade em código: [`src/app/globals.css`](../src/app/globals.css)
(tokens em CSS vars) e [`tailwind.config.ts`](../tailwind.config.ts) (mapeamento
para classes utilitárias). Site em página única, tema **sempre escuro**.

---

## 1. Marca

Portfólio pessoal de **Lucas Dias**, Senior Full-Stack Software Engineer.
Aparência: **minimalista, escura, editorial** — o conteúdo (experiência,
skills, contato) manda; a interface some. Estrutura em página única com
seções separadas por hairline (`border-hair`), sem cards pesados nem sombras
decorativas.

Regra de cor: **gradiente azul→violeta (`brand-gradient`) só em destaque
pontual** — palavra-chave no H1, marca no nav, traço decorativo acima do
título de seção. Nunca em fundo de seção nem em texto corrido.

Uma ação primária por tela: o CTA "Get in touch" (e-mail) na Hero.

## 2. Cor de fundo e superfícies

Fundo em gradiente radial fixo (`body`, `background-attachment: fixed`),
compondo três camadas:

| Var | Hex/valor | Uso |
|---|---|---|
| `--bg` | `#0c1220` | fundo base da página |
| `--bg-2` | `#111a2e` | meio do gradiente linear vertical |
| `--bg-elevated` | `#0e1524` | superfícies levemente elevadas (`.bg-elevated`) |
| `--surface` | `#16213c` | superfície de conteúdo — chips de skills (`.surface`) |
| glow cyan/violet | `rgba(34,211,238,.45)` / `rgba(124,92,255,.35)` | manchas radiais suaves no topo do fundo |

O fundo nunca é sólido: sempre os dois glows radiais + gradiente linear
`--bg → --bg-2 → --bg`, fixos no viewport.

## 3. Cor de acento — azul/violeta

Duas cores de acento, usadas quase sempre **juntas** em gradiente
(`brand-gradient`, `linear-gradient(120deg, var(--blue), var(--violet))`):

| Índice | Var | Hex | Uso |
|---|---|---|---|
| — | `--blue` | `#22d3ee` | CTA preenchido, texto de destaque (`.text-brand`), ponta do gradiente |
| — | `--blue-hover` | `#67e8f9` | hover do CTA preenchido |
| — | `--violet` | `#7c5cff` | outra ponta do gradiente, `::selection` |
| — | `--accent-ink` | `#06121a` | texto sobre fundo `--blue` (CTA) |

Uso isolado do azul (`.text-brand`, `.border-brand`): links ativos no hover,
nome da empresa na experiência, e-mail de contato. O violeta aparece **só**
dentro do gradiente ou na seleção de texto — nunca sozinho como cor de UI.

## 4. Neutros — texto e hairlines

| Var | Hex/valor | Uso |
|---|---|---|
| `--ink` | `#ffffff` | títulos (h1/h2/h3), nome próprio |
| `--text` | `#eaf0ff` | corpo do texto (`body`, `.text-body`) |
| `--muted` | `#8a97b4` | texto secundário — `.text-dim`, `text-muted-foreground` do shadcn |
| `--hair` | `rgba(255,255,255,.09)` | borda padrão entre seções (`border-hair`) |
| `--hair-strong` | `rgba(255,255,255,.15)` | borda de botão outline, hairline com mais contraste |

Sistema (pouco usado, sem UI dedicada): `--ok` `#34d399` (bolinha "Open to
opportunities" na Hero), `--danger` `#f97066` (reservado, sem uso atual).

Use sempre os tokens/utilitárias (`text-dim`, `text-brand`, `border-hair`,
`var(--blue)`) — **nunca hex solto** em componente.

## 5. Tipografia

- Corpo: **Inter** (`--font-inter`, Google Fonts via `next/font`, `display:
  swap`) — `--font-sans`.
- Títulos e marca: **Space Grotesk** (`--font-space-grotesk`) — `--font-display`,
  aplicada via classe `.font-display` em h1/h2/h3, nome do nav e "eyebrow" das
  seções.
- Eyebrow de seção (`<h2>` do `Section`): `text-xs font-semibold uppercase
  tracking-[0.22em] text-dim`, precedido por um traço de 8px em gradiente.
- H1 da Hero: `text-4xl sm:text-5xl font-semibold leading-[1.08]
  tracking-tight`, com a primeira palavra em `brand-gradient`.

## 6. Forma, espaçamento e layout

- `--radius: 0.75rem` (12px) — mapeado em `tailwind.config.ts` como `lg`; `md`
  = `radius - 3px`, `sm` = `radius - 6px`. Pills (chips de skill, botões,
  avatar) usam `rounded-full`.
- Largura de conteúdo: `.container-page` = `max-w-3xl` centralizado, `px-6` —
  única largura usada no site inteiro (sem largura "full" para seções).
- Seções (`Section.tsx`) empilhadas verticalmente, cada uma com
  `border-t border-hair py-16 sm:py-20` — o próprio hairline substitui
  cards/painéis para separar conteúdo.
- Espaçamento entre itens de lista (experiência, skills) em grid
  `sm:grid-cols-[9rem_1fr]`: rótulo estreito à esquerda, conteúdo à direita.
- Sombra só no CTA preenchido da Hero (`box-shadow` com `--glow-cyan`) — em
  nenhum outro lugar.

## 7. Movimento

- `Reveal` (Framer Motion): fade + translate-y de 16px→0 ao entrar no
  viewport (`whileInView`, `once: true`), usado para revelar cada `Section`
  inteira.
- Hero anima só na carga da página (`initial`/`animate`, sem `whileInView`).
- Easing padrão: `[0.22, 1, 0.36, 1]` (ease-out suave), duração 0.5–0.6s.
- Header (`Nav`) ganha `nav-blur` (fundo semi-opaco + `backdrop-blur`) e borda
  inferior só depois de `scrollY > 8`.
- Links de texto usam `.link-underline`: sublinhado que cresce da direita para
  a esquerda no hover (`scale-x` + `transform-origin`).

## 8. Ícones

`react-icons/fa` (Font Awesome), só para redes sociais (LinkedIn, GitHub,
WhatsApp) via o componente compartilhado `SocialLinks`
([`src/components/SocialLinks.tsx`](../src/components/SocialLinks.tsx)). Cor
herdada (`text-muted-foreground`, `hover:text-brand`). Não misturar outra
biblioteca de ícones.

## 9. Estrutura de página

Página única (`src/app/page.tsx`), sem rotas internas:

1. **Nav** — fixo no topo (`sticky`), logo "Lucas Dias" (Space Grotesk) +
   links de âncora (`about`, `experience`, `skills`, `contact`).
2. **Hero** (`#top`) — avatar com anel em gradiente, status "Open to
   opportunities", H1, intro, CTA de e-mail + link LinkedIn + `SocialLinks`.
3. **About**, **Experience**, **Skills**, **Education**, **Contact** — todas
   via o componente `Section` (eyebrow + hairline + `Reveal`), um arquivo por
   seção em `src/components/sections/`.
4. **Footer** — fora do `<main>`, hairline superior, copyright.

Todo o texto vem de [`src/content/i18n.ts`](../src/content/i18n.ts) (site
**apenas em inglês** — não recriar um dicionário multi-idioma sem necessidade
real; ver `src/content/language-provider.tsx`).

## 10. Checklist ao mexer em UI

1. Cores vêm de CSS vars/tokens (`--blue`, `--violet`, `--muted`, `.text-dim`,
   `.border-hair` etc.), sem hex solto novo.
2. Gradiente azul→violeta só em destaque pontual, nunca em fundo de seção ou
   texto corrido.
3. Raio, fonte e espaçamento herdados do tema (`--radius`, `--font-display`,
   `.container-page`).
4. Nova seção usa o componente `Section` (mantém hairline + eyebrow + Reveal).
5. Ícones novos entram só via `react-icons/fa`, reaproveitando `SocialLinks`
   quando forem link social.
6. `globals.css`/`tailwind.config.ts` e este arquivo concordam.
