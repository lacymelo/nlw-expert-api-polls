import { appRoutes } from "@/routes"
import cookie from '@fastify/cookie'
import fastify from "fastify"

const app = fastify()

app.register(cookie, {
    secret: 'key-nwl-poll',
    hook: 'onRequest',
    parseOptions: {}
})

app.register(appRoutes)

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running!')
})