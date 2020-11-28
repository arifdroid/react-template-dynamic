import { TextField } from "@material-ui/core";
import React,{forwardRef} from "react";

interface Props{
    type:string,
    name:string,
    error:any,
    helperText:string
}

const Input =({type,name,error,helperText, ...props}:Props,ref:any)=>{
    return <TextField
    inputRef={ref} 
    type={type}
    name={name}
    helperText={helperText}
    error={error}
    variant='outlined' margin='normal'
    {...props}></TextField>
}

let forwardInput = forwardRef(Input)

export default forwardInput;