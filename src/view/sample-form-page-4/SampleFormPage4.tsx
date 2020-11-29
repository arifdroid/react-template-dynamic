import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ContentContainer from './content/ContentContainer';
import Form from './Form/Form';
import ForwardInput from './Input/Input';
import Button from './button/Button'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { useHistory } from 'react-router';
import { useData } from '../../modules/fast-context/DataContext_copy';
import FileInput from './file-input/FileInput';
import PrimaryButton from '../sample-form-page/Primary-Button/PrimaryButton';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import axios from 'axios';

interface Props {

}

// const schema = yup.object().shape({
//     firstname: yup.string().matches(/^[A-Za-z]+$/i
//         , "first name should not contain numbers")
//     .required('First name is required field'),
//     surname:  yup.string().matches(/^[A-Za-z]+$/i, "last name should not contain numbers")
//     .required('Last name is required field'),
// })

const SampleFormPage4 = (props: Props) => {

    const [success, setSuccess] = useState(false);

    const { setValues, data } = useData();

    const { control, handleSubmit } = useForm({
        defaultValues: {
            files: data.files
        }
    })

    const history = useHistory();

    console.log('\n====\n')
    console.log('\n data file uploaded ', data)
    console.log('\n====\n')



    // const onSubmit_2 = (data: any) => {
    //     setValues(data)
    // }

    const entries = Object.entries(data).filter((entry) => entry[0] !== "files");
    const { files } = data;

    const onSubmit = async () => {
        const formData = new FormData();
        if (data.files) {
            data.files.forEach((file: any, index:any) => {                
                // console.log('file loop', file.name )
                formData.append(`file_${index}`, file)
                // console.log('log form data INSIDE', formData)
            });
        }
        // entries.forEach((entry: any) => {
        //     console.log('entry', entry)
        //     formData.append(entry[0], entry[1]);
        // });

        // const formData = new FormData();
        // formData.append('name', 'John');
        // formData.append('password', 'John123')


        // console.log('\n\nlog form data', formData)

        // var formData = new FormData();
        // formData.append('logo', "11");
        // formData.append('meal_type', "22");
        // formData.append('meal_name', "33");

        // console.log(Object.keys(formData)); //[]
        // console.log(JSON.stringify(formData)); //{}

        //use iterator
        // var formEntries = formData.entries();
        //console.log(formEntries.next().value); 
        //console.log(formEntries.next().value); 
        //console.log(formEntries.next().value); 

        //or simply use Array.from
        // var formEntries = Array.from(formData.entries());
        // console.log("formEntries ", formEntries);
        // console.log("formData ", formData);
        let url = 'http://localhost:8000/file-upload'

        const res = await fetch(url, {
            method: "POST",
            body: formData,
        });

        

        // const res = await axios.post(url, formData, {
        //     headers: {
        //       'Content-Type': 'multipart/file-upload',
        //     },
        //   });

        if (res.status === 200) {
            // Swal.fire("Great job!", "You've passed the challenge!", "success");
            alert('success upload')
            setSuccess(true);
        }

    }

    return (
        <ContentContainer>

            <h1>Form Page 4 RESULT </h1>
            <div>data = name {data.firstname} {data.surname} </div>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Field</TableCell>
                            <TableCell align='right' >Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {entries.map((entry: any) => (
                            <TableRow key={entry[0]}>
                                <TableCell component="th" scope="row">
                                    {entry[0]}
                                </TableCell>
                                <TableCell align="right">{entry[1].toString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


            <Form onSubmit={handleSubmit(onSubmit)}>


                <PrimaryButton>Upload All Data</PrimaryButton>


            </Form>

        </ContentContainer>
    )

}

export default SampleFormPage4;