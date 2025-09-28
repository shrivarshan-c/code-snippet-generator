"use client";
import { ReactNode, useState } from "react";
import React from "react";
interface bgContextProps{
    bg:string,
    setBg:(value:string)=>void
}
import { gradientArray } from "@/constants/gradients";
export const bgContext = React.createContext<bgContextProps|null>(null);

export  const Bg= ({children}:{children:ReactNode})=>{
    const [bg,setBg]= useState<string>(gradientArray[6].gradient as string);

    return(
        <>
           <bgContext.Provider value={{bg,setBg}}>
               {children}
            </bgContext.Provider>
        </>
    )

}
