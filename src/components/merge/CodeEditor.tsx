"use client";
import { useState } from "react"
import SyntaxHighlighter from "react-syntax-highlighter";
import doco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco'
import { InputComponent } from "../ui/InputComponent";
import { LanguageSelector } from "../ui/LangugeSelector";

export const CodeEditor =()=>{
    const [code,setCode] = useState<string|null>("");

    return(
        <>
        {/* <div className="flex flex-col ">


        <InputComponent type="string" placeholder="Paste Your Code Snippet" onChange={(e)=>{setCode(e)}} />

        <SyntaxHighlighter language ="javascript" style = {doco}>
          {code||"//Your Code Snippet will Appear Here"}
        </SyntaxHighlighter>

</div> */}


        </>
    )
}
