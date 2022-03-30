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

export const PillContainer = styled.div<{ textColour: string }>`
    border: 2px solid ${props => props.textColour};
    border-radius: 100000000px;
`;


export const NavButton = styled.button<{ textColour: string, backgroundColour: string }>`
    border: 2px solid ${props => props.textColour};
    border-radius: 100000000px;
    padding: 20px;
    text-align: center;
    margin: 20px;
    cursor: pointer;
    transition: 0.25s;
    background-color: transparent;
    color: ${props => props.textColour};
    font-size: inherit;
    &:hover {
        border: 2px solid ${props => props.backgroundColour};
        background-color: ${props => props.textColour};
        color: ${props => props.backgroundColour};
    }
`;

export const VerticalList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const RoundedContainer = styled.div<{ textColour: string }>`
    border: 2px solid ${props => props.textColour};
    border-radius: 43px;
    padding: 43px;
    text-align: center;
`;

export const CancelButton = styled(NavButton)`
    border: 2px solid red;
    font-size: min(20px, 1.5vw);
    margin: 0px;
    white-space: nowrap;
    &:hover {
        background-color: red;
        color: ${props => props.backgroundColour};
    }
`;

export const GoButton = styled(NavButton)`
    border: 2px solid green;
    font-size: min(20px, 1.5vw);
    margin: 0px;
    white-space: nowrap;
    &:hover:enabled {
        background-color: green;
        color: ${props => props.backgroundColour};
    }
    &:hover:disabled {
        background-color: ${props => props.backgroundColour};
    }
    &:disabled {
        border: 2px solid gray;
        color: gray;
        cursor: default;
    }

`;

export const SpacedBetweenContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const RoundedTextField = styled.input<{ textColour: string }>`
    border-radius: 100000000px;
    border: 2px solid ${props => props.textColour} !important;
    padding: 20px;
    text-align: center;
    font-size: max(1vw, 12px);
    background-color: transparent;
    color: ${props => props.textColour};
    font-family: inherit;
    width: 100%;
    box-sizing: border-box;
    &:focus {
        outline: none;
    }
`;

export const TextSize = "min(32px, 3vw)";
