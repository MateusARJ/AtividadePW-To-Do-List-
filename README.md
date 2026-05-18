# 📋 Minhas Tarefas — To-Do List

Aplicação de lista de tarefas desenvolvida como atividade prática da disciplina de **Programação Web**. O projeto tem como objetivo aplicar conceitos de desenvolvimento front-end moderno utilizando React, TypeScript e Tailwind CSS.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|---|---|---|
| [React](https://react.dev/) | 19 | Biblioteca para construção de interfaces |
| [TypeScript](https://www.typescriptlang.org/) | 6 | Tipagem estática para JavaScript |
| [Vite](https://vite.dev/) | 8 | Bundler e servidor de desenvolvimento |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Framework de estilização utilitária |
| [React Router DOM](https://reactrouter.com/) | 7 | Roteamento client-side |
| [Lucide React](https://lucide.dev/) | 1.16 | Biblioteca de ícones SVG |

---

## 📦 Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm (já incluso com o Node.js)

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/MateusAraujo88/AtividadePW-To-Do-List-.git
```

2. Acesse a pasta do projeto:

```bash
cd AtividadePW-To-Do-List-
```

3. Instale as dependências:

```bash
npm install
```

---

## ▶️ Rodando o Projeto

### Modo desenvolvimento

Inicia o servidor local com hot-reload:

```bash
npm run dev
```

A aplicação ficará disponível em `http://localhost:5173` (ou outra porta indicada no terminal).

### Build para produção

Compila o TypeScript e gera os arquivos otimizados na pasta `dist/`:

```bash
npm run build
```

### Preview da build

Serve localmente os arquivos gerados pelo build para validação:

```bash
npm run preview
```

### Lint

Verifica o código com ESLint:

```bash
npm run lint
```

---

## 🗂️ Estrutura do Projeto

```
AtividadePW-To-Do-List-/
├── public/
│   └── list-favcon.png        # Favicon e logo da aplicação
├── src/
│   ├── app/
│   │   └── App.tsx            # Configuração de rotas (React Router)
│   ├── components/
│   │   ├── Header.tsx         # Cabeçalho com logo e botão de configurações
│   │   ├── SettingsPanel.tsx  # Sidebar retrátil de configurações
│   │   ├── TaskInput.tsx      # Campo de entrada para nova tarefa
│   │   ├── TaskFilter.tsx     # Filtros de visualização (Todas/Ativas/Concluídas)
│   │   ├── TaskItem.tsx       # Card individual de cada tarefa
│   │   └── Footer.tsx         # Rodapé com link para o repositório
│   ├── pages/
│   │   └── Home.tsx           # Página principal — gerencia todo o estado da aplicação
│   ├── style/
│   │   ├── index.css          # Importação do Tailwind CSS
│   │   └── App.css            # Estilos globais adicionais
│   ├── types/
│   │   └── task.ts            # Tipagem TypeScript do modelo de tarefa
│   └── main.tsx               # Ponto de entrada da aplicação React
├── index.html                 # HTML base do Vite
├── vite.config.ts             # Configuração do Vite e plugins
├── tsconfig.json              # Configuração raiz do TypeScript
├── tsconfig.app.json          # Configuração do TypeScript para o código da aplicação
├── tsconfig.node.json         # Configuração do TypeScript para o ambiente Node (Vite)
├── eslint.config.js           # Configuração do ESLint
└── package.json               # Dependências e scripts do projeto
```

---

## 🔄 Fluxo da Aplicação

```
main.tsx
  └── App.tsx  (BrowserRouter + Routes)
        └── Home.tsx  (estado global da aplicação)
              ├── Header.tsx
              │     └── SettingsPanel.tsx  (sidebar de configurações)
              ├── TaskInput.tsx            (adicionar tarefa)
              ├── TaskFilter.tsx           (filtrar tarefas)
              ├── TaskItem.tsx × N         (cada tarefa da lista)
              └── Footer.tsx
```

### Gerenciamento de estado

Todo o estado da aplicação vive no componente `Home.tsx` e é passado para os filhos via props:

| Estado | Tipo | Descrição |
|---|---|---|
| `tasks` | `Task[]` | Lista completa de tarefas |
| `input` | `string` | Texto do campo de nova tarefa |
| `filter` | `FilterType` | Filtro ativo: `ALL`, `ACTIVE` ou `COMPLETED` |
| `darkMode` | `boolean` | Tema claro ou escuro |

### Persistência

Os dados são salvos automaticamente no `localStorage` do navegador via `useEffect`:

- `tasks` — lista de tarefas serializada em JSON
- `darkMode` — preferência de tema (`"true"` / `"false"`)

Ao recarregar a página, os dados são restaurados automaticamente.

---

## ✨ Funcionalidades

- **Adicionar tarefa** — via botão ou tecla `Enter`
- **Concluir tarefa** — clique no checkbox circular; a tarefa fica riscada e com opacidade reduzida
- **Editar tarefa** — clique no ícone de lápis; confirma com `Enter` ou ícone de check, cancela com `Escape` ou ícone de X
- **Excluir tarefa** — clique no ícone de lixeira
- **Filtrar tarefas** — abas "Todas", "Ativas" e "Concluídas"
- **Contador de tarefas** — badge exibindo quantas tarefas ainda estão pendentes
- **Estado vazio** — mensagem contextual quando não há tarefas no filtro ativo
- **Modo escuro** — alternado via sidebar de configurações; preferência persiste entre sessões
- **Sidebar de configurações** — abre pela direita ao clicar no ícone de engrenagem; fecha clicando fora ou no botão X

---

## 🧩 Componentes em Detalhe

### `Home.tsx`
Página principal e única da aplicação. Centraliza todo o estado e distribui handlers para os componentes filhos. Aplica a classe de tema (`bg-slate-900` / `bg-gray-50`) na div raiz conforme o `darkMode`.

### `Header.tsx`
Exibe o logo (`/public/list-favcon.png`) e o título da aplicação. Renderiza o `SettingsPanel` posicionado absolutamente à direita.

### `SettingsPanel.tsx`
Botão de engrenagem que, ao ser clicado, abre uma sidebar retrátil fixada à direita da tela. Contém um toggle switch para alternar o modo escuro. Um backdrop invisível cobre o restante da tela para fechar a sidebar ao clicar fora.

### `TaskInput.tsx`
Campo de texto controlado com botão "Adicionar". Suporta submissão via tecla `Enter`. Estilizado de acordo com o tema ativo.

### `TaskFilter.tsx`
Grupo de três botões em formato de abas pill (`Todas`, `Ativas`, `Concluídas`). O filtro ativo recebe destaque visual. Exibe um badge com a contagem de tarefas pendentes.

### `TaskItem.tsx`
Representa uma tarefa individual. Possui dois modos: **visualização** (checkbox + texto + botões de editar/excluir) e **edição** (input inline + botões de salvar/cancelar). O checkbox é um botão circular customizado que fica azul ao ser marcado.

### `Footer.tsx`
Rodapé simples com link para o repositório no GitHub.

---

## 📐 Modelo de Dados

```typescript
// src/types/task.ts
type Task = {
    id: string;        // UUID gerado via crypto.randomUUID()
    text: string;      // Texto da tarefa
    completed: boolean; // Status de conclusão
}
```

---

## 👤 Autor

**Mateus de Araujo**
- GitHub: [@MateusAraujo88](https://github.com/MateusAraujo88)
- Repositório: [AtividadePW-To-Do-List-](https://github.com/MateusAraujo88/AtividadePW-To-Do-List-)
