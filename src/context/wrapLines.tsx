"use client";

import React, { ReactNode, useState } from "react"

interface WrapProps{

    wrap :boolean,
    setWrap:(wrap:boolean)=>void
}

export const wrapContext = React.createContext<WrapProps | null>(null)


export const WrapLines = ({children}:{children:ReactNode}) =>
{
    const [wrap,setWrap] = useState<boolean>(false);
    return(
        <>

        <wrapContext.Provider value={{wrap,setWrap}}>
{children}
        </wrapContext.Provider>

        </>
    )

}
