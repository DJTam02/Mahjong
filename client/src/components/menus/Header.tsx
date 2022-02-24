/* Dependency Imports */
import styled from 'styled-components';

/* Project Imports */
import DarkModeSwitch from '../DarkModeSwitch';

const Header = () => {
    return (<HeaderWrapper>
        <img src="" />
        <DarkModeSwitch />
    </HeaderWrapper>)
};

/* Styled Components */
const HeaderWrapper = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
`;

export default Header;