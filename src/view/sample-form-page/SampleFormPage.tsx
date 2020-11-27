import React from 'react';
import Header from './Header/Header';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Content from './Content/Content';
import ContentContainer from './Content-Container/ContentContainer';
import Form from './Form/Form';
import Input from './Input/Input';
import Input_2 from './input-2/Input_2';


const SampleFormPage:React.FC =()=>{

    const {register, handleSubmit, errors } = useForm();
    const history = useHistory();

    const onSubmit = (data:any)=>{

        // history.push
    }

    return(
        <div>
        <Header/>    
        {/* <div >this is sample form page</div> */}
        <Content>
            content wrapper here
            <h1>header</h1>

            <div>ss</div>

            <div className='sola'>ww</div>

            <h1 className='header-mu'>header 2</h1>

            <form>
                {/* <div className="form-div-ola"> */}
           
                <input ref={register} name="name" type='text' placeholder='first name'></input>
                <input ref={register} name="surname" type='text' placeholder='surname'></input>
           
                {/* </div> */}
                {/* <button  type={submit} >Next</button> */}
            </form>

        </Content>

        <ContentContainer>
            <h1>check content container</h1>
                <Form>
                {/* <div className="form-div-ola"> */}
           
                {/* <Input ref={register} name={}></Input> */}
                <Input_2 ref={register} name="surname" type='text' placeholder='surname'></Input_2>
           
                {/* </div> */}
                {/* <button  type={submit} >Next</button> */}
                </Form>
        </ContentContainer>

        
        </div>

    )
}

export default SampleFormPage; 