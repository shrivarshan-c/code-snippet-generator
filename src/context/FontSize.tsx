import React, { ReactNode, useState } from "react";

interface FontSizeProps{
    fontsize:string,
    setFontsize?:(value:string)=>void
}


const FontSizeContext = React.createContext<FontSizeProps|null>(null);
export const FontSize = ({children}:{children:ReactNode})=>
{
    const [fontsize,setFontsize]=useState("");
    return(
        <>

        <FontSizeContext.Provider value={{fontsize,setFontsize}}>
            {children}
        </FontSizeContext.Provider>


        </>
    )

}
