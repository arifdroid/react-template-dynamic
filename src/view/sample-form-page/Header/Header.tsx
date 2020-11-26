
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme)=>({
    root:{
        fontFamily:'Permanent Marker',
        textAlign:'center',
        color:'black',
        textShadow:'1px 1px black',
        fontSize:"30px",
        backgroundColor:'#a6a9ad'
    }
}))

const Header = ()=>{

    const styles = useStyles();


    return(
        <Typography className={styles.root} component='h1'>

            This is the header

        </Typography>
    )
}

export default Header;