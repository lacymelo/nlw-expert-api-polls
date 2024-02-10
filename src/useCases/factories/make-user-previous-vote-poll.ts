import { PrismaVoteRepository } from "@/repositories/prisma/prisma-vote.repository";
import { UserPreviousVotePollUseCase } from "../user-previous-vote-poll";

export function makeUserPreviousVotePoll() {
    const prismaRepository = new PrismaVoteRepository()
    const register = new UserPreviousVotePollUseCase(prismaRepository)
    return register
}