
import React from 'react';
import { Button, makeStyles } from "@material-ui/core";
import MaterialUIStyledComponent from './styles/MaterialUIStyledComponent';
import ButtonStyledComponent from './styles/ButtonStyledComponent';



const SamplePage: React.FC = () => {
    return (
        <>
            <div>helo sample page</div>

            <SideMenu />

            <MaterialUIStyledComponent onClick={() => console.log('im clicked')} />
            <div>
            <ButtonStyledComponent
                href="https://github.com/styled-components/styled-components"
                target="_blank"
                rel="noopener"
                // primary
             >
                GitHub
            </ButtonStyledComponent>
            <ButtonStyledComponent href="/docs">
                Documentation
            </ButtonStyledComponent>

            </div>

        </>
    )
}

const use_sideMenuStyles = makeStyles({
    sideMenu: {
        height: 50,
        width: 200,
        backgroundColor: "coral"
    }
})

const SideMenu = () => {

    const classes = use_sideMenuStyles();

    return (
        <div className={classes.sideMenu}>this is side menu 2</div>
    )
}


export default SamplePage;