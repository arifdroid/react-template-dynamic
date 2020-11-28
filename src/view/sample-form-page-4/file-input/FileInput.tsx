import { List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { Controller } from 'react-hook-form';
import Dropzone from 'react-dropzone';
import { CloudUpload, InsertDriveFile } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#eee",
        textAlign: "center",
        cursor: "pointer",
        color: "#333",
        padding: "10px",
        marginTop: "20px",
    },
    icon: {
        marginTop: "16px",
        color: "#888888",
        fontSize: "42px",
    },
}))

interface Props {
    control:any,
    name:any
}

const FileInput = ({control,name}:Props) => {

    const styles = useStyles();

    return (

        <Controller control={control}
        name={name}
        render={({onChange, onBlur, value})=>{
            return(
                <>

                    <Dropzone onDrop={onChange}>
                        {({getRootProps, getInputProps})=>(
                            <Paper
                            variant='outlined'
                            className={styles.root}
                            {...getRootProps()}
                            >
                                <CloudUpload
                                className={styles.icon}
                                ></CloudUpload>
                                <input {...getInputProps()} name={name} onBlur={onBlur}></input>
                                <p>Drag 'n' drop files here </p>
                            </Paper>
                            
                        )}
                    </Dropzone>

                        <List>{value?.length >0 &&value.map((f:any,index:any)=>(
                            <ListItem key={index}>
                                <ListItemIcon><InsertDriveFile></InsertDriveFile></ListItemIcon>
                                <ListItemText primary={f.name} secondary={f.size}></ListItemText>
                            </ListItem>
                        ))}</List>

                </>
            )
        }}>

            <div>this is file input</div>


        </Controller>
    )
}

export default FileInput