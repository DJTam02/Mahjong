/* Dependency Imports */
import { useContext } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import styled from 'styled-components';

/* Project Imports */
import { SettingsContext } from '../contexts/SettingsContext';
import { ISettings } from '../types/settings';
import { SET_DARK_MODE, SET_LIGHT_MODE } from '../utils/constants/settings';

const DarkModeSwitch = () => {
    /* Contexts */
    const [settings, dispatchSettings]: [ISettings, any] = useContext(SettingsContext);

    /* Functions */
    const toggleTheme = () => {
        dispatchSettings({ type: settings.isDark ? SET_LIGHT_MODE : SET_DARK_MODE });
    };

    return <SwitchContainer isDark={settings.isDark} onClick={toggleTheme}>
        <SunIcon isDark={settings.isDark}>
            <LightModeIcon sx={{ color: 'white' }} />
        </SunIcon>
        <MoonIcon isDark={settings.isDark}>
            <DarkModeIcon sx={{ color: 'black' }} />
        </MoonIcon>
    </SwitchContainer>;
};

/* Styled Components */
const SwitchContainer = styled.div<{ isDark: boolean }>`
    border: 2px solid ${props => props.isDark ? "white" : "red"};
    border-radius: 20px;
    background-color: ${props => props.isDark ? "black" : "white"};
    height: 24px;
    padding: 5px;
`;

const SunIcon = styled.div<{ isDark: boolean }>`
    display: inline-block;
    height: 24px;
`;

const MoonIcon = styled.div<{ isDark: boolean }>`
    display: inline-block;
    height: 24px;
`;

export default DarkModeSwitch;