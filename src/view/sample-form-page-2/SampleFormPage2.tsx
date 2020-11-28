import React from 'react';
import { useForm } from 'react-hook-form';
import ContentContainer from './content/ContentContainer';
import Form from './Form/Form';
import ForwardInput from './Input/Input';
import Button from './button/Button'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';


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
    // console.log('apa ada dalam props', props)

    const {register, handleSubmit, errors} = useForm({
        mode:'onBlur',
        resolver: yupResolver(schema)
    });

    return (
        <ContentContainer>
            <div>Form Page</div>
            <Form>
            <ForwardInput name='firstname' type='text' ref={register} error={!!errors.firstname} helperText={errors?.firstname?.message}></ForwardInput>
            <ForwardInput name='surname' type='text' ref={register} error={!!errors.surname} helperText={errors?.surname?.message}></ForwardInput>

            <Button >Next</Button>
                
            </Form>  
            
        </ContentContainer>
    )
}

export default SampleFormPage2;