import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ContentContainer from './content/ContentContainer';
import Form from './Form/Form';
import ForwardInput from './Input/Input';
import Button from './button/Button'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { useHistory } from 'react-router';
import { useData } from '../../modules/fast-context/DataContext_copy';
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
                    { file_name: 'surat permohonan', file: '' },
                    { file_name: 'borang A', file: '' },
                    { file_name: 'senarai semak', file: '' }]
            },
            {   
                name:'jabatan_skm',
                data: [
                    { file_name: 'surat permohonan', file: '' },
                    { file_name: 'PE report', file: '' },
                    { file_name: 'Borang inspection', file: '' }]
            },
            ,
            {   
                name:'jabatan_bomba',
                data: [
                    { file_name: 'surat permohohonan', file: '' },
                    { file_name: 'pelan susunatur', file: '' },
                    // { file_name: '', file: '' }
                ]  
            }
        ]
    };

interface IndexDataProps{
    key:any,
    file:any,
    // prevState: null
}


const SampleFormPage5 = (props: Props) => {

    const { setValues, data } = useData();

    // const [indexedData, setIndexedData] = useState(null);
    // const [indexedData, setIndexedData] = useState(null);
    const [indexedData, setIndexedData] = useState<IndexDataProps[]>([]);


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


        let indexing_all_files_needed : IndexDataProps[] = [];

        for(var j=0; j< entries_2.project_jabatan.length;j++){

            // matching key for each file is 

            let project_jabatan_this = entries_2.project_jabatan[j]?.data || []

            for(var k =0; k< project_jabatan_this?.length;k++ ){
                indexing_all_files_needed.push({key:`${entries_2.project_jabatan[j]?.name}_${project_jabatan_this[k].file_name}`, file:null})
                // console.log('\n\nproject_jabatan data',project_jabatan_this[k].file_name ,'\n\n')
            }

        }

        setIndexedData(indexing_all_files_needed)


    }, [])

    useEffect(()=>{

        if(indexedData){
            // console.log('indexedData',indexedData.length)

            for(var j=0; j< indexedData.length ; j++){
                
            // let obj =  `control_${indexedData[j].key}`   

            // const { control: control_4, handleSubmit: handleSubmit_2 } = useForm({
            //     defaultValues: {
            //         files: data.files
            //     }
            // })

            }

            // const { control: control_2, handleSubmit: handleSubmit_2 } = useForm({
            //     defaultValues: {
            //         files: data.files
            //     }
            // })
        }

    },[indexedData])

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
           


            <Form onSubmit={handleSubmit(onSubmit_2)}>


                <PrimaryButton>Add Files</PrimaryButton>


            </Form>

        </ContentContainer>
    )
}

export default SampleFormPage5;