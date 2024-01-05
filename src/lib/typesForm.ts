import z from "zod"

export const FormSchema = z.object({
    id: z.number().optional(),
    email: z.string()
        .email({ message: 'Invalid email address' })
        .min(5, { message: 'Email must be at least 5 characters' })
        .max(100, { message: 'Email must be at most 100 characters' }),
    message: z.string().max(500, { message: 'Message must be at most 500 characters' }).optional()
}).refine(data => data.email || data.message, {
    message: 'Either  email or message must be provided'
});