/* Depedency Imports */
import styled from 'styled-components';
import { useContext } from 'react';

/* Project Imports */
import { 
    Wrapper, 
    RoundedContainer, 
    VerticalList, 
    CancelButton, 
    GoButton, 
    SpacedBetweenContainer, 
    Title, 
    RoundedTextField,
} from '../../utils/constants/commonStyles';
import { SettingsContext } from '../../contexts/SettingsContext';
import { ISettings } from '../../types/settings';

const JoinLobby = (props: ChildProps) => {
    /* Props */

    /* Contexts */
    const [settings]: [ISettings] = useContext(SettingsContext);

    /* States */

    /* Effects */

    /* Functions */

    return (<JoinWrapper>
        <ContentWrapper>
            <Title>Mahjong</Title>
            <RoundedContainer textColour={settings.colourScheme.textColour}>
                <VerticalList>
                    <p style={{ marginTop: "0px" }}>What's your name?</p>
                    <RoundedTextField textColour={settings.colourScheme.textColour} />
                    <p>Enter access code</p>
                    <RoundedTextField textColour={settings.colourScheme.textColour} />
                    <SpacedBetweenContainer style={{ marginTop: "1em" }}>
                        <CancelButton backgroundColour={settings.colourScheme.backgroundColour} textColour={settings.colourScheme.textColour}>
                            Cancel
                        </CancelButton>
                        <GoButton backgroundColour={settings.colourScheme.backgroundColour} textColour={settings.colourScheme.textColour}>
                            Let's go
                        </GoButton>
                    </SpacedBetweenContainer>
                </VerticalList>
            </RoundedContainer>
        </ContentWrapper>
    </JoinWrapper>);
};

interface ChildProps {
    props?: any;
};

/* Styled Components */
const ContentWrapper = styled.div`
    width: 33%;
`;

const JoinWrapper = styled(Wrapper)`
    align-items: start;
`;

export default JoinLobby;
