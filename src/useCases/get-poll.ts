import { PollRepository } from "@/repositories/poll-repository";

interface GetPollRequestUseCase {
    pollId: string
}
export class GetPollUseCase {
    constructor(private readonly prismaRepository: PollRepository) { }

    async execute({ pollId }: GetPollRequestUseCase) {
        const poll = this.prismaRepository.getPoll(pollId)

        return poll
    }
}