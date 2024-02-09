import { type PollRepository } from "@/repositories/poll-repository";
interface RegisterPollRequestUseCase {
    title: string
    options: string[]
}

interface RegisterPollResponseUseCase {
    pollId: string
}

export class RegisterPollUseCase {
    constructor(private readonly prismaRepository: PollRepository) { }

    async execute({ title, options }: RegisterPollRequestUseCase): Promise<RegisterPollResponseUseCase> {
        const poll = await this.prismaRepository.create({ title, options })

        return { pollId: poll.id }
    }
}