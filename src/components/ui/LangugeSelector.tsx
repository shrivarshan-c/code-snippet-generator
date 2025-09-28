"use client";
import React from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup
} from "@/components/ui/select"
import { useLanguage } from "@/hooks/useLanguage";

// @ts-expect-error: importing all HLJS languages dynamically for selector
import * as language from "react-syntax-highlighter/dist/esm/languages/hljs";
const Langu = Object.keys(language).map((key) => ({ val: key }));
export const LanguageSelector=()=>{
    const {language,setLanguage} = useLanguage();
return(
    <Select value={language} onValueChange={(value)=>setLanguage(value)}>
    <SelectTrigger className="w-[130px]">
      <SelectValue placeholder="Language" />
    </SelectTrigger>
    <SelectContent className="dropdown-up overflow-y-auto max-h-60" position="popper">
<SelectGroup>
  {
    Langu.map(({val}:{val:string})=>{

        return(
            <SelectItem key={val} value={val}>{val}</SelectItem>
        )
    })
  }
</SelectGroup>
    </SelectContent>
  </Select>
)
}
