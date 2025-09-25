import { CodeEditor } from "@/components/merge/CodeEditor";
import { DarkButton } from "@/components/ui/darkButton";
import { Dock } from "@/components/merge/Dock";
import { InputComponent } from "@/components/ui/InputComponent";


export default function ode()
{
    return(
        <>
         <DarkButton/>
<div className="flex justify-center items-center">
{/*
 <InputComponent  type={"text"} placeholder="Paste Your Code Snippet" /> */}
 <Dock/>

</div>
        </>
    )
}
