/* Dependency Imports */
import { useContext } from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

/* Project Imports */
import { HOME_SCREEN_PATH } from '../utils/constants/paths';
import HomePage from './setup/HomePage';
import { SettingsContext } from '../contexts/SettingsContext';


const ContentRouter = () => {
    /* Contexts */
    const [settings] = useContext(SettingsContext);

    return (<ComponentWrapper
        backgroundColour={settings.colourScheme.backgroundColour}
        textColour={settings.colourScheme.textColour}
    >
        <Routes>
            <Route element={<HomePage />} path={HOME_SCREEN_PATH} />
        </Routes>
    </ComponentWrapper>);
};

/* Styled Components */
const ComponentWrapper = styled.div<{ backgroundColour: string, textColour: string }>`
    flex: 1;
    width: 100%;
    background-color: ${props => props.backgroundColour};
`;

export default ContentRouter;