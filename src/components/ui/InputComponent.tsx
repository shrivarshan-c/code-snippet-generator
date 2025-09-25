"use client"
import { useState } from "react";
interface InputTypes{
    type?:string,
    placeholder?:string,
   onChange?:(value:string)=>void
}
export const InputComponent = ({type,placeholder,onChange}:InputTypes)=>{

 const [content,setContent]=useState<string|null>(null);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setContent(e.target.value);
        onChange?.(e.target.value);

    }
    return(
        <>
    <div className="flext justify-center items-center ">
    <div className="">


    <textarea type={type} placeholder={placeholder} onChange={handleChange} className="border-black border-4  w-2xl h-80 p-2 inputDark scrollbar-thin " />
    </div>
    </div>
        </>
    )
}
