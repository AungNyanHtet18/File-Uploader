import { toast } from "sonner"
import { ClientError } from "./type"

export async function exceptionHandle(func: ()=> Promise<void>) {
    
    try {
        await func()
    }catch(e: any) {
        let messages: string[] = [e.message ||  "unknown error"]

        if(e.message) {
            const error = JSON.parse(e.message) // error == Javascript Object
            console.log(error)

            if(error?.type == "Client Error") {
            const clientError = error as ClientError
            messages = clientError.messages
            }    
        }

        toast("Error occured",
            {description: messages})

    }
}