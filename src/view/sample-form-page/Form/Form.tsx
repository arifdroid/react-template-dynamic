import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        // marginTop:theme.spacing(1),
        // color:'green',
        // backgroundColor: 'blue',
        display: "flex",
        flexDirection: 'column'
    }
}))

const Form: React.FC = ({ children, ...props }) => {

    const styles = useStyles();

    return (
        <form className={styles.root} noValidate {...props}>
            {children}
        </form>
    )
}
export default Form;