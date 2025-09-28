"use client";

import React, { ReactNode, useState } from "react"

interface BgProps{

    bgToggle :boolean,
    setBgtoggle:(bgToggle:boolean)=>void
}

export const isBg = React.createContext<BgProps | null>(null)


export const Bgenabled = ({children}:{children:ReactNode}) =>
{
    const [bgToggle,setBgtoggle] = useState<boolean>(true);
    return(
        <>

        <isBg.Provider value={{bgToggle,setBgtoggle}}>
{children}
        </isBg.Provider>

        </>
    )

}
