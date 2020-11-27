import { TextField } from '@material-ui/core';
import React from 'react';

interface Props{
    type:string,
    name:string,
    

}

// const InputForward : React.FC<Props>= ({ type, name },ref:any) => {
//     console.log('\n\n=====')
//     console.log('\n\nInputForward ref passed  TYPED is ->', ref)
//     console.log('=====\n\n')
//     return <TextField
//         type={type}
//         name={name}
//         variant='outlined' margin='normal'
//         inputRef={ref}

//     ></TextField>


const InputForward = ({ type, name }:Props, ref:any ) => {
    // console.log('\n\n=====')
    console.log('\n\nInputForward ref passed  TYPED is ->', ref)
    // console.log('=====\n\n')
    return <TextField
        type={type}
        name={name}
        variant='outlined' margin='normal'
        inputRef={ref}

    ></TextField>
}

let forwardInput = React.forwardRef(InputForward)

export default forwardInput;