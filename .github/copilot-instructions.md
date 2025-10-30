<!-- .github/copilot-instructions.md - Instruções específicas para agentes de IA que editam este repositório -->
# Instruções rápidas para agentes de codificação (landing-page-iniciante)

- Contexto rápido: este repositório é uma landing page estática simples (HTML/CSS/JS). Não há build step, frameworks nem dependências externas.
- Arquivos-chave:
  - `index.html` — estrutura da página (header, nav, seção `.hero`, seção de projetos (id: projetos) e `footer`).
  - `style.css` — estilos principais; usa classes como `.container` e `.hero` com foco em layout responsivo simples.
  - `script.js` — atualmente vazio; qualquer interação deve ser adicionada aqui (vanilla JS).
  - `README.md` — contém instruções básicas de git e convenções de mensagens de commit.

O que é importante saber antes de editar
- Não há sistema de build: alterações em HTML/CSS/JS podem ser testadas abrindo `index.html` no navegador ou servindo a pasta com um servidor estático (ex: `python -m http.server 8000`).
- Convenções de git: o README recomenda mensagens curtas e semânticas (ex: `feat:`, `fix:`). Preserve essa convenção.

Padrões e decisões estruturais detectadas
- Layout: usa uma classe `.container` centralizadora (max-width 1200px) — mantenha este padrão ao adicionar seções.
- Seção hero: `section.hero` é estilizada com borda arredondada e sombra; quando adicionar CTAs mantenha o estilo de botão existente (`.hero button`).
- Navegação: `header` com nav baseado em anchors (ex: link para a seção de projetos/âncora) — adições de rota/client-side devem continuar suportando links âncora.
- JS: as interações leves esperadas (scroll suave, modais simples) devem ser implementadas em `script.js` sem bundlers.

Fluxo de trabalho de desenvolvimento (recuperável do repositório)
- Testar localmente: abrir `index.html` ou usar servidor estático.
- Commit/Push: seguir instrução do `README.md`: `git add .`, `git commit -m "<tipo>: <descrição>"`, `git push origin main`.

Boas práticas específicas para este projeto
- CSS: siga a organização atual (seções comentadas no topo do arquivo). Evite reformatar todo o arquivo; prefira adicionar blocos perto das seções relacionadas.
- Acessibilidade: mantenha etiquetas semânticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) e atributos ARIA quando necessário.
- JS leve: preferir vanilla JS. Se adicionar bibliotecas, documente no README e explique o motivo.

Exemplos rápidos (para referencia do agente)
- Ao adicionar um novo projeto na seção de projetos (id: projetos) crie um `article` dentro de `.container` com estrutura: `h4` (título), `p` (descrição) e um link/CTA.
- Para gravar um commit de recurso: `git commit -m "feat: adicionar estudo de caso X na seção projetos"`.

O que NÃO inventar
- Não adicione configurações de build (package.json, webpack etc.) sem instrução explícita do mantenedor.

Onde procurar mais contexto
- `README.md` — convenções de git e objetivo educacional do projeto.
- `style.css` — organização e exemplos de padrões visuais.

Se algo estiver faltando
- Peça ao mantenedor por: lista de imagens/ativadores de conteúdo, preferências de responsividade (breakpoints adicionais) ou se há intenção de migrar para um gerador de site.

Se você (agente) gerar mudanças significativas, explique em uma nota de commit curto o motivo e deixe uma entrada no `README.md` se for adicionar dependências.

Fim — se quiser, eu posso criar PR template ou adicionar exemplos de tarefas comuns (ex: adicionar projeto, melhorar responsividade).
