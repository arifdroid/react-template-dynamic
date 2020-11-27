import React, { forwardRef } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { TextField } from "@material-ui/core";

const useStyles = makeStyles(() => ({

    root: {

    }
}))


// const Input:React.FC = ()=>{
//     return <></>
// }F

const Input = forwardRef((props, ref) =>{ 

    console.log('\n\nref passed ->', ref)

   return (<TextField variant='outlined' margin='normal' 
   inputRef={ref} {...props} />)})

export default Input