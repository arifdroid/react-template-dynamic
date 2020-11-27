import { Container, makeStyles } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme)=>({
    root:{
        marginTop:theme.spacing(4),
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#e5e5e5',
        paddingBottom:50,
        paddingTop:50,
        justifyContent:'center'
    }
}))

interface Props{
    children:any
}

const ContentContainer = ({children, ...props}:Props)=>{

    const styles = useStyles();

    return( 
    <Container className={styles.root} component='main' maxWidth='xs' {...props}>
        {children}
    </Container>)
}
export default ContentContainer;