import { List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import Dropzone from 'react-dropzone';
import { CloudUpload, InsertDriveFile } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#eee",
        textAlign: "center",
        cursor: "pointer",
        color: "#333",
        // padding: "3px",
        // marginTop: "5px",
    },
    icon: {
        // marginTop: "10px",
        color: "#888888",
        justifyContent:'center',
        alignSelf:'center',
        paddingRight:20,
        fontSize: "26px",
    },
}))

interface Props {
    control: any,
    name: any
}

interface IndexDataProps {
    key: any,
    file: any,
    // prevState: null
}

const FileInput = () => {

    const styles = useStyles();

    const [fileList,setFileList] =useState<IndexDataProps[]>([]);

    const onChange = (files:any)=>{
        setFileList(files)
    }

    return (


        <div style={{}}>

            <Dropzone onDrop={onChange}
            multiple={false}

            >
                {({ getRootProps, getInputProps }) => (
                    // <Paper
                    //     variant='outlined'
                    //     className={styles.root}
                    //     {...getRootProps()}
                    // >
                    //     <CloudUpload
                    //         className={styles.icon}
                    //     ></CloudUpload>
                    //     <input {...getInputProps()}
                    //     // onBlur={onBlur}
                    //     ></input>
                    //     <p>Drag 'n' drop files here </p>
                    // </Paper>

                    <Paper  style={{display:'flex', flexDirection:'row', paddingLeft:15}}  {...getRootProps()}>
                           <CloudUpload
                            className={styles.icon}
                        ></CloudUpload>
                        <input {...getInputProps()}
                        // onBlur={onBlur}
                        ></input>
                        <p>Drag 'n' drop files here </p>

                    </Paper>

                )}
            </Dropzone>

            <div></div>

            <List>{fileList?.length > 0 && fileList.map((f: any, index: any) => (
                <ListItem key={index} style={{}}>
                    <ListItemIcon><InsertDriveFile></InsertDriveFile></ListItemIcon>
                    <ListItemText primary={f.name} secondary={f.size}></ListItemText>
                </ListItem>
            ))}</List>

        </div>

    )
}

// const FileInput = ({control,name}:Props) => {

//     const styles = useStyles();

//     return (

//         <Controller control={control}
//         name={name}
//         render={({onChange, onBlur, value})=>{
//             return(
//                 <>

//                     <Dropzone onDrop={onChange}>
//                         {({getRootProps, getInputProps})=>(
//                             <Paper
//                             variant='outlined'
//                             className={styles.root}
//                             {...getRootProps()}
//                             >
//                                 <CloudUpload
//                                 className={styles.icon}
//                                 ></CloudUpload>
//                                 <input {...getInputProps()} name={name} onBlur={onBlur}></input>
//                                 <p>Drag 'n' drop files here </p>
//                             </Paper>

//                         )}
//                     </Dropzone>

//                         <List>{value?.length >0 &&value.map((f:any,index:any)=>(
//                             <ListItem key={index}>
//                                 <ListItemIcon><InsertDriveFile></InsertDriveFile></ListItemIcon>
//                                 <ListItemText primary={f.name} secondary={f.size}></ListItemText>
//                             </ListItem>
//                         ))}</List>

//                 </>
//             )
//         }}>

//             <div>this is file input</div>


//         </Controller>
//     )
// }

export default FileInput