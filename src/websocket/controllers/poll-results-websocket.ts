import { voting } from "@/useCases/voting-pub-sub";
import { getPollSchema } from "@/utils/validations";
import { SocketStream } from "@fastify/websocket";
import { FastifyRequest } from "fastify";

export async function pollResultsWebSocket(connection: SocketStream, request: FastifyRequest) {
    const { pollId } = getPollSchema.parse(request.params)

    voting.subscribe(pollId, (message) => {
        connection.socket.send(JSON.stringify(message))
    })
}