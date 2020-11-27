import React from 'react';
import { useForm } from 'react-hook-form';
import ContentContainer from './content/ContentContainer';
import Form from './Form/Form';
import ForwardInput from './Input/Input';
import Button from './button/Button'

interface Props{

}

const SampleFormPage2 =(props:Props)=>{
    // console.log('apa ada dalam props', props)

    const {register} = useForm();

    return (
        <ContentContainer>
            <div>Form Page</div>
            <Form>
            <ForwardInput name='firstname' type='text' ref={register}></ForwardInput>
            <ForwardInput name='surname' type='text' ref={register}></ForwardInput>

            <Button >Next</Button>
                
            </Form>  
            
        </ContentContainer>
    )
}

export default SampleFormPage2;