import { TextField } from '@material-ui/core';
import React from 'react';

// interface Props{
//     type:string,
//     name:string,
    

// }


const InputForward = ({ type, name }:{type:string, name:string},ref:any) => {
    console.log('\n\n=====')
    console.log('\n\nInputForward ref passed  TYPED is ->', ref)
    console.log('=====\n\n')
    return <TextField
        // type={type}
        // name={name}
        variant='outlined' margin='normal'
        inputRef={ref}

    ></TextField>
}

let forwardInput = React.forwardRef(InputForward)

export default forwardInput;