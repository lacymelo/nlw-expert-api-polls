import { VoteRepository } from "@/repositories/vote-repository";

interface UserPreviousVotePollRequestUseCase {
    sessionId: string
    pollId: string
}

export class UserPreviousVotePollUseCase {
    constructor(private readonly prismaRepository: VoteRepository) { }

    async execute({ sessionId, pollId }: UserPreviousVotePollRequestUseCase) {
        const vote = await this.prismaRepository.userPreviousVotePoll(sessionId, pollId)

        return vote
    }
}