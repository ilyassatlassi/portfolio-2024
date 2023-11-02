import z from "zod"

export const FormSchema = z.object({
    id: z.number().optional(),
    name: z.string().min(2, {
        message: "Name must be at least 2 characters"
    }).max(50, { message: 'Name must be at most 50 characters' }),
    email: z.string()
        .email({ message: 'Invalid email address' })
        .min(5, { message: 'Email must be at least 5 characters' })
        .max(100, { message: 'Email must be at most 100 characters' }),
    message: z.string().max(500, { message: 'Message must be at most 500 characters' }).optional()
}).refine(data => data.name || data.email, {
    message: 'Either name or email must be provided'
});