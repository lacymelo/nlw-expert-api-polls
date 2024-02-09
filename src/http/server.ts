import { appRoutes } from "@/routes"
import fastify from "fastify"

const app = fastify()

app.register(appRoutes)

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running!')
})