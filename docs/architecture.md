# Arquitetura Frontend — Diafanís

Documentação técnica e prompts para desenvolvimento do frontend do **Diafanís**, sistema web para escritórios de advocacia com foco no cálculo de prazos e gestão de compromissos processuais (Petrolina/PE e Juazeiro/BA).

---

## 1. Prompt de Arquitetura

```markdown
Você é o desenvolvedor frontend responsável pelo projeto Diafanís.
Construa uma aplicação React com TypeScript, modular, focada em usabilidade e performance.

### Stack:
- **Gerenciador de Pacotes:** `yarn`
- **Framework:** React 18+ com TypeScript (`strict: true`) e Vite
- **Estilos:** TailwindCSS com variáveis CSS para temas claro e escuro
- **Componentes:** `shadcn/ui` (Radix UI, Tailwind CSS, `class-variance-authority` e `lucide-react`)
- **Rotas:** TanStack Router (`@tanstack/react-router`)
- **Validação:** Zod (`zod`)
- **Testes:** Vitest e React Testing Library (`@testing-library/react`)
- **Qualidade de código:** ESLint e Prettier

### Estrutura de Pastas:
- **Componentes específicos de cada tela:**
  `./src/features/[tela]/[componente].tsx`
  Exemplo: `./src/features/calendar/CalendarGrid.tsx`
- **Componentes reaproveitáveis:**
  `./src/features/ui/`
  Exemplo: `./src/features/ui/button.tsx`, `./src/features/ui/status-badge.tsx`
- **Rotas:**
  `./src/routes/`

### Regras de Código:
1. **Comentários somente se estritamente necessários:** Prefira código autoexplicativo com boas nomenclaturas de funções, tipos e variáveis.
2. **Modularização:** Mantenha componentes pequenos e focados em uma única responsabilidade.
3. **Testes unitários com casos de borda:** Toda feature nova deve ter testes cobrindo fluxos principais e casos de borda (finais de semana, feriados municipais, múltiplos eventos no mesmo dia).
4. **Lint e formatação:** Sempre validar com o linter antes de concluir.
5. **Layout sem excesso de cards:** Evite aninhar cards dentro de cards. Use painéis unificados com divisores de 1px e espaçamento consistente.
6. **Mobile first e Dark mode:** Interface adaptada para telas pequenas e suporte nativo a tema claro/escuro desde o início.
```

---

## 2. Estrutura de Diretórios

```tree
diafanis-ui/
├── .agents/                      # Skills e automações do workspace
│   └── skills/
│       ├── frontend-design/      # Diretrizes de design e acabamento visual
│       ├── motion/               # Animações com Motion / Framer Motion e auditorias
│       ├── shadcn/               # Workflows oficiais, regras de composição e CLI do shadcn
│       └── migrate-radix-to-base/# Mapeamento e migração Radix para Base UI
├── docs/
│   ├── architecture.md           # Arquitetura e prompts
│   └── design_system.md          # Cores, tipografia, espaçamentos e status
├── references/                   # Imagens e protótipos de referência
│   ├── calendar_view_reference.png
│   ├── calendar_viewV1.png
│   ├── calendar_viewv2.png
│   ├── dashboard.png
│   ├── Invoices.png
│   └── calendarview.html
├── public/
├── src/
│   ├── app/                      # Provedores globais (tema, router)
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── providers.tsx
│   ├── routes/                   # Rotas da aplicação (TanStack Router)
│   │   ├── __root.tsx            # Layout base (Sidebar + Header + Outlet)
│   │   ├── index.tsx             # Dashboard
│   │   ├── calendar.tsx          # Calendário de Prazos e Audiências
│   │   ├── deadlines.tsx         # Calculadora de Prazos
│   │   ├── triage.tsx            # Triagem e Documentos
│   │   ├── executive.tsx         # Métricas da Gestão
│   │   └── financial.tsx         # Gestão Financeira e Rateio
│   ├── features/                 # Módulos por funcionalidade
│   │   ├── ui/                   # Componentes compartilhados (shadcn + customizados)
│   │   │   ├── glass-panel.tsx   # Painel com efeito translúcido sutil
│   │   │   ├── status-badge.tsx  # Badge de status (Fatal, Em Andamento, Audiência, Feriado)
│   │   │   ├── button.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── input.tsx
│   │   │   ├── segmented-control.tsx
│   │   │   └── theme-toggle.tsx
│   │   ├── calendar/             # Calendário
│   │   │   ├── CalendarContainer.tsx
│   │   │   ├── CalendarGrid.tsx
│   │   │   ├── CalendarCell.tsx
│   │   │   ├── CalendarHeader.tsx
│   │   │   ├── CalendarFilters.tsx
│   │   │   ├── MiniCalendarPicker.tsx
│   │   │   ├── TeamFilterList.tsx
│   │   │   ├── CalendarLegend.tsx
│   │   │   ├── types.ts
│   │   │   ├── schemas.ts
│   │   │   └── calendar.test.tsx
│   │   ├── deadlines/            # Motor de Prazos
│   │   │   ├── DeadlineCalculator.tsx
│   │   │   ├── CourtSelector.tsx
│   │   │   ├── HolidayNotice.tsx
│   │   │   ├── schemas.ts
│   │   │   └── deadlines.test.ts
│   │   ├── triage/               # Triagem WhatsApp
│   │   │   ├── TriageQueue.tsx
│   │   │   ├── WhatsAppConversation.tsx
│   │   │   ├── DocumentPreviewModal.tsx
│   │   │   ├── schemas.ts
│   │   │   └── triage.test.tsx
│   │   ├── executive/            # Painel do Gestor
│   │   │   ├── ExecutiveKpiGrid.tsx
│   │   │   ├── DeadlineUrgencyGauge.tsx
│   │   │   └── schemas.ts
│   │   └── financial/            # Financeiro e Rateio
│   │       ├── RevenueSplitTable.tsx
│   │       ├── InvoicesTable.tsx
│   │       ├── FeeIntakeForm.tsx
│   │       └── schemas.ts
│   ├── layout/                   # Header, Sidebar e menu mobile
│   │   ├── AppHeader.tsx
│   │   ├── AppSidebar.tsx
│   │   └── MobileNavDrawer.tsx
│   ├── shared/                   # Funções utilitárias
│   │   ├── cn.ts
│   │   └── date-utils.ts         # Contagem de dias úteis e feriados locais
│   └── styles/
│       └── globals.css
├── components.json               # Configuração shadcn
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
├── package.json
└── yarn.lock
```

---

## 3. Configuração do `components.json`

Configuração para instalar componentes do shadcn diretamente em `@/features/ui`:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/styles/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/features",
    "utils": "@/shared/cn",
    "ui": "@/features/ui",
    "lib": "@/shared",
    "hooks": "@/shared/hooks"
  },
  "iconLibrary": "lucide"
}
```

---

## 4. Validação de Parâmetros de URL com Zod

Rotas que recebem filtros via query params utilizam Zod para tipagem e validação:

```typescript
// src/routes/calendar.tsx
import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import { CalendarContainer } from '../features/calendar/CalendarContainer';

const calendarSearchSchema = z.object({
  month: z.number().int().min(1).max(12).default(9),
  year: z.number().int().min(2020).max(2040).default(2026),
  view: z.enum(['month', 'week', 'day']).default('month'),
  showFatal: z.boolean().default(true),
  showInProgress: z.boolean().default(true),
  showHearings: z.boolean().default(true),
  showHolidays: z.boolean().default(true),
  lawyerIds: z.array(z.string()).default(['me']),
});

export type CalendarSearchParams = z.infer<typeof calendarSearchSchema>;

export const Route = createFileRoute('/calendar')({
  validateSearch: (search) => calendarSearchSchema.parse(search),
  component: CalendarRouteComponent,
});

function CalendarRouteComponent() {
  const searchParams = Route.useSearch();
  return <CalendarContainer searchParams={searchParams} />;
}
```

---

## 5. Testes Unitários

Exemplo de teste unitário cobrindo casos de exibição de prazos e feriados locais:

```typescript
// src/features/calendar/calendar.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CalendarCell } from './CalendarCell';

describe('CalendarCell', () => {
  it('deve exibir o indicador de prazo fatal quando houver evento crítico', () => {
    const events = [
      { id: '1', title: 'Apelação Cível', type: 'fatal' as const, time: '23:59' }
    ];

    render(<CalendarCell dayNumber={3} isCurrentMonth={true} events={events} />);
    expect(screen.getByText('Fatal')).toBeInTheDocument();
  });

  it('deve identificar dia sem expediente forense por feriado local', () => {
    const events = [
      { id: '2', title: 'Feriado Municipal', type: 'holiday' as const, isSuspension: true }
    ];

    render(<CalendarCell dayNumber={21} isCurrentMonth={true} events={events} />);
    expect(screen.getByText(/feriado/i)).toBeInTheDocument();
  });
});
```

---

## 6. Prompts para Geração do Código

### Prompt 1: Configuração do Projeto e Componentes Base
```markdown
Configure a infraestrutura inicial do projeto Diafanís:
- React + TypeScript com Vite e yarn
- TailwindCSS com variáveis CSS de cores e superfícies definidas em `docs/design_system.md`
- Dark mode com `next-themes` (classe `dark` no elemento `<html>`)
- Configuração do `components.json` do shadcn apontando para `@/features/ui` e utils em `@/shared/cn`
- Componentes base em `./src/features/ui/`: `glass-panel.tsx`, `status-badge.tsx`, `button.tsx`, `badge.tsx`, `avatar.tsx`, `checkbox.tsx`, `sheet.tsx`, `segmented-control.tsx` e `theme-toggle.tsx`.

Gere o arquivo `tailwind.config.ts`, `src/styles/globals.css`, `components.json` e os componentes em `./src/features/ui/`.
Sem comentários desnecessários no código.
```

### Prompt 2: Layout Base (Header, Sidebar e Roteamento)
```markdown
Crie a estrutura de navegação da aplicação com base na imagem de referência (`references/calendar_view_reference.png`):
- `./src/layout/AppSidebar.tsx`: Barra lateral com fundo translúcido sutil, logotipo, botão de recolher, links de navegação (Dashboard, Calendário com contador "2", Motor de Prazos, Central de Documentos, Notificações & Mensagens, Gestão Financeira) e dados do usuário no rodapé.
- `./src/layout/AppHeader.tsx`: Barra superior com breadcrumbs, campo de busca com bordas arredondadas, botão de notificações com indicador e botão de ajuda.
- `./src/layout/MobileNavDrawer.tsx`: Menu lateral em gaveta móvel (`Sheet` do shadcn) para telas pequenas.
- Rota raiz em `./src/routes/__root.tsx` usando `@tanstack/react-router`.

Sem comentários óbvios no código.
```

### Prompt 3: Tela de Calendário de Prazos e Audiências
```markdown
Implemente a tela de Calendário de Prazos e Audiências em `./src/features/calendar/`:
- `CalendarContainer.tsx`: Estrutura da tela dividida em apenas dois painéis principais (coluna de filtros à esquerda e área do calendário à direita).
- `MiniCalendarPicker.tsx`: Mini calendário mensal para seleção rápida de data, com pontos coloridos de status nos dias com eventos.
- `CalendarFilters.tsx`: Checkboxes para filtrar por status: Prazos Fatais, Prazos em Andamento, Audiências Marcadas e Sem Expediente Forense.
- `TeamFilterList.tsx`: Filtro por membros da equipe com avatares e tags ("Você", "Titular").
- `CalendarHeader.tsx`: Título do mês ("Setembro 2026"), botões de avançar/voltar, botão "Hoje" e alternador de visualização ("Mês", "Semana", "Dia").
- `CalendarGrid.tsx` e `CalendarCell.tsx`: Grade mensal de 7 colunas (Dom a Sáb), exibindo badges dos eventos com cores por tipo, destaque no dia atual ("15 HOJE") e indicador de "+X mais" quando houver muitos itens no mesmo dia.
- `CalendarLegend.tsx`: Rodapé com legenda dos 4 tipos de eventos.
- Testes unitários em `./src/features/calendar/calendar.test.tsx` com Vitest.

Siga estritamente a referência visual em `references/calendar_view_reference.png`.
```

### Prompt 4: Calculadora de Prazos Processuais
```markdown
Implemente o módulo de cálculo de prazos em `./src/features/deadlines/`:
- `DeadlineCalculator.tsx`: Formulário de contagem de prazos em dias úteis (CPC e CLT).
- `CourtSelector.tsx`: Seletor de tribunal e comarca (TJPE - Petrolina, TJBA - Juazeiro, TRT5, TRT6, TRF5).
- Validação com esquemas Zod em `schemas.ts`.
- Lógica de contagem em `src/shared/date-utils.ts` desconsiderando finais de semana e feriados locais de Petrolina e Juazeiro.
- Testes unitários cobrindo prazos que vencem em feriados locais e finais de semana.
```
