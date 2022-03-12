/* Dependency Imports */
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

/* Project Imports */
import DarkModeSwitch from '../DarkModeSwitch';
import { SettingsContext } from '../../contexts/SettingsContext';
import { useContext } from 'react';
import { redirect } from '../../utils/functions/navigation';
import { HOME_SCREEN } from '../../utils/constants/paths';

const Header = () => {
    /* Contexts */
    const [settings] = useContext(SettingsContext);

    /* Hooks */
    const navigation = useNavigate();

    return (<HeaderWrapper 
        backgroundColour={settings.colourScheme.backgroundColour} 
        textColour={settings.colourScheme.textColour}
        darkMode={settings.isDark}
    >
        <img src="/icon.png" alt="Mahjong Tile" onClick={() => redirect(navigation, HOME_SCREEN)} style={{ cursor: "pointer" }} />
        <DarkModeSwitch />
    </HeaderWrapper>)
};

/* Styled Components */
const HeaderWrapper = styled.div<{ backgroundColour: string, textColour: string, darkMode: boolean }>`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    z-index: 1;
    background-color: ${props => props.backgroundColour};
    box-shadow: 2px -15px 30px 2px ${props => props.textColour};
`;

export default Header;