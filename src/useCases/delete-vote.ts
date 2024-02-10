import { VoteRepository } from "@/repositories/vote-repository";

interface DeleteVoteRequestUseCase {
    voteId: number
}

export class DeleteVoteUseCase {
    constructor(private readonly prismaRepository: VoteRepository) { }

    async execute({ voteId }: DeleteVoteRequestUseCase) {
        const vote = await this.prismaRepository.deleteVote(voteId)

        return vote
    }
}