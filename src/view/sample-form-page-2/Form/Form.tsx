import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme)=>({
    root:{
        width:'100%',
        display:'flex',
        flexDirection:'column'
    }
}))

interface Props{
    children:any,
    onSubmit:any
}

const Form = ({children,onSubmit,...props}:Props)=>{

    const styles = useStyles();

    return <form className={styles.root} {...props} onSubmit={onSubmit}>{children}</form>
}

export default Form;