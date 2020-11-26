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
import Wrapper from './styles/Wrapper';
import Content from './styles/Content';
import Logo from './styles/Logo';

let backgroundImage_this = require('./asset/signin_page.jpg').default

const SignInPage:React.FC =()=>{
    return(
    // <div>sign in now</div>
    <Wrapper style={{backgroundImage: `url(${backgroundImage_this})`}}>
        <Content>
      

        </Content>


    </Wrapper>
    )
}

export default SignInPage;