import { TextField } from "@material-ui/core";
import React,{forwardRef} from "react";

interface Props{
    type:string,
    name:string
}

const Input =({type,name, ...props}:Props,ref:any)=>{
    return <TextField
    inputRef={ref} 
    type={type}
    name={name}
    variant='outlined' margin='normal'
    {...props}></TextField>
}

let forwardInput = forwardRef(Input)

export default forwardInput;