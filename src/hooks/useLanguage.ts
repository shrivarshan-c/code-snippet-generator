"use client";
import { useContext } from "react";
import {LanguageContext} from "@/context/LanguageContext";
export const useLanguage = ()=>{
    const ctx = useContext(LanguageContext);

    if(!ctx)
    {
        throw new Error("Null value found in useLanguage");
    }
    return ctx;
}

