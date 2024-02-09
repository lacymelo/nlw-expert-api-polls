import { PrismaPollRepository } from "@/repositories/prisma/prisma-poll-repository";
import { RegisterPollUseCase } from "../register-poll";

export function makePollUseCase() {
    const prismaRepository = new PrismaPollRepository()
    const register = new RegisterPollUseCase(prismaRepository)
    return register
}