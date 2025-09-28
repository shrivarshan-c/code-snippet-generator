"use client"
import { useTheme } from "@/hooks/useTheme"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup
  } from "@/components/ui/select"
  import * as prismThemes from "react-syntax-highlighter/dist/esm/styles/prism";
const prismaThemeName = Object.keys(prismThemes);
export const ThemeSelector = ()=>{
const {theme,setTheme}= useTheme();

    return(
        <>
          <Select value={theme} onValueChange={(value)=>setTheme(value as keyof typeof prismThemes)
          }>
           <SelectTrigger className="w-[130px]">
             <SelectValue placeholder="Themes" />
           </SelectTrigger>
           <SelectContent className="dropdown-up overflow-y-auto max-h-60" position="popper">
           <SelectGroup>
{
prismaThemeName.map((themeName)=>{
        return(
            <SelectItem key={themeName}
            value={themeName}>{themeName}</SelectItem>
        )
    })
}
       </SelectGroup>
           </SelectContent>
         </Select>

        </>
    )
}
