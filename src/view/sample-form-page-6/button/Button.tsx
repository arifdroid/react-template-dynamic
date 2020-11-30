import { makeStyles, } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3, 0, 2)
    }
}))

interface Props {
    children: any
}

const ButtonThis = ({ children }: Props) => {
    const styles = useStyles();

    // console.log('button props is', props)

    return <Button
        type="submit"
        variant='contained'
        color='primary'
        className={styles.root}
        // {...props}
    >{children}</Button>
}

export default ButtonThis;