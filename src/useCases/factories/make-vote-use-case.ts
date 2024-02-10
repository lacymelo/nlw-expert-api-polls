import { PrismaVoteRepository } from "@/repositories/prisma/prisma-vote.repository";
import { RegisterVoteUseCase } from "../register-vote";

export function makeVoteUseCase() {
    const prismaRepository = new PrismaVoteRepository()
    const register = new RegisterVoteUseCase(prismaRepository)
    return register
}