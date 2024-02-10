import { appRoutes } from "@/routes"
import cookie from '@fastify/cookie'
import fastify from "fastify"
import websocket from "@fastify/websocket"

const app = fastify()

app.register(cookie, {
    secret: 'key-nwl-poll',
    hook: 'onRequest',
    parseOptions: {}
})

// protocolo websocket
app.register(websocket)

// rotas http e websocket
app.register(appRoutes)

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running!')
})