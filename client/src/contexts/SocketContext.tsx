/* Dependency Imports */
import { createContext, useState, useEffect } from 'react';
import socketIOClient, { Socket } from "socket.io-client";

/* Project Imports */
import { ServerToClientEvents, ClientToServerEvents } from '../types/socket';

const SocketContext = createContext<any>(null);

const SocketProvider = (props: ChildProps) => {
    /* States */
    const [socket, setSocket] = useState<Socket<ServerToClientEvents, ClientToServerEvents> | null>(null);
    
    useEffect(() => {
        const newSocket = socketIOClient('http://localhost:8080');

        setSocket(newSocket);
    }, []);

    return (<div>
        <SocketContext.Provider value={socket}>{props.children}</SocketContext.Provider>
    </div>);
};

/* Types */
interface ChildProps {
    children: any;
}

export { SocketContext, SocketProvider };