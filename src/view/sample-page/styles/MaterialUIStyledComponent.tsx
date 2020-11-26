// import { styled } from '@material-ui/core';
import styled from 'styled-components';
import React from 'react'

// const SideMenuTest:React.FC = ()=>{
//     return(
//         <div>side menu test</div>
//     )
// }

const MaterialUIStyledComponent = styled.button`
background-color: #6772e5;
color: #fff;
box-shadow: 40px 40px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
padding: 100px 14px;
&:hover {
  background-color: #5469d4;
}
`;

export default MaterialUIStyledComponent;