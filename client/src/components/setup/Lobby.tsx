/* Depedency Imports */
import { useContext } from "react";
import { Socket } from "socket.io-client";
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

/* Project Imports */
import { SocketContext } from "../../contexts/SocketContext";
import { SettingsContext } from "../../contexts/SettingsContext";
import { ISettings } from "../../types/settings";
import { ServerToClientEvents, ClientToServerEvents } from '../../types/socket';
import { Title, Wrapper, RoundedContainer } from '../../utils/constants/commonStyles';

const Lobby = (props: ChildProps) => {
    /* Props */

    /* Hooks */
    const { code } = useParams<'code'>();

    /* Contexts */
    const [settings] = useContext<[ISettings]>(SettingsContext);
    const socket = useContext<Socket<ServerToClientEvents, ClientToServerEvents>>(SocketContext);

    /* States */

    /* Effects */

    /* Functions */

    return (<LobbyWrapper>
        <ContentWrapper>
            <Title>Mahjong</Title>
            <RoundedContainer textColour={settings.colourScheme.textColour}>
                <p>Lobby Settings</p>
                <p>Access Code: {code}</p>
            </RoundedContainer>
        </ContentWrapper>
    </LobbyWrapper>);
};

// Types
interface ChildProps {
    props?: any;
};

/* Styled Components */
const ContentWrapper = styled.div`
    max-width: 33%;
    min-width: 300px;
`;

const LobbyWrapper = styled(Wrapper)`
    align-items: start;
`;

export default Lobby;
