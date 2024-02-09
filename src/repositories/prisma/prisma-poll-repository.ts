import { type Prisma } from "@prisma/client";
import { PollRepository } from "../poll-repository";
import { prisma } from "@/lib/prisma";

export class PrismaPollRepository implements PollRepository {
    async create(data: Prisma.PollCreateInput) {
        const poll = await prisma.poll.create({
            data
        })

        return poll
    }
}