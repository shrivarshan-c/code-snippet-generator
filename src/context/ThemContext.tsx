"use client"

import React, {  ReactNode, useState } from "react";
import * as prismThemes from "react-syntax-highlighter/dist/esm/styles/prism";

interface ThemeProps{
    theme:keyof typeof prismThemes,
    setTheme:(theme:keyof typeof prismThemes)=>void
}

export const ThemeContext = React.createContext<ThemeProps | null>(null);

export const Them = ({children}:{children:ReactNode})=>{

    const [theme,setTheme] = useState("okaidia" as keyof typeof prismThemes); // Theme is stored as a string
    return(
        <>
<ThemeContext.Provider value={{theme,setTheme}}>
{children}
</ThemeContext.Provider>

        </>
    )
}
