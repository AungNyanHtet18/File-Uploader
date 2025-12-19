import { Circle } from "lucide-react";
import { Button } from "./ui/button";

export default function AccountStatusAction ({title, circleColor, buttonName, buttonColor}: {title: string, circleColor?: string, buttonName: string, buttonColor?: string}) {
     return (
        <div className="flex justify-between items-center px-4 py-4">
            <div className="flex gap-2">
                <p className="text-zinc-600">{title}</p>
                <Circle size={25} className={`fill-${circleColor || `green`}-500 stroke-none mr-auto`}/>
            </div>
            <Button className={`w-30  rounded-3xl bg-gradient-to-tr ${buttonColor || `from-green-400 to-green-600 hover:bg-gradient-to-bl`} transition-all duration-500 cursor-pointer`}>
                {buttonName}
            </Button>
        </div>
     )
}