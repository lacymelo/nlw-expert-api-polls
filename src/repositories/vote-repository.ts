import { type Vote, type Prisma } from '@prisma/client'

export interface VoteRepository {
    create: (data: Prisma.VoteUncheckedCreateInput) => Promise<Vote>
    userPreviousVotePoll: (sessionId: string, pollId: string) => Promise<Vote | null>
    deleteVote: (voteId: number) => Promise<Vote | null>
}