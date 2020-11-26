import React from 'react';
import Header from './Header/Header';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Content from './Content/Content';
import ContentContainer from './Content-Container/ContentContainer';


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
            <form>
                {/* <div className="form-div-ola"> */}
           
                <input ref={register} name="name" type='text' placeholder='first name'></input>
                <input ref={register} name="surname" type='text' placeholder='surname'></input>
           
                {/* </div> */}
                {/* <button  type={submit} >Next</button> */}
            </form>
        </ContentContainer>

        
        </div>

    )
}

export default SampleFormPage; 