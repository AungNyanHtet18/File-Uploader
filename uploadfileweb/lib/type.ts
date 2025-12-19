import * as lucideIcons from 'lucide-react'
import z from 'zod'

export type IconType = keyof typeof lucideIcons

export type ClientError = {
     type: string
     messages: string[]
}


export const FormSchema = z.object({
     image: z.file(),
     name: z.string().nonempty("Enter user name"),
     email: z.string().nonempty("Enter Email").regex(z.regexes.email,"Invalid Email Format"),
     phone: z.string().regex(z.regexes.number, "Phone number must be digit")
})

export  type FormType = z.infer<typeof FormSchema>


export type User ={
    id: number
    name: string
    email: string
    phone: string
    imagePath: string
}


