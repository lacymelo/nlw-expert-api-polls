import { type Prisma } from "@prisma/client";
import { PollRepository } from "../poll-repository";
import { prisma } from "@/lib/prisma";

export class PrismaPollRepository implements PollRepository {
    async create(data: Prisma.PollCreateInput) {
        const poll = await prisma.poll.create({
            data: {
                title: data.title,
                options: {
                    createMany: {
                        data: data.options?.map(option => {
                            return { title: option }
                        }) || []
                    }
                }
            }
        })

        return poll
    }

    async getPoll(pollId: string) {
        const poll = await prisma.poll.findUnique({
            where: {
                id: pollId
            },
            include: {
                options: {
                    select: {
                        id: true,
                        title: true
                    }
                }
            }
        })

        return poll
    }
}