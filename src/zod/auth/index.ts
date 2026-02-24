import z from "zod"

export const userRegisterSchema = z.object({
  role: z.enum(["STUDENT", "INSTRUCTOR"]),
  name: z.string().min(2, "Name required"),
  email: z.string().email(),
  password: z.string().min(6, "Minimum 6 characters"),
  terms: z.boolean().refine(v => v === true, "You must accept terms"),
})


export const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Minimum 6 characters"),
})

export type UserRegisterValues = z.infer<typeof userRegisterSchema>
export type UserLoginValues = z.infer<typeof userLoginSchema>