import { TextField } from "@material-ui/core";
import React,{ forwardRef } from "react";

interface Props{
    name:string,
    // label:string,
    type:string,
    ref:any,
    placeholder:string
}

const Input_2:React.FC<Props> =({name,  type, ref, placeholder, ...rest })=>{
    return(
    <TextField
    name={name}
    // label={label}
    type={type}
    inputRef={ref}
    placeholder={placeholder}
    fullWidth
    variant="outlined"

    >

    </TextField>)
}

export default Input_2;