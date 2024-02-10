import { createPoll } from "@/http/controllers/create-poll";
import { getPoll } from "@/http/controllers/get-poll";
import { voteOnPoll } from "@/http/controllers/vote-on-poll";
import { FastifyInstance } from "fastify";

export async function appRoutes(app: FastifyInstance) {
    // cria enquete
    app.post('/poll', createPoll)

    // Recuperar detalhes de uma  enquete
    app.get('/poll/:pollId', getPoll)

    // Cria votos em uma enquete
    app.post('/poll/:pollId/votes', voteOnPoll)
}