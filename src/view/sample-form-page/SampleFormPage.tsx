import React from 'react';
import Header from './Header/Header';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Content from './Content/Content';
import ContentContainer from './Content-Container/ContentContainer';
import Form from './Form/Form';
import Input from './Input/Input';
import Input_2 from './input-2/Input_2';
import PrimaryButton from './Primary-Button/PrimaryButton';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers'
// import InputForward from './Input-Forward/InputForward';
import InputForward from "./Input-Forward/InputForward";
import InputForwardTyped from './Input-Forward-typed/InputForwardTyped'

const schema = yup.object().shape({
    firstname: yup.string()
        .matches(/^(^0-9)$/, "first name should not contain numbers")
        .required('First name is required field'),

    lastname: yup.string()
        .matches(/^(^0-9)$/, "last name should not contain numbers")
        .required('Last name is required field'),

})




const SampleFormPage: React.FC = () => {

    const { register, handleSubmit, errors } = useForm({
        mode:'onBlur',
        resolver: yupResolver(schema)
    });
    // const { register, handleSubmit, errors } = useForm({
    //     mode: 'onBlur'
    // });
    const history = useHistory();

    const onSubmit = (data: any) => {

        // history.push
    }

    return (
        <div>
            <Header />
            {/* <div >this is sample form page</div> */}
            <Content>
                content wrapper here
            <h1>header</h1>

                <div>ss</div>

                <div className='sola'>ww</div>

                <h1 className='header-mu'>header 2</h1>

                <form>
                    {/* <div className="form-div-ola"> */}

                    {/* <input ref={register} name="name" type='text' placeholder='first name'></input>
                    <input ref={register} name="surname_this" type='text' placeholder='surname'></input> */}

                    {/* </div> */}
                    {/* <button  type={submit} >Next</button> */}
                </form>

            </Content>

            <ContentContainer>
                <h1>check content container</h1>
                <Form>
                   

                    {/* <Input ref={register}></Input> */}

                    {/* <InputForward name="check" ref={register} type='text'></InputForward> */}
                    <InputForward type='text' name='firstname' ref={register}></InputForward>

                    <InputForwardTyped type='text' name='lastname' ref={register}></InputForwardTyped>
                    {/* <PrimaryButton>Next</PrimaryButton> */}
                    {/* </div> */}
                    {/* <button  type={submit} >Next</button> */}
                </Form>
            </ContentContainer>

            {/* <ContentContainer>
                <h1>check content container 2 </h1>
                <Form>
                    <input name='firstname' type='text' placeholder='first name test' ref={register({
                        required: true,
                        minLength: 5,
                        pattern: /^[A-Za-z]+$/i

                    })}
                        style={{ borderColor: errors.firstname && 'red' }}
                    ></input>

                    <input name='lastname' type='text' placeholder='first name test' ref={register({
                        required: true,
                        minLength: 5

                    })}
                        style={{ borderColor: errors.lastname && 'red' }}
                    ></input>

                    <PrimaryButton>Next</PrimaryButton>

                </Form>
            </ContentContainer> */}



        </div>

    )
}

export default SampleFormPage; 