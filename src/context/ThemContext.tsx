"use client";
import { ReactNode, useState } from "react";
import React from "react";
interface ThemeContextProps{

    themes:string,
    setTheme?:(value:string)=>void
}

const ThemeContext= React.createContext<ThemeContextProps|null>(null);

export const Lang = ({children}:{children:ReactNode})=>{
const [themes,setTheme]= useState<string>("");


    return(
        <>
           <ThemeContext.Provider value={{themes,setTheme}}>
               {children}
            </ThemeContext.Provider>
        </>
    )

}

export default ThemeContext;
