import React from 'react';
import { Route } from 'react-router';

interface Props {
    key: any,
    CustomComp: any,
    path:any,
    exact:Boolean

}

const PublicRoutes: React.FC<Props> = ({ key, CustomComp, ...rest  }) => {

    // console.log('key passed', key)
    // console.log('data passed', CustomComp)
    // console.log('rest passed', rest)
    return (
        // <div>this is public routes</div>
        <Route  exact render={(props)=>{

            return <CustomComp {...props}/>
        }}>
        
        </Route>
    )
}

export default PublicRoutes;