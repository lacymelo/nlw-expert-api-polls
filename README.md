<div align="justify">
  <h1>
    🤖 NLW Expert
  </h1>

  <h2>
    Trilha Node: API Polls
  </h2>

  > Seja bem vindo ao repositório do código API Polls, desenvolvido na NLW Expert, que aborda a criação de um sistema de enquetes em 👉 Real Time, utilizando banco de dados 👉 PostgreSQL, protocolo 👉 WebSockets para monitorar os votos de uma enquete, além de utilizar um banco de dados em 👉 Redis para armazenar a contagem de votos de cada opção em cada enquete 🚀.
</div>

## :rocket: Funcionalidades
- [X] Criar enquete
- [X] Recuperar detalhes de uma única enquete
- [X] Criar votos em uma enquete
---

## :eyes: Visite a trilha Node
👉 [trilha node](https://app.rocketseat.com.br/events/nlw-expert/nodejs/encerramento-nlw-expert)

##  📥 Configurações e instalações
> Estas são todas as bibliotecas utilizadas neste projeto, verifique cada uma com atenção.

✨ Vamos começar criando o arquivo `package.json` executando o comando.
```bash
npm init -y
```
✨ Todo o código será escrito em `TypeScript`. Além de instalá-lo, também utilizaremos o pacote `@types/node`, que integra o TypeScript com o Node.js. Para isso, execute o seguinte comando como uma dependência de desenvolvimento.
```bash
pnpm i typescript @types/node -D
```
✨ O projeto precisará de um arquivo `tsconfig.js`, que apresentará as principais configurações do typescript, para gerar esse arquivo execute o seguinte comando.
```bash
npx tsc --init
```
✨ Com arquivo criado, você precisará fazer algumas configurações, utilizando essa string de busca no google `node target mapping github`, você vai encontrar um link para as principais configurações que a microsoft indica para cada versão do node, para a minha versão do node foi recomenda a seguinte a alteração de configuração no `tsconfig.json`.
```bash
{
  "compilerOptions": {
    "lib": ["ES2023"],
    "module": "node16",
    "target": "ES2022"
  }
}
```
✨ Converter o código TypeScript para JavaScript para uso com o Node pode ser trabalhoso. Para evitar essa complexidade, vamos instalar a biblioteca `tsx``, que automatiza esse processo de conversão. Para instalar, execute o seguinte comando.
```bash
pnpm i tsx -D
```
✨ No seu `package.json`, adicione essa configuração em `scripts`.
```bash
  "scripts": {
    "dev": "tsx watch src/http/server.ts"
  },
```
✨ Para criar o servidor http no node vamos usar o `fastify`, instale usando o seguinte comando.
```bash
pnpm i fastify
```
✨ A validação de dados nas requisições http serão feitas usando a lib `zod`, para isso instale usando o comando.
```bash
pnpm i zod
```

## :arrow_forward: Configurações do Docker
> Esses são os comandos e configurações do docker.

✨ Para executar o docker, execute este comando.
```bash
docker compose up -d
```
✨ Para verificar os container que estão executando no docker, execute o comando.
```bash
docker ps
```

## :arrow_forward: Configurações do Prisma ORM
> Esses são os comandos e configurações do prisma.

✨ Para gerenciamento do banco de dados vamos utilizar o ORM `Prima`, para isso execute o comando.
```bash
pnpm i -D prisma
```
✨ Agora para inicializar o prisma execute o comando.
```bash
npx prisma init
```
✨ Para criar as tabelas no banco de dados, execute o seguinte.
```bash
npx prisma migrate dev
```
✨ O prisma possui uma interface integrada que permite navegar pelo banco de dados, para abrir essa interface execute o comando.
```bash
npx prisma studio
```
# :closed_book: License

Released in 2024 :closed_book: License
Made with love by  Laciene Melo [#lacymelo](https://github.com/lacymelo) 🚀.
This project is under the [MIT license](./LICENSE).
Give a ⭐️ if this project helped you!


