'use client'

import PageTitle from "@/components/page-title";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormSchema, FormType } from "@/lib/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { FolderOpen, Save, Trash2, UploadCloud } from "lucide-react";
import { ChangeEvent, RefObject, useRef } from "react";
import { useForm } from "react-hook-form";

export default function Page() {
 
    const fileInputRef = useRef<HTMLInputElement | null>(null)
    
    const form = useForm<FormType>({
       resolver: zodResolver(FormSchema),
       defaultValues: {file: undefined}
    })

    const saveAction = (form: FormType) => {
      if (!form.file) return;
       console.log(JSON.stringify({file: form.file.name}, null , 2));
    }

    const clearAction = ()=> {
       form.reset()
    }


    const changeFile = (e: ChangeEvent<HTMLInputElement>) => {
       const file = e.target.files?.[0]

       if(file) {
         form.setValue("file", file, {shouldValidate: true} )
       }
    }


    const imageFile = form.watch('file')

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
                  <h3>Member Details</h3>
                  
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

