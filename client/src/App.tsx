/* Depedency Imports */
import styled from 'styled-components';

/* Project Imports */
// Contexts
import { SocketProvider } from './contexts/SocketContext';
import { SettingsProvider } from './contexts/SettingsContext';
import { ToastProvider } from './contexts/ToastContext';
// Components
import Header from './components/menus/Header';
import ContentRouter from './components/ContentRouter';

const App = () => {
    return (<ToastProvider>
        <SocketProvider>
            <SettingsProvider>
                <PageWrapper>
                    <Header />
                    <ContentRouter /> 
                </PageWrapper>
            </SettingsProvider>
        </SocketProvider>
    </ToastProvider>);
};

/* Styled Components */
const PageWrapper = styled.div`
    display: inline-flex;
    min-height: 100vh;
    width: 100%;
    flex-direction: column;
`;

export default App;
