import React from 'react'
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import CustomLoadable from '../../CustomLoadable';
import routes from '../../routes';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const RoutesComponent: React.FC = () => {
    return (
        // <div>this is routes component</div>
        <BrowserRouter>
            <Switch>


                {routes.publicRoutes.map(el => {
                    console.log('el.path passed ->', el.path)
                    return (
                        <PublicRoutes
                            key={el.path}
                            path={el.path}
                            exact={true}
                            CustomComp={CustomLoadable({ loader: el.loader })}

                        />
                    )
                })}

                {routes.privateRoutes.map(el => {
                    return (
                        <PrivateRoutes
                            key={el.path}
                            path={el.path}
                            exact={false}
                            CustomComp={CustomLoadable({ loader: el.loader })}

                        ></PrivateRoutes>
                    )
                })

                }

                <Route path='/public/now' render={() => <div>ola</div>}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default RoutesComponent;