import { type PollRepository } from "@/repositories/poll-repository";

interface RegisterPollRequestUseCase {
    title: string
}

interface RegisterPollResponseUseCase {
    pollId: string
}

export class RegisterPollUseCase {
    constructor(private readonly prismaRepository: PollRepository) { }

    async execute({ title }: RegisterPollRequestUseCase): Promise<RegisterPollResponseUseCase> {
        const poll = await this.prismaRepository.create({ title })

        return { pollId: poll.id }
    }
}