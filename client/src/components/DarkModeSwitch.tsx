/* Dependency Imports */
import { useContext } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import styled from 'styled-components';

/* Project Imports */
import { SettingsContext } from '../contexts/SettingsContext';
import { ISettings } from '../types/settings';
import { SET_DARK_MODE, SET_LIGHT_MODE, darkScheme, lightScheme } from '../utils/constants/settings';

const DarkModeSwitch = () => {
    /* Contexts */
    const [settings, dispatchSettings]: [ISettings, any] = useContext(SettingsContext);

    /* Functions */
    const toggleTheme = () => {
        dispatchSettings({ type: settings.isDark ? SET_LIGHT_MODE : SET_DARK_MODE });
    };

    return <SwitchContainer 
        backgroundColour={settings.colourScheme.backgroundColour} 
        textColour={settings.colourScheme.textColour} 
        onClick={toggleTheme}
    >
        <SunIcon>
            <LightModeIcon sx={{ color: darkScheme.backgroundColour }} />
        </SunIcon>
        <MoonIcon>
            <DarkModeIcon sx={{ color: lightScheme.backgroundColour }} />
        </MoonIcon>
    </SwitchContainer>;
};

/* Styled Components */
const SwitchContainer = styled.div<{ backgroundColour: string, textColour: string }>`
    border: 2px solid ${props => props.textColour};
    border-radius: 100000000px;
    background-color: ${props => props.backgroundColour};
    height: 24px;
    padding: 5px;
    transition: 0.25s;
    cursor: pointer;
`;

const SunIcon = styled.div`
    display: inline-block;
    height: 24px;
`;

const MoonIcon = styled.div`
    display: inline-block;
    height: 24px;
`;

export default DarkModeSwitch;