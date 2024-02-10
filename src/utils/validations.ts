import z from 'zod'

export const pollSchema = z.object({
    title: z.string({ required_error: 'Campo título obrigatório.' }),
    options: z.array(z.string(), { required_error: 'Campo options obrigatório.' })
})

export const getPollSchema = z.object({
    pollId: z.string().uuid()
})

export const voteOnPollBodySchema = z.object({
    pollOptionId: z.string().uuid()
})

export const voteOnPollParamsSchema = z.object({
    pollId: z.string().uuid()
})