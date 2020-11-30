import { List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
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
        // padding: "10px",
        // marginTop: "20px",
    },
    icon: {
        // marginTop: "16px",
        color: "#888888",
        fontSize: "42px",
    },
}))

interface Props {
    control: any,
    name: any,
    data: any
}

const FileInput = ({ control, name, data }: Props) => {

    const styles = useStyles();

    return (

        <Controller control={control}
            // key={index}
            name={name}
            render={({ onChange, onBlur, value, }) => {
                return (
                    <>

                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align='right' >Age</TableCell>
                                        <TableCell align='right' >File</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((entry: any, index: any) => {

                                        // console.log('entry single -> is', entry)

                                        return (
                                            <TableRow key={index}>
                                                <TableCell component="th" scope="row">
                                                    {entry.key}
                                                </TableCell>
                                                <TableCell align="right">{entry.age}</TableCell>
                                                <TableCell align="right">
                                                    <Dropzone onDrop={onChange}
                                                    // ref={index}
                                                    >
                                                        {({ getRootProps, getInputProps }) => (
                                                            <Paper
                                                                // ref={index}
                                                                variant='outlined'
                                                                className={styles.root}
                                                                {...getRootProps()}
                                                            >

                                                                <input {...getInputProps()} name={name} onBlur={onBlur}></input>
                                                                <p>Drag 'n' drop files here </p>
                                                            </Paper>

                                                        )}
                                                    </Dropzone>

                                                    <List>{value?.length > 0 && value.map((f: any, index: any) => (
                                                        <ListItem key={index}>
                                                            {/* <ListItemIcon><InsertDriveFile></InsertDriveFile></ListItemIcon> */}
                                                            <ListItemText primary={f.name} secondary={f.size}></ListItemText>
                                                        </ListItem>
                                                    ))}</List>

                                                </TableCell>
                                            </TableRow>
                                        )
                                    })}





                                </TableBody>
                            </Table>
                        </TableContainer>



                        {/* 
                        <Dropzone onDrop={onChange}
                        // ref={index}
                        >
                            {({ getRootProps, getInputProps }) => (
                                <Paper
                                    // ref={index}
                                    variant='outlined'
                                    className={styles.root}
                                    {...getRootProps()}
                                >
                                    
                                    <input {...getInputProps()} name={name} onBlur={onBlur}></input>
                                    <p>Drag 'n' drop files here </p>
                                </Paper>

                            )}
                        </Dropzone> */}

                    </>
                )
            }}>

            <div>this is file input</div>


        </Controller>
    )
}

export default FileInput