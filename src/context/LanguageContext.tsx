"use client";
import { ReactNode, useState } from "react";
import React from "react";
interface LanguageContextProps{
    language:string,
    setLanguage:(value:string)=>void
}

export const LanguageContext = React.createContext<LanguageContextProps|null>(null);

export  const Lang = ({children}:{children:ReactNode})=>{
    const [language,setLanguage]= useState<string>("");

    return(
        <>
           <LanguageContext.Provider value={{language,setLanguage}}>
               {children}
            </LanguageContext.Provider>
        </>
    )

}
