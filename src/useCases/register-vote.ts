import { type VoteRepository } from "@/repositories/vote-repository";

interface RegisterVoteRequestUseCase {
    sessionId: string
    pollId: string
    pollOptionId: string
}

export class RegisterVoteUseCase {
    constructor(private readonly prismaRepository: VoteRepository) { }

    async execute({ sessionId, pollId, pollOptionId }: RegisterVoteRequestUseCase) {
        const vote = await this.prismaRepository.create({ sessionId, pollId, pollOptionId })

        return vote
    }
}