# Template Base Webpack + Babel

Template base para projetos frontend com JavaScript, Webpack, Babel, ESLint, Prettier e Husky.

## Visão geral

Este projeto foi adaptado para seguir o padrão mais comum de estrutura de aplicações Webpack. A aplicação principal entra em `src/main.js`, o HTML de renderização é gerado a partir de `public/index.html` com `html-webpack-plugin` e o código JavaScript é transpilado por Babel com suporte moderno ao navegador.

## Estrutura principal

```text
project/
├─ public/
│  ├─ assets/
│  │  └─ favicon.png
│  └─ index.html
├─ src/
│  ├─ components/
│  ├─ styles/
│  ├─ features/
│  ├─ services/
│  ├─ utils/
│  └─ main.js
├─ .gitignore
├─ babel.config.js
├─ package.json
├─ webpack.config.js
├─ eslint.config.mjs
└─ README.md
```

## Quick start

1. Ajuste os metadados do projeto em `package.json`:

```json
{
  "name": "nome-do-seu-projeto",
  "description": "Breve descrição do projeto"
}
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

4. Gere a build de produção:

```bash
npm run build
```

5. Faça a pré-visualização da build:

```bash
npm run preview
```

## Scripts disponíveis

| Etapa           | Comando            | Descrição                                                    |
| :-------------- | :----------------- | :----------------------------------------------------------- |
| Desenvolvimento | `npm run dev`      | Inicia o servidor Webpack Dev Server em modo desenvolvimento |
| Build           | `npm run build`    | Gera a versão otimizada para produção em `dist/`             |
| Preview         | `npm run preview`  | Sobe um servidor local para testar a build final             |
| Lint            | `npm run lint`     | Executa a análise estática com ESLint                        |
| Auto-fix        | `npm run lint:fix` | Corrige automaticamente os problemas apontados pelo ESLint   |
| Formatação      | `npm run format`   | Formata os arquivos com Prettier                             |

## Configuração do Webpack

A configuração principal está em `webpack.config.js` e inclui:

- `entry`: apontando para `src/main.js`
- `output`: gerando os arquivos finais em `dist/`
- `devServer`: rodando na porta `3000` com hot reload
- `html-webpack-plugin`: usando `public/index.html` como template HTML
- `babel-loader`: transpila o JavaScript com Babel
- `css-loader` + `style-loader`: carregam e injetam CSS na aplicação

## Configuração do Babel

A transpilação está centralizada em `babel.config.js` e usa `@babel/preset-env` para compatibilidade com navegadores modernos.

## Boas práticas

- Mantenha a lógica do app em `src/` e o HTML base em `public/`.
- Evite deixar arquivos de configuração de outros bundlers no projeto.
- Use `npm ci` quando quiser instalar as dependências exatamente conforme o `package-lock.json`.
- Use `npm run lint` antes de finalizar uma tarefa e `npm run build` antes de publicar.

---

Desenvolvido por [Victor Martins](https://github.com/VictorMartinsD)
