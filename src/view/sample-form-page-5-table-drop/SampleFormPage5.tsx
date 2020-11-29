import React, { useEffect } from 'react';
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
import { Paper, TableCell, TableContainer, TableHead, TableRow, Table, TableBody } from '@material-ui/core';


interface Props {

}

// const schema = yup.object().shape({
//     firstname: yup.string().matches(/^[A-Za-z]+$/i
//         , "first name should not contain numbers")
//     .required('First name is required field'),
//     surname:  yup.string().matches(/^[A-Za-z]+$/i, "last name should not contain numbers")
//     .required('Last name is required field'),
// })

let entries = [{ name: 'arif', age: '29', file_stage: 'new', bomba: [{ file_1: 'file_1' }, { file_2: 'file_2' }] },
{ name: 'arif', age: '29', file_stage: 'new', file_task: [{ file_1: 'file_1' }, { file_2: 'file_2' }] }];

let entries_2 = {
        project_name: '', project_date: '', project_status: '', project_jabatan: [
            {
                name:'jabatan_osc',
                data: [
                    { file_name: '', file: '' },
                    { file_name: '', file: '' },
                    { file_name: '', file: '' }]
            },
            {   
                name:'jabatan_skm',
                data: [
                    { file_name: '', file: '' },
                    { file_name: '', file: '' },
                    { file_name: '', file: '' }]
            },
            ,
            {   
                name:'jabatan_bomba',
                data: [
                    { file_name: '', file: '' },
                    { file_name: '', file: '' },
                    { file_name: '', file: '' }]
            }
        ]
    };




const SampleFormPage5 = (props: Props) => {

    const { setValues, data } = useData();

    const { control, handleSubmit } = useForm({
        defaultValues: {
            files: data.files
        }
    });

    const { control: control_2, handleSubmit: handleSubmit_2 } = useForm({
        defaultValues: {
            files: data.files
        }
    })


    useEffect(() => {


        let indexing_all_files_needed = [];

        for(var j=0; j< entries_2.project_jabatan.length;j++){

            // let first_indexing = entries_2.project_jabatan[j].map(el=>{
            //     return{

            //     }
            // })

            let project_jabatan_this = entries_2.project_jabatan[j]?.data || []

            for(var k =0; k< project_jabatan_this?.length;k++ ){
                
            }

        }


    }, [])

    const history = useHistory();

    // console.log('\n====\n')
    // console.log('\n data file uploaded ', data)
    // console.log('\n====\n')



    const onSubmit_2 = (data: any) => {
        // setValues(data)
        // history.push('/public/sample-form-page-4')
    }

    return (
        <ContentContainer>

            <h1>Form Page 3 </h1>
            <div>data = name {data.firstname} {data.surname} </div>
            {/* <Form onSubmit={handleSubmit(onSubmit_2)}>
            <ForwardInput name='firstname' type='text' ref={register} error={!!errors.firstname} helperText={errors?.firstname?.message}></ForwardInput>
            <ForwardInput name='surname' type='text' ref={register} error={!!errors.surname} helperText={errors?.surname?.message}></ForwardInput> */}

            {/* <Button >Next</Button>
                
            </Form>   */}

            {/* <FileInput name='files' control={control}></FileInput> */}
            {/* 
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
                        {entries.map((entry: any, index: any) => {

                            console.log('entry single -> is', entry)

                            return (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {entry.name}
                                    </TableCell>
                                    <TableCell align="right">{entry.age}</TableCell>
                                    <TableCell align="right"><FileInput index={index} name='files' control={control} ></FileInput></TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>  */}

            <br></br>
            <br></br>
            <br></br>

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
                        <TableRow>
                            <TableCell component="th" scope="row">
                                {entries[0].name}
                            </TableCell>
                            <TableCell align="right">{entries[0].age}</TableCell>
                            <TableCell align="right"><FileInput name='files' control={control} index={0}></FileInput></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                {entries[1].name}
                            </TableCell>
                            <TableCell align="right">{entries[1].age}</TableCell>
                            <TableCell align="right"><FileInput name='files' control={control_2} index={1}></FileInput></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>


            <Form onSubmit={handleSubmit(onSubmit_2)}>


                <PrimaryButton>Add Files</PrimaryButton>


            </Form>

        </ContentContainer>
    )
}

export default SampleFormPage5;