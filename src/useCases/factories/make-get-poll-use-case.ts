import { PrismaPollRepository } from "@/repositories/prisma/prisma-poll-repository";
import { GetPollUseCase } from "../get-poll";

export function makeGetPollUseCase() {
    const prismaRepository = new PrismaPollRepository()
    const getPoll = new GetPollUseCase(prismaRepository)
    return getPoll
}