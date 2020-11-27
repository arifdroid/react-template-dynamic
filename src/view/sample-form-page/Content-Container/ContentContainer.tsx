import React from 'react';
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

//https://www.youtube.com/watch?v=U-iz8b4RExA&ab_channel=MaksimIvanov

const useStyles = makeStyles((theme)=>({
    root:{
        marginTop:theme.spacing(4),
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'#e5e5e5',
        paddingBottom:100
    }
}))

interface Props{
    children:any,

}

const ContentContainer:React.FC<Props> = ({children, ...props})=>{
    // return(<></>)
    const styles = useStyles();
    return(
        <Container className={styles.root} component="main" maxWidth='xs' {...props}>
            {children}
        </Container>
    )
}

export default ContentContainer;