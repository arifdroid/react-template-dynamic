import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    root:{
        margin: theme.spacing(3,0,2)
    }
}))

const PrimaryButton:React.FC = ({children,...props})=>{

    const styles = useStyles();

    return (
    <Button type="submit" fullWidth
    variant="contained"
    color='primary'
    className={styles.root}
    {...props}>{children}</Button>
    )
}
export default PrimaryButton;