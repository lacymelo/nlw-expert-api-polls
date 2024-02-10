import { redis } from "@/lib/radis";
import { makeDeleteVoteUseCase } from "@/useCases/factories/make-delete-vote-use-case";
import { makeUserPreviousVotePoll } from "@/useCases/factories/make-user-previous-vote-poll";
import { makeVoteUseCase } from "@/useCases/factories/make-vote-use-case";
import { voteOnPollBodySchema, voteOnPollParamsSchema } from "@/utils/validations";
import { randomUUID } from "crypto";
import { FastifyReply, FastifyRequest } from "fastify";

export async function voteOnPoll(request: FastifyRequest, reply: FastifyReply) {
    const { pollId } = voteOnPollParamsSchema.parse(request.params)
    const { pollOptionId } = voteOnPollBodySchema.parse(request.body)
    let vote
    let previousVote

    let { sessionId } = request.cookies

    if (sessionId) {
        const getPreviousVote = makeUserPreviousVotePoll()
        previousVote = await getPreviousVote.execute({ sessionId, pollId })

        if (previousVote && previousVote.pollOptionId !== pollOptionId) {
            const deleteVote = makeDeleteVoteUseCase()
            let deletePreviousVote = await deleteVote.execute({ voteId: previousVote.id })

            if (deletePreviousVote) {
                await redis.zincrby(pollId, -1, previousVote.pollOptionId)
            }
        } else {
            return reply.status(400).send({ message: 'you already voted on this poll' })
        }
    }

    if (!sessionId) {
        sessionId = randomUUID()

        reply.setCookie('sessionId', sessionId, {
            path: '/', // acessível por todos as rotas desta app
            maxAge: 60 * 60 * 24 * 30, // days
            signed: true, // cookie assinado
            httpOnly: true, // acessível somente pelo backend
        })
    }

    try {
        const createVote = makeVoteUseCase()
        vote = await createVote.execute({ sessionId, pollId, pollOptionId })
    } catch (err) {
        throw err
    }

    await redis.zincrby(pollId, 1, pollOptionId)

    return await reply.status(200).send(vote)
}