'use server'

import { create, find } from "../data-fetching"
import { User } from "../type"


const ENDPOINT = "user"

export async function save(formData: FormData):Promise<{id:number}>{
    return await create({endPoint: ENDPOINT, formData: formData})
}

export async function findById(id: number | string): Promise<User> {
     return await find(`${ENDPOINT}/${id}`)
}


