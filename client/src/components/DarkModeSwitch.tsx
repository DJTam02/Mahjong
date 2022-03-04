/* Dependency Imports */
import { useContext } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import styled from 'styled-components';

/* Project Imports */
import { SettingsContext } from '../contexts/SettingsContext';
import { ISettings } from '../types/settings';
import { PillContainer } from '../utils/constants/commonStyles';
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
        <Icon>
            <LightModeIcon sx={{ color: darkScheme.backgroundColour }} />
        </Icon>
        <Icon>
            <DarkModeIcon sx={{ color: lightScheme.backgroundColour }} />
        </Icon>
    </SwitchContainer>;
};

/* Styled Components */
const SwitchContainer = styled(PillContainer)`
    height: 24px;
    padding: 5px;
    cursor: pointer;
`;

const Icon = styled.div`
    display: inline-block;
    height: 24px;
`;

export default DarkModeSwitch;