import React from "react";

export default function FlexComponent({children, className} : {children: React.ReactNode, className?: string}) {
     return (
        <div className={`flex justify-between gap-3 px-5 py-3 ${className} `}>
            {children}
        </div>
     )
}