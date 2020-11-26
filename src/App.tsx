import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouteComponentProps } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import RoutesComponent from './view/shared/routes/RoutesComponent';

const history = createBrowserHistory();

interface Props extends RouteComponentProps{

}

function App(props:any) {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> 
    // </div>
    <AppWithSnackbar {...props} />
  );
}

// function AppWithSnackbar(props){

// }

const AppWithSnackbar :React.FC<Props> =()=>{
  return(
    // <ConnectedRouter
    // history={history}
    // >
      <RoutesComponent/>

    // </ConnectedRouter>
  )
}

export default App;
