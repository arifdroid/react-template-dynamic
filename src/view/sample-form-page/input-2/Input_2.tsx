import { TextField } from "@material-ui/core";
import React,{ forwardRef, useRef } from "react";

interface Props{
    name:string,
    // label:string,
    type:string,
    ref:any,
    placeholder:string,
    // error:any
}

const Input_2:React.FC<Props> =({name,  type, 
    ref,
     placeholder,
    //  error,
      ...rest })=>{

    // console.log('\ninput_2 ref is->', ref)
    console.log('\n\n')

    return(
    <TextField
    name={name}
    // label={label}
    type={type}
    inputRef={ref}
    placeholder={placeholder}
    fullWidth
    variant="outlined"
    style={{marginBottom:"10px"}}
    // error={error}
    {...rest}    
    >

    </TextField>)
}

export default Input_2;