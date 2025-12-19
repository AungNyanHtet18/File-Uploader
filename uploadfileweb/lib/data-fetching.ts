import 'server-only'

import { User } from "./type"

export const ClientRequest = "http://localhost:8080"

export async function create({endPoint, formData} : {endPoint: string, formData: FormData}): Promise<{id:number}> {
     const response =  await fetch(`${ClientRequest}/${endPoint}`, {
         method: "POST",
         body: formData
    })

    if(!response.ok) {
         throw new Error("Upload Failed")
    }

    return await response.json()
}


export async function find(endPoint: string): Promise<User> {
     const response =  await fetch(`${ClientRequest}/${endPoint}`)
                              
               
    if(!response.ok) {
         throw new Error("Upload Failed")
    }

    return await response.json()
}