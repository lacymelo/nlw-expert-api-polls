import { getPollSchema } from "@/utils/validations";
import { voting } from "@/utils/voting-pub-sub";
import { FastifyInstance } from "fastify";

export async function pollResults(app: FastifyInstance) {
    app.get('/polls/:pollId/results', {
        websocket: true
    }, (connection, request) => {

        const { pollId } = getPollSchema.parse(request.params)

        voting.subscribe(pollId, (message) => {
            connection.socket.send(JSON.stringify(message))
        })
    })
}