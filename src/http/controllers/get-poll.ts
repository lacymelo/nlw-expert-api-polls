import { redis } from "@/lib/radis";
import { makeGetPollUseCase } from "@/useCases/factories/make-get-poll-use-case";
import { getPollSchema } from "@/utils/validations";
import { FastifyReply, FastifyRequest } from "fastify";

interface OptionsProps {
    id: string
    title: string
}
export interface GetPollResponseUseCase {
    id: string
    title: string
    createdAt: string
    updateAt: string
    options: OptionsProps[]
}

export async function getPoll(request: FastifyRequest, reply: FastifyReply) {
    const { pollId } = getPollSchema.parse(request.params)
    let poll

    try {
        const getPoll = makeGetPollUseCase()
        poll = await getPoll.execute({ pollId })

        const result = await redis.zrange(pollId, 0, -1, 'WITHSCORES')

        const votes = result.reduce((obj, line, index) => {
            if (index % 2 === 0) {
                const score = result[index + 1]
                Object.assign(obj, { [line]: Number(score) })
            }

            return obj
        }, {} as Record<string, number>)

        return await reply.status(200).send({
            poll: {
                id: poll?.id,
                title: poll?.title,
                options: poll?.options?.map((option: any) => {
                    return {
                        id: option.id,
                        title: option.title,
                        score: (option.id in votes) ? votes[option.id] : 0
                    }
                })
            }
        })
    } catch (err) {
        throw err
    }
}