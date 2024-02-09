import { makeGetPollUseCase } from "@/useCases/factories/make-get-poll-use-case";
import { getPollSchema } from "@/utils/validations";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getPoll(request: FastifyRequest, reply: FastifyReply) {
    const { pollId } = getPollSchema.parse(request.params)
    let poll

    try {
        const getPoll = makeGetPollUseCase()
        poll = await getPoll.execute({ pollId })
    } catch (err) {
        throw err
    }

    return await reply.status(200).send(poll)
}