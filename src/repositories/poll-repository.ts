import { type Poll, type Prisma } from '@prisma/client'

export interface Option {
    id: string
    title: string
}
export interface PollGetInput {
    id: string
    title: string
    createdAt: Date | string
    updatedAt: Date | string
    options: Option[]
}

export interface PollRepository {
    create: (data: Prisma.PollCreateInput) => Promise<Poll>
    getPoll: (pollId: string) => Promise<PollGetInput | null>
}