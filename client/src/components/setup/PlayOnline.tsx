/* Dependency Imports */
import { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

/* Project Imports */
import { SettingsContext } from '../../contexts/SettingsContext';
import { ISettings } from '../../types/settings';
import { Wrapper } from '../../utils/constants/commonStyles';

const PlayOnline = () => {
    /* Contexts */
    const [settings]: [ISettings] = useContext(SettingsContext);

    /* Hooks */
    const navigate = useNavigate();

    return (<PlayOnlineWrapper>
        <ContentWrapper>
            
        </ContentWrapper>
    </PlayOnlineWrapper>);
};

const PlayOnlineWrapper = styled(Wrapper)`
    align-items: start;
`;

const ContentWrapper = styled.div`
    width: 33%;
`;

export default PlayOnline