import { Prisma } from "@prisma/client";
import { VoteRepository } from "../vote-repository";
import { prisma } from "@/lib/prisma";

export class PrismaVoteRepository implements VoteRepository {
    async create(data: Prisma.VoteUncheckedCreateInput) {
        const vote = await prisma.vote.create({
            data
        })

        return vote
    }

    async userPreviousVotePoll(sessionId: string, pollId: string) {
        const vote = await prisma.vote.findUnique({
            where: {
                sessionId_pollId: {
                    sessionId,
                    pollId
                }
            }
        })

        return vote
    }

    async deleteVote(voteId: number) {
        const vote = await prisma.vote.delete({
            where: {
                id: voteId
            }
        })

        return vote
    }
}