import { TextField } from '@material-ui/core';
import React from 'react';

// interface Props{
//     type:string,
//     // name:string,
//     // ref:any,

// }

const InputForward = ({ type, name }, ref) => {

    // console.log('\n\nInputForward ref passed is ->', ref)
    return <TextField
        // type={type}
        // name={name}
        variant='outlined' margin='normal'
        inputRef={ref}

    ></TextField>
}

let forwardInput = React.forwardRef(InputForward)

// const Input = ({},ref)=>{
//     return(
//         <input
//         ref={ref}
//         ></input>
//     )
// }

// let forwardInput = React.forwardRef(Input)


export default forwardInput;