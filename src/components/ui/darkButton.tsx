
"use client";
import {DarkIcon} from "@/../public/DarkIcon"
import { LightIcon } from "@/../public/LightIcon"
import { useTheme } from "next-themes"

export const DarkButton=()=>{
    const {theme,setTheme}=useTheme();
    return(
<>
<button onClick={()=>{
 setTheme (theme==="dark"?"light":"dark");
}}>
{theme==="light"?<DarkIcon/>:<LightIcon/>}
</button>

  </>
    )

}
