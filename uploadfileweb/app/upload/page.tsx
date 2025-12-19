'use client'

import CustomInput from "@/components/custom/custom-input";
import PageTitle from "@/components/page-title";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ClientError, FormSchema, FormType } from "@/lib/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { FolderOpen, Save, Trash2, UploadCloud } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, RefObject, useRef } from "react";
import { useForm } from "react-hook-form";
import * as userClient from '@/lib/User/user-client'
import { exceptionHandle } from "@/lib/exception-handler";


export default function Page() {
   
   const router = useRouter();

   const fileInputRef = useRef<HTMLInputElement | null>(null)
    
    const form = useForm<FormType>({
       resolver: zodResolver(FormSchema),
       defaultValues: {
         image: undefined,
         name: "",
         email: "",
         phone: ""
      }

    })

    const saveAction = async (form: FormType) => {
      
      if (!form.image) return;
       console.log(JSON.stringify({file: form.image.name}, null , 2));
      
         const formData = new FormData();
         formData.append("username",form.name);
         formData.append("email",form.email);
         formData.append("phone",form.phone);
         formData.append("image",form.image);

        exceptionHandle(async ()=> {
            const result = await userClient.save(formData)
             router.push(`/info/${result.id}`)
        }) 
    }

    const clearAction = ()=> {
       form.reset()
    }

    const changeFile = (e: ChangeEvent<HTMLInputElement>) => {
       const file = e.target.files?.[0]

       if(file) {
         form.setValue("image", file, {shouldValidate: true} )
       }
    }


    const imageFile = form.watch('image')

     return (
       <section className="py-4 px-8 h-dvh">
          <PageTitle title="Member Info" textSize="font-semibold text-2xl"/>
         
         <Form {...form}>
         <form onSubmit={form.handleSubmit(saveAction)}>
            <div className="grid grid-cols-3 gap-6">
               <div className="col-span-1 space-y-4">
                  <h2 className="text-lg">Select and upload the image of your choice</h2>
                  <div className="border-2 border-dashed rounded-xl h-60 flex flex-col items-center justify-center space-y-1">
                     { imageFile ? 
                     <img src={URL.createObjectURL(imageFile)} className="w-full h-full object-cover rounded-xl"/> :
                     <div>
                           <UploadCloud size={45}/>
                           <h5 className="mt-2 font-semibold text-[17px]">Choose a file or drag & drag it here</h5>
                           <p className="text-gray-400 font-light">JPEG, PNG and MP4 format, up to 50 MB</p>
                     </div>
                     }
                  </div>

                  <input onChange={changeFile} ref={fileInputRef} type="file" className="hidden" />

               <ImageButton fileInputRef={fileInputRef} imageFile={imageFile} clearAction={clearAction} />
                     
               </div>
               <div className="col-span-2">
                  <h3 className="text-xl font-semibold mb-2">Member Details</h3>
                  <CustomInput  control={form.control} path="name" label="User Name" className="mb-2 text-3xl w-3/4" />
                  <CustomInput  control={form.control} path="email" label="Email" className="mb-2 text-3xl w-3/4 mt-4" />
                  <CustomInput  control={form.control} path="phone" label="Phone" className="mb-2 text-3xl w-3/4 mt-4" />
               </div>
            </div>
         </form>
         </Form>
       </section>
     )
}


function ImageButton({fileInputRef, imageFile, clearAction} : {fileInputRef: RefObject<HTMLInputElement | null>, imageFile?: File, clearAction: ()=> void }) {
    return (
         <div className="flex justify-center">
               <Button onClick={() => fileInputRef.current?.click()} type="button">
                  <FolderOpen/>Select File
               </Button>

               <Button disabled={!imageFile} onClick={clearAction} type="button" className="ms-2">
                  <Trash2/>Clear
               </Button>

               <Button disabled={!imageFile} type="submit" className="ms-2">
                  <Save/>Save Form
               </Button>
         </div>
    )
}

