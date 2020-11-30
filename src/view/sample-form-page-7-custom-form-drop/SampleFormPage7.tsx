import React, { useState, useEffect } from 'react';
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

interface IndexDataProps {
    key: any,
    file: any,
    // prevState: null
}


let entries_2 = {
    project_name: '', project_date: '', project_status: '', project_jabatan: [
        {
            name: 'jabatan_osc',
            data: [
                { file_name: 'surat permohonan', file: '' },
                { file_name: 'borang A', file: '' },
                { file_name: 'senarai semak', file: '' }]
        },
        {
            name: 'jabatan_skm',
            data: [
                { file_name: 'surat permohonan', file: '' },
                { file_name: 'PE report', file: '' },
                { file_name: 'Borang inspection', file: '' }]
        },
        ,
        {
            name: 'jabatan_bomba',
            data: [
                { file_name: 'surat permohohonan', file: '' },
                { file_name: 'pelan susunatur', file: '' },
                // { file_name: '', file: '' }
            ]
        }
    ]
};

const SampleFormPage7 = (props: Props) => {

    const [success, setSuccess] = useState(false);
    const [indexedData, setIndexedData] = useState<IndexDataProps[]>([]);


    const { setValues, data } = useData();

    useEffect(() => {


        let indexing_all_files_needed: IndexDataProps[] = [];

        for (var j = 0; j < entries_2.project_jabatan.length; j++) {

            // matching key for each file is 

            let project_jabatan_this = entries_2.project_jabatan[j]?.data || []

            for (var k = 0; k < project_jabatan_this?.length; k++) {
                indexing_all_files_needed.push({ key: `${entries_2.project_jabatan[j]?.name}_${project_jabatan_this[k].file_name}`, file: null })

            }

        }

        setIndexedData(indexing_all_files_needed)


    }, [])

    const { control, handleSubmit } = useForm({
        defaultValues: {
            files: data.files
        }
    })

    const history = useHistory();


    const onSubmit = async () => {


    }

    return (
        <ContentContainer>

            <h1>Form Page 7 </h1>
            {/* <div>data = name {data.firstname} {data.surname} </div> */}

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Number</TableCell>
                            <TableCell>Field</TableCell>
                            <TableCell >File Upload Here</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {indexedData.map((entry: any, index: number) => {

                            // console.log('entry is', entry)

                            return (
                                <TableRow key={entry.key}>

                                    <TableCell component="th" scope="row">
                                        {index}
                                    </TableCell>

                                    <TableCell component="th" scope="row">
                                        {entry.key}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    <FileInput></FileInput>
                                    </TableCell>
                                    {/* <TableCell align="right">{entry[1].toString()}</TableCell> */}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <div>ola</div>

            <FileInput></FileInput>


            {/* <Form onSubmit={handleSubmit(onSubmit)}>


                <PrimaryButton>Upload All Data</PrimaryButton>


            </Form> */}

        </ContentContainer>
    )

}

export default SampleFormPage7;