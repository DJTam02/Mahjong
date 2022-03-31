/* Dependency Imports */
import { createContext, useState, useEffect, useContext } from 'react';
import socketIOClient, { Socket } from "socket.io-client";

/* Project Imports */
import { ServerToClientEvents, ClientToServerEvents } from '../types/socket';
import { ToastContext } from './ToastContext';

const SocketContext = createContext<any>(null);

const SocketProvider = (props: ChildProps) => {
    /* Context */
    const setToast = useContext<(message: string) => void>(ToastContext);

    /* States */
    const [socket, setSocket] = useState<Socket<ServerToClientEvents, ClientToServerEvents> | null>(null);
    
    useEffect(() => {
        const newSocket = socketIOClient('http://localhost:8080');

        newSocket.on("errorMessage", (message) => setToast(message));

        setSocket(newSocket);
    }, [setToast]);

    return (<div>
        <SocketContext.Provider value={socket}>{props.children}</SocketContext.Provider>
    </div>);
};

/* Types */
interface ChildProps {
    children: any;
}

export { SocketContext, SocketProvider };