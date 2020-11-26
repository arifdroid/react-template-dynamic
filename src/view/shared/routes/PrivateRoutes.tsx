import React from 'react';
import { Route } from 'react-router';

interface Props{
    key:any,
    CustomComp:any,
    path:any,
    exact:Boolean
    
}

const PrivateRoutes:React.FC<Props> = ({key, CustomComp, path, exact})=>{
    return(
        <Route exact render={(props)=>{
            return< CustomComp {...props} />
        }}>
        {/* <div>this is private routes</div> */}
        </Route>
    )
}

export default PrivateRoutes;