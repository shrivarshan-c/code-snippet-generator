
import { useContext } from "react";

import { isBg } from "@/context/bgEnabled";

export const useBgToggle = ()=>{

    const ctx = useContext(isBg);

    if(!ctx)
    {
        throw new Error("error");
    }

    return ctx;
}
