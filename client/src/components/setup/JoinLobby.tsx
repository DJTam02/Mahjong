/* Depedency Imports */
import styled from 'styled-components';
import { useContext, useState } from 'react';
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
import { PLAY_ONLINE, LOBBY } from '../../utils/constants/paths';
import { redirect } from '../../utils/functions/navigation';
import { SocketContext } from '../../contexts/SocketContext';
import { ServerToClientEvents, ClientToServerEvents } from '../../types/socket';
import { ToastContext } from '../../contexts/ToastContext';

const JoinLobby = (props: ChildProps) => {
    /* Props */
    const { creating } = props;

    /* Contexts */
    const [settings]: [ISettings] = useContext(SettingsContext);
    const socket : Socket<ServerToClientEvents, ClientToServerEvents> = useContext(SocketContext);
    const setToast: (error: string) => void = useContext(ToastContext);

    /* Hooks */
    const navigate = useNavigate();

    /* States */
    const [name, setName] = useState<string>("");
    const [code, setCode] = useState<string>("");

    /* Effects */

    /* Functions */
    const nextDisabled = () => {
        return !(name && (creating || code));
    };

    const next = () => {
        if (creating) {
            socket.emit("createRoom", name, (error, code) => {
                if (error) {
                    setToast(error);
                    return;
                }
                redirect(navigate, LOBBY + "/" + code);
            })
            return;
        }
        socket.emit("joinRoom", name, code, (error, roomCode) => {
            if (error) {
                setToast(error);
                return;
            }
            redirect(navigate, LOBBY + "/" + roomCode);
        });
    };

    return (<JoinWrapper>
        <ContentWrapper>
            <Title>Mahjong</Title>
            <RoundedContainer textColour={settings.colourScheme.textColour}>
                <VerticalList>
                    <p style={{ marginTop: "0px" }}>What's your name?</p>
                    <RoundedTextField 
                        textColour={settings.colourScheme.textColour} 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    {!creating && <div>
                        <p>Enter access code</p>
                        <RoundedTextField 
                            textColour={settings.colourScheme.textColour} 
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
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
                            disabled={nextDisabled()}
                            onClick={next}
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
