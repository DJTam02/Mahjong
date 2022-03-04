/* Dependency Imports */
import { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

/* Project Imports */
import { Wrapper, Title, PillContainer, NavButton, VerticalList } from '../../utils/constants/commonStyles';
import { SettingsContext } from '../../contexts/SettingsContext';
import { ISettings } from '../../types/settings';
import { redirect } from '../../utils/functions/navigation';
import { PLAY_ONLINE, HOW_TO_PLAY, SETTINGS } from '../../utils/constants/paths';

const HomePage = () => {
    /* Contexts */
    const [settings]: [ISettings] = useContext(SettingsContext);

    /* Hooks */
    const navigate = useNavigate();

    return (<HomeWrapper>
        <ContentWrapper>
            <Title>Mahjong</Title>
            <VerticalList>
                <NavButton
                    backgroundColour={settings.colourScheme.backgroundColour} 
                    textColour={settings.colourScheme.textColour}
                    onClick={(e) => redirect(navigate, PLAY_ONLINE)}
                >Play Online</NavButton>
                <NavButton
                    backgroundColour={settings.colourScheme.backgroundColour} 
                    textColour={settings.colourScheme.textColour}
                    onClick={(e) => redirect(navigate, HOW_TO_PLAY)}
                >How to Play</NavButton>
                <NavButton
                    backgroundColour={settings.colourScheme.backgroundColour} 
                    textColour={settings.colourScheme.textColour}
                    onClick={(e) => redirect(navigate, SETTINGS)}
                >Settings</NavButton>
            </VerticalList>
        </ContentWrapper>
    </HomeWrapper>);
};

/* Styled Components */
const ContentWrapper = styled.div`
    width: 33%;
`;

const HomeWrapper = styled(Wrapper)`
    align-items: start;
`;

export default HomePage;