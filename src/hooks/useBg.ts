import { useContext } from "react";

import { bgContext } from "@/context/bgContext";

export const useBg = ()=>{

    const ctx = useContext(bgContext);

    if(!ctx)
    {
    throw new Error("")
    }


    return ctx;





}
