# RendaLoop (Next.js)

Aplicação fullstack em Next.js para planejar fontes de **renda extra contínua**.

## O que o app entrega

- Curadoria de modelos recorrentes (assinatura, afiliado, produto digital e micro SaaS).
- Dashboard para criar projetos com meta mensal e cadência de execução.
- API routes para leitura das ideias e criação de novos projetos.
- Persistência simples em JSON local (`data/projects.json`) para facilitar MVP.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Endpoints

- `GET /api/ideas`
- `GET /api/projects`
- `POST /api/projects`

## Stack

- Next.js (App Router)
- TypeScript
- React Server + Client Components
