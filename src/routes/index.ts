import { createPoll } from "@/http/controllers/create-poll";
import { getPoll } from "@/http/controllers/get-poll";
import { voteOnPoll } from "@/http/controllers/vote-on-poll";
import { pollResultsWebSocket } from "@/websocket/controllers/poll-results-websocket";
import { FastifyInstance } from "fastify";

export async function appRoutes(app: FastifyInstance) {
    // cria enquete
    app.post('/poll', createPoll)

    // Recuperar detalhes de uma  enquete
    app.get('/poll/:pollId', getPoll)

    // Cria votos em uma enquete
    app.post('/poll/:pollId/votes', voteOnPoll)

    // mostra o resultado dos votos em real time
    app.get('/polls/:pollId/results', { websocket: true }, pollResultsWebSocket)
}