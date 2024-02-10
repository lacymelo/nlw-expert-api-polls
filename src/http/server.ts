import { appRoutes } from "@/routes"
import cookie from '@fastify/cookie'
import fastify from "fastify"
import websocket from "@fastify/websocket"
import { env } from "@/env"

const app = fastify()

app.register(cookie, {
    secret: env.KEY_SECRET_COOKIE,
    hook: 'onRequest',
    parseOptions: {}
})

// protocolo websocket
app.register(websocket)

// rotas http e websocket
app.register(appRoutes)

app.listen({ port: env.PORT }).then(() => {
    console.log('HTTP server running!')
})