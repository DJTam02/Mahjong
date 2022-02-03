/* Depedency Imports */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

/* Project Imports */
// Contexts
import { SocketProvider } from './contexts/SocketContext';
import { SettingsProvider } from './contexts/SettingsContext';
import { HOME_SCREEN_PATH } from './utils/constants/paths';
// Components
import HomePage from './components/setup/HomePage';
import Header from './components/Header';

const App = () => {
    return (<SocketProvider>
        <SettingsProvider>
            <PageWrapper>
                <Header />
                <ComponentWrapper>
                    <Routes>
                        <Route element={<HomePage />} path={HOME_SCREEN_PATH} />
                    </Routes>
                </ComponentWrapper>
            </PageWrapper>
        </SettingsProvider>
    </SocketProvider>);
};

/* Styled Components */
const PageWrapper = styled.div`
    display: inline-flex;
    min-height: 100vh;
    min-width: 100vw;
    flex-direction: column;
`;

const ComponentWrapper = styled.div`
    flex: 1;
    width: 100%;
`;

export default App;