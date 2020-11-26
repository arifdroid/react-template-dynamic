import React from 'react';
import {
    Checkbox,
    FormControlLabel,
    Box,
    Button,
} from '@material-ui/core';
//   import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { useForm, FormProvider, useWatch } from 'react-hook-form';
import Wrapper from './styles/Wrapper';
import Content from './styles/Content';
import Logo from './styles/Logo';

let backgroundImage_this = require('./asset/signin_page.jpg').default
// const schema = yup.object().shape({
//     email: yupFormSchemas.string(i18n('user.fields.email'), {
//       required: true,
//     }),
//     password: yupFormSchemas.string(
//       i18n('user.fields.password'),
//       {
//         required: true,
//       },
//     ),
//     rememberMe: yupFormSchemas.boolean(
//       i18n('user.fields.rememberMe'),
//     ),
//   });


// const from = useForm({
//     resolver:
// })
function IsolateReRender({ control }: { control: any }) {
    const firstName = useWatch({
        control,
        name: 'firstName', // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
        defaultValue: 'default' // default value before the render
    });

    return <div>{firstName}</div>; // only re-render at the component level, when firstName changes
}

const SignInPage: React.FC = () => {

    const { register, control, handleSubmit } = useForm();

    return (
        // <div>sign in now</div>
        <Wrapper style={{ backgroundImage: `url(${backgroundImage_this})` }}>
            <Content>

                <Logo>
                    <h1>Sign In</h1>

                    <form onSubmit={handleSubmit(data => console.log("data", data))} className="check">
                        
                        <h2>asd</h2>
                        <input ref={register} name="firstName" />
                        <input ref={register} name="last" />
                        <IsolateReRender control={control} />

                        <input type="submit" />
                    </form>

                </Logo>


                {/* <FormProvider {...methods}
            ></FormProvider> */}


            </Content>


        </Wrapper>
    )
}

export default SignInPage;