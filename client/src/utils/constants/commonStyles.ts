import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: min(80px, 8vw);
`;

export const PillContainer = styled.div<{ backgroundColour: string, textColour: string }>`
    border: 2px solid ${props => props.textColour};
    border-radius: 100000000px;
    background-color: ${props => props.backgroundColour};
`;


export const NavButton = styled(PillContainer)`
    padding: 20px;
    font-size: min(32px, 3vw);
    text-align: center;
    margin: 20px;
    cursor: pointer;
`;

export const VerticalList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;