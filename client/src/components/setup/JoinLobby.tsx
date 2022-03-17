/* Depedency Imports */
import styled from 'styled-components';
import { useContext } from 'react';
import { Socket } from "socket.io-client";

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
import { useNavigate } from 'react-router';
import { PLAY_ONLINE } from '../../utils/constants/paths';
import { redirect } from '../../utils/functions/navigation';
import { SocketContext } from '../../contexts/SocketContext';
import { ServerToClientEvents, ClientToServerEvents } from '../../types/socket';

const JoinLobby = (props: ChildProps) => {
    /* Props */
    const { creating } = props;

    /* Contexts */
    const [settings]: [ISettings] = useContext(SettingsContext);
    const { socket } : { socket: Socket<ServerToClientEvents, ClientToServerEvents> } = useContext(SocketContext);

    /* Hooks */
    const navigate = useNavigate();

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
                    {!creating && <div>
                        <p>Enter access code</p>
                        <RoundedTextField textColour={settings.colourScheme.textColour} />
                    </div>}
                    <SpacedBetweenContainer style={{ marginTop: "1em" }}>
                        <CancelButton 
                            backgroundColour={settings.colourScheme.backgroundColour} 
                            textColour={settings.colourScheme.textColour}
                            onClick={() => redirect(navigate, PLAY_ONLINE)}
                        >
                            Cancel
                        </CancelButton>
                        <GoButton 
                            backgroundColour={settings.colourScheme.backgroundColour} 
                            textColour={settings.colourScheme.textColour}
                            onClick={() => socket.emit("hello")}
                        >
                            Let's go
                        </GoButton>
                    </SpacedBetweenContainer>
                </VerticalList>
            </RoundedContainer>
        </ContentWrapper>
    </JoinWrapper>);
};

interface ChildProps {
    creating?: boolean;
};

/* Styled Components */
const ContentWrapper = styled.div`
    max-width: 33%;
    min-width: 300px;
`;

const JoinWrapper = styled(Wrapper)`
    align-items: start;
`;

export default JoinLobby;
