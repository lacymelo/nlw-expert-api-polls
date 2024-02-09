import { makePollUseCase } from "@/useCases/factories/make-poll-use-case";
import { pollSchema } from "@/utils/validations";
import { FastifyReply, FastifyRequest } from "fastify";

export async function createPoll(request: FastifyRequest, reply: FastifyReply) {
    const { title } = pollSchema.parse(request.body)
    let pollId

    try {
        const createPoll = makePollUseCase()

        pollId = await createPoll.execute({ title })
    } catch (err) {
        throw err
    }

    return await reply.status(201).send(pollId)
}