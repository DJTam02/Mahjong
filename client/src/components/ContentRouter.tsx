/* Dependency Imports */
import { useContext } from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

/* Project Imports */
// Constants
import { HOME_SCREEN, PLAY_ONLINE, SETTINGS, HOW_TO_PLAY, JOIN_LOBBY, HOST_GAME, LOBBY } from '../utils/constants/paths';
import { TextSize } from '../utils/constants/commonStyles';
import { SettingsContext } from '../contexts/SettingsContext';
// Components
import HomePage from './setup/HomePage';
import PlayOnline from './setup/PlayOnline';
import Settings from './setup/Settings';
import HowToPlay from './setup/HowToPlay'
import JoinLobby from './setup/JoinLobby';
// Types
import { ISettings } from '../types/settings';

const ContentRouter = () => {
    /* Contexts */
    const [settings] = useContext<[ISettings]>(SettingsContext);

    return (<ComponentWrapper
        backgroundColour={settings.colourScheme.backgroundColour}
        textColour={settings.colourScheme.textColour}
    >
        <Routes>
            <Route element={<HomePage />} path={HOME_SCREEN} />
            <Route element={<PlayOnline />} path={PLAY_ONLINE} />
            <Route element={<Settings />} path={SETTINGS} />
            <Route element={<HowToPlay />} path={HOW_TO_PLAY} />
            <Route element={<JoinLobby />} path={JOIN_LOBBY} />
            <Route element={<JoinLobby creating={true} />} path={HOST_GAME} />
            <Route element={<JoinLobby />} path={LOBBY + "/:code"} />
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
    font-size: ${TextSize};
`;

export default ContentRouter;