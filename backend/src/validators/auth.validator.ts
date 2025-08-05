import {z} from "zod";


export const emailSchema = z.string().trim().email({message:"Tnvalid email format"}).toLowerCase().min(1).max(255);

export const passwordSchema = z.string().trim().min(6, "Password must be at least 6 characters long").max(255);

//used for validating user input during registration
export const registerSchema = z.object({
    name: z.string().trim().min(2, "Name must be at least 2 characters long").max(50, "Name must not exceed 50 characters"),
    email: emailSchema,
    password: passwordSchema,
})


//this schema is used to validate user input during login
export const loginSchema = z.object({
    email:emailSchema,
    password:passwordSchema,
})

export type RegisterSchemaType = z.infer<typeof registerSchema>;
export type LoginSchemaType = z.infer<typeof loginSchema>;