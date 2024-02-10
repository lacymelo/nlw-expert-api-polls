import { appRoutes } from "@/routes"
import cookie from '@fastify/cookie'
import fastify from "fastify"

import websocket from "@fastify/websocket"
import { pollResults } from "@/ws/poll-results"

const app = fastify()

app.register(cookie, {
    secret: 'key-nwl-poll',
    hook: 'onRequest',
    parseOptions: {}
})

app.register(websocket)

app.register(appRoutes)
app.register(pollResults)

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running!')
})