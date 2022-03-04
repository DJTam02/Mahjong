/* Dependency Imports */
import { useContext } from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

/* Project Imports */
import { HOME_SCREEN, PLAY_ONLINE, SETTINGS } from '../utils/constants/paths';
import { SettingsContext } from '../contexts/SettingsContext';
// Components
import HomePage from './setup/HomePage';
import PlayOnline from './setup/PlayOnline';
import Settings from './setup/Settings';

const ContentRouter = () => {
    /* Contexts */
    const [settings] = useContext(SettingsContext);

    return (<ComponentWrapper
        backgroundColour={settings.colourScheme.backgroundColour}
        textColour={settings.colourScheme.textColour}
    >
        <Routes>
            <Route element={<HomePage />} path={HOME_SCREEN} />
            <Route element={<PlayOnline />} path={PLAY_ONLINE} />
            <Route element={<Settings />} path={SETTINGS} />
        </Routes>
    </ComponentWrapper>);
};

/* Styled Components */
const ComponentWrapper = styled.div<{ backgroundColour: string, textColour: string }>`
    flex: 1;
    width: 100%;
    background-color: ${props => props.backgroundColour};
    color: ${props => props.textColour};
    display: flex;
`;

export default ContentRouter;