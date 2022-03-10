/* Dependency Imports */
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

/* Project Imports */
import { Wrapper, Title, VerticalList, TextSize } from '../../utils/constants/commonStyles';
import { SettingsContext } from '../../contexts/SettingsContext';
import { ISettings } from '../../types/settings';
import { redirect } from '../../utils/functions/navigation';
import { HOST_GAME, JOIN_LOBBY } from '../../utils/constants/paths';

const PlayOnline = () => {
    /* Contexts */
    const [settings]: [ISettings] = useContext(SettingsContext);

    /* Hooks */
    const navigate = useNavigate();

    /* States */
    const [hostHover, setHostHover] = useState<boolean>(false);
    const [joinHover, setJoinHover] = useState<boolean>(false);

    return (<PlayOnlineWrapper>
        <ContentWrapper>
            <Title>Mahjong</Title>
            <VerticalList>
                <LinkWrapper>
                    <Circle 
                        backgroundColour={settings.colourScheme.backgroundColour} 
                        textColour={settings.colourScheme.textColour} 
                    />
                    <GameLink
                        textColour={settings.colourScheme.textColour}
                        onClick={(e) => redirect(navigate, HOST_GAME)}
                        onMouseEnter={(e) => setHostHover(true)}
                        onMouseLeave={(e) => setHostHover(false)}
                    >
                        <TextMargin>
                            Host a game
                            <ArrowRightAltIcon style={{ fontSize: TextSize, opacity: hostHover ? 1 : 0, transition: "0.25s", marginLeft: hostHover ? "10px" : "0px" }} />
                        </TextMargin>
                    </GameLink>
                </LinkWrapper>
                <LinkWrapper>
                    <Circle 
                        backgroundColour={settings.colourScheme.backgroundColour} 
                        textColour={settings.colourScheme.textColour}
                    />
                    <GameLink
                        textColour={settings.colourScheme.textColour}
                        onClick={(e) => redirect(navigate, JOIN_LOBBY)}
                        onMouseEnter={(e) => setJoinHover(true)}
                        onMouseLeave={(e) => setJoinHover(false)}
                    >
                        <TextMargin>
                            Join a lobby
                            <ArrowRightAltIcon style={{ fontSize: TextSize, opacity: joinHover ? 1 : 0, transition: "0.25s", marginLeft: joinHover ? "10px" : "0px" }} />
                        </TextMargin>
                    </GameLink>
                </LinkWrapper>
            </VerticalList>
        </ContentWrapper>
    </PlayOnlineWrapper>);
};

const PlayOnlineWrapper = styled(Wrapper)`
    align-items: start;
`;

const ContentWrapper = styled.div`
    width: 33%;
`;

const GameLink = styled.div<{ textColour: string }>`
    width: 100%;
    cursor: pointer;
    flex: 1;
    position: absolute;
    margin-left: ${TextSize};
    border-bottom: 1px solid ${props => props.textColour};
`;

const LinkWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 40px;
`;

const Circle = styled.div<{ backgroundColour: string, textColour: string }>`
    border: 1px solid ${props => props.textColour};
    background-color: ${props => props.backgroundColour};
    border-radius: 100%;
    height: calc(3 * ${TextSize});
    width: calc(3 * ${TextSize});
    z-index: 1;
`;

const TextMargin = styled.div`
    margin-left: calc(20px + 2 * ${TextSize});
    display: flex;
    align-items: center;
`;

export default PlayOnline