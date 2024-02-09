import z from 'zod'

export const pollSchema = z.object({
    title: z.string({ required_error: 'Campo título obrigatório.' })
})