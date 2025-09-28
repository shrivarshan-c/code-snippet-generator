"use client";
import { ReactNode, useState } from "react";
import React from "react";
interface FontContextProps{
    fontSize:number,
    setFontSize: React.Dispatch<React.SetStateAction<number>>;
}

export const FontContext = React.createContext<FontContextProps|null>(null);

export  const Fon = ({children}:{children:ReactNode})=>{
    const [fontSize,setFontSize]= useState<number>(14);

    return(
        <>
           <FontContext.Provider value={{fontSize,setFontSize}}>
               {children}
            </FontContext.Provider>
        </>
    )

}
