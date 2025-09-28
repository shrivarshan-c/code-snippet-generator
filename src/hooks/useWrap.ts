import { wrapContext } from "@/context/wrapLines";
import { useContext } from "react";


export const useWrap = ()=>{

    const ctx = useContext(wrapContext);

    if(!ctx )
    {
        throw new Error("useWrap must be used within a Theme provider");

    }

    return ctx;
}
