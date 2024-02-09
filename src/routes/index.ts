import { createPoll } from "@/http/controllers/create-poll";
import { getPoll } from "@/http/controllers/get-poll";
import { FastifyInstance } from "fastify";

export async function appRoutes(app: FastifyInstance) {
    // cria enquete
    app.post('/poll', createPoll)

    // busca uma enquete
    app.get('/poll/:pollId', getPoll)
}