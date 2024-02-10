<div align="justify">
  <p align="center">
    <img alt="Logo NLW Expert - Rocketseat" src="./src/assets/logo.png" width="300px" />
  </p>

  <h1 align="center">
    🤖 Trilha Node: API Polls
  </h1>

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
🛠️ Com arquivo criado, você precisará fazer algumas configurações, utilizando essa string de busca no google `node target mapping github`, você vai encontrar um link para as principais configurações que a microsoft indica para cada versão do node, para a minha versão do node foi recomenda a seguinte a alteração de configuração no `tsconfig.json`.
```bash
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "node16",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    },
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```
✨ Converter o código TypeScript para JavaScript para uso com o Node pode ser trabalhoso. Para evitar essa complexidade, vamos instalar a biblioteca `tsx``, que automatiza esse processo de conversão. Para instalar, execute o seguinte comando.
```bash
pnpm i tsx -D
```
🛠️ No `package.json`, vamos adicionar uma configuração responsável por executar o servidor, para isso adicione em `scripts` a seguinte estrutura.
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
✨ Quando um usuário vota em uma enquete, o voto deve ser registrado apenas uma vez. Para resolver esse requisito, iremos utilizar a biblioteca `@fastify/cookie` para lidar com cookies. Para instalar essa dependência, utilize o seguinte comando.
```bash
pnpm i @fastify/cookie
```
🛠️ Acessando a documentação do `fastify/cookie`, você vai encontrar a seguinte configuração.
```bash
app.register(cookie, {
    secret: "key-nwl-poll",
    hook: 'onRequest',
    parseOptions: {}
})
```
🛠️ A configuração deve ser adicionada no arquivo `sever.ts` da sua aplicação, o parâmetro `secret` da configuração pode ser definido como você quiser.

## :arrow_forward: Configurações do Docker
> Esses são os comandos e configurações do docker.

🛠️ Crie um arquivo de configuração `docker-compose.yml`, com as seguintes definições.
```bash
version: '3.7'

services:
  postgres:
    image: bitnami/postgresql:latest
    ports:
      - '5432:5432'
    environment:
      - POSTGRES_USER=docker
      - POSTGRES_PASSWORD=docker
      - POSTGRES_DB=polls
    volumes:
      - polls_pg_data:/bitnami/postgresql

  redis:
    image: bitnami/redis:latest
    environment:
      - ALLOW_EMPTY_PASSWORD=yes
    ports:
      - '6379:6379'
    volumes:
      - 'polls_redis_data:/bitnami/redis/data'

volumes:
  polls_pg_data:
  polls_redis_data:
```
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


