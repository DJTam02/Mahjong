/* Dependency Imports */
import { createContext } from 'react';
import { io, Socket } from "socket.io-client";

/* Project Imports */
import { ServerToClientEvents, ClientToServerEvents } from '../types/socket';

const SocketContext = createContext<any>(null);

const SocketProvider = (props: ChildProps) => {
    const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();

    return (<div>
        <SocketContext.Provider value={socket}>{props.children}</SocketContext.Provider>
    </div>);
};

/* Types */
interface ChildProps {
    children: any;
}

export { SocketContext, SocketProvider };