import React from 'react';
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


interface Props{

}

const schema = yup.object().shape({
    firstname: yup.string().matches(/^[A-Za-z]+$/i
        , "first name should not contain numbers")
    .required('First name is required field'),
    surname:  yup.string().matches(/^[A-Za-z]+$/i, "last name should not contain numbers")
    .required('Last name is required field'),
})

const SampleFormPage2 =(props:Props)=>{

    const {setValues,data} = useData();

    const {control, handleSubmit} = useForm({
        defaultValues:{
            files:data.files
        }
    })

    const history = useHistory();

    // console.log('\n====\n')
    // console.log('\n data file uploaded ', data)
    // console.log('\n====\n')
    


    const onSubmit_2 = (data:any)=>{
        setValues(data)
        history.push('/public/sample-form-page-4')
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

            <FileInput name='files' control={control}></FileInput>

            <Form onSubmit={handleSubmit(onSubmit_2)}>

            
            <PrimaryButton>Add Files</PrimaryButton>


            </Form>
            
        </ContentContainer>
    )
}

export default SampleFormPage2;