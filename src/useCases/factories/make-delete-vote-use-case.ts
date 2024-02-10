import { PrismaVoteRepository } from "@/repositories/prisma/prisma-vote.repository";
import { DeleteVoteUseCase } from "../delete-vote";

export function makeDeleteVoteUseCase() {
    const prismaRepository = new PrismaVoteRepository()
    const deleteRegister = new DeleteVoteUseCase(prismaRepository)
    return deleteRegister
}