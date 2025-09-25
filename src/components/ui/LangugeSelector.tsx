"use client";
import React, { useContext } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup

  } from "@/components/ui/select"
import { useLanguage } from "@/hooks/useLanguage";
export const LanguageSelector=()=>{
    const {language,setLanguage} = useLanguage();
return(
    <Select value={language} onValueChange={(value)=>setLanguage(value)}>
    <SelectTrigger className="w-[130px]">
      <SelectValue placeholder="Language" />
    </SelectTrigger>
    <SelectContent className="dropdown-up overflow-y-auto max-h-40" position="popper">
    <SelectGroup>

<SelectItem value="Cpp">C++</SelectItem>
<SelectItem value="C">C</SelectItem>
<SelectItem value="Java">Java</SelectItem>
<SelectItem value="bash">bash</SelectItem>
</SelectGroup>
<SelectGroup>

<SelectItem value="Dart">Dart</SelectItem>
<SelectItem value="rust">rust</SelectItem>
<SelectItem value="Solidity">Solidity</SelectItem>
<SelectItem value="typescript">Typescript</SelectItem>
</SelectGroup>
<SelectGroup>

<SelectItem value="javascript">Javascript</SelectItem>
<SelectItem value="python">Python</SelectItem>
<SelectItem value="go">Go</SelectItem>
<SelectItem value="ruby">Ruby</SelectItem>
<SelectItem value="php">PHP</SelectItem>

</SelectGroup>


    </SelectContent>
  </Select>
)
}
