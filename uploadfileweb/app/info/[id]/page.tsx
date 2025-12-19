import AccountStatusAction from "@/components/account-status-action";
import FlexComponent from "@/components/flex-component";
import { Button } from "@/components/ui/button";
import { findById } from "@/lib/User/user-client";
import { ClientRequest } from "@/lib/data-fetching";
import { Circle, Search } from "lucide-react";
import Image from "next/image";

export default async function Page({params} : {params: Promise<{id: string}>}) {

   const {id} = await params 

   const result = await findById(id)
   console.log(result.imagePath);

     return (
      <div className="flex h-full gap-12">
         <div className="flex-1 border rounded-3xl shadow-lg w-full ">
            <Image src={`${ClientRequest}${result.imagePath}`} width={100} height={100} alt="User Image" className="rounded-t-3xl object-cover" style={{width: "100%", height: "55%"}} unoptimized/>

            <FlexComponent>
               <h3 className="text-2xl font-semibold">My Profile</h3>
               <div className="text-zinc-400 text-right">
                  <p>Last Minute:  07,Aug,2024</p>
                  <p>Merchant Street, New York (US)</p>
               </div>
            </FlexComponent>

            <FlexComponent className="underline underline-offset-5 text-[16px]">
               <p className="text-zinc-600">{result.name}</p>
               <p>{result.phone}</p>
            </FlexComponent>

            <div className="px-5 py-3 underline underline-offset-5 text-[16px]">
               <p className="text-zinc-600">{result.email}</p>
            </div>

            <FlexComponent>
                <p className="text-rose-600 font-medium ">SMS alerts activation</p>
                <Circle size={25} className="fill-green-500 stroke-none mr-auto"/>
            </FlexComponent>

            <div className="flex justify-center">
               <Button className="w-30 rounded-3xl bg-gradient-to-tr from-rose-400 to-purple-500 hover:bg-gradient-to-bl  transition-all duration-500 cursor-pointer">
                  Next
               </Button>
            </div>
         </div>

         <div className="flex-1  flex flex-col  gap-6">
            <div className="flex-1 rounded-3xl border-2 shadow-md">
               <div className="flex border-b-1 border-gray-300 rounded-t-3xl h-20 px-4 py-5 justify-center">
                  <div className="relative">
                     <input type="text" className="rounded-l-4xl px-1 py-1 w-100 text-2xl border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 z-0 "  />
                     <Search className="absolute right-3 top-5  -translate-y-3"/>
                  </div>
                  <Button className= "h-11 w-20 rounded-r-3xl rounded-l-none bg-gray-200 text-black hover:bg-black hover:text-white  ">
                     Edit
                  </Button>
               </div>

               <FlexComponent className="mt-3">
                  <div>
                     <p className="text-zinc-600">Active Account</p>
                     <p className="text-zinc-800">035 383 385 2987</p>
                  </div>

                  <Button className="w-30  rounded-3xl bg-gradient-to-tr from-rose-500 to-purple-500 hover:bg-gradient-to-bl  transition-all duration-500 cursor-pointer">
                      Block Account
                   </Button>
               </FlexComponent>

               <FlexComponent>
                  <div>
                     <p className="text-zinc-600">Block Account</p>
                     <p className="text-zinc-800">035 383 385 2987</p>
                  </div>

                  <Button className="w-30  rounded-3xl bg-gradient-to-tr from-green-400 to-green-600 hover:bg-gradient-to-bl  transition-all duration-500 cursor-pointer">
                      Block Account
                   </Button>
               </FlexComponent>
 
            </div>

            <div className="flex-1 rounded-3xl border-2 shadow-md">
               <div className="flex justify-between items-center  border-b-2 px-4 py-3">
                  <h3 className="text-2xl font-semibold">My bills</h3>
                   <Button className= "h-11 w-25 rounded-3xl  bg-gray-200 text-black hover:bg-black hover:text-white  ">
                     Filter By
                  </Button>
               </div>

               <AccountStatusAction title="Phone Bill" buttonName="Not Paid"/>
               <AccountStatusAction title="Internet bill" circleColor="red" buttonName="Not Paid" buttonColor="from-rose-500 to-purple-500"/>
               <AccountStatusAction title="House Rent" buttonName="Not Paid"/>
               <AccountStatusAction title="Income Tax" buttonName="Not Paid"/>
               
               
            </div>
           
         </div>
      </div>
     )
}