import * as lucideIcons from 'lucide-react'
import z from 'zod'

export type IconType = keyof typeof lucideIcons

export const FormSchema = z.object({
     file: z.file()
})

export  type FormType = z.infer<typeof FormSchema>