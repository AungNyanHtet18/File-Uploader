import { IconType } from "@/lib/type"
import IconComponent from "./icon-component"

type PageTitle ={ 
  title: string
  textSize?: string
  iconType?: IconType
}

export default function PageTitle({title, textSize, iconType} : PageTitle) {
     return (
        <div className="flex items-center gap-2">
            {
              iconType && <IconComponent icon={iconType} className="size-8" />
            }
            
            <h2 className={textSize || 'text-xl'}>{title}</h2>
        </div>
     )
}