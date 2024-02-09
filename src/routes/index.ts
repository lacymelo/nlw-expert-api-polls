import { createPoll } from "@/http/controllers/create-poll";
import { FastifyInstance } from "fastify";

export async function appRoutes(app: FastifyInstance) {
    app.post('/poll', createPoll)
}