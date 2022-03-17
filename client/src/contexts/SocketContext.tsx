/* Dependency Imports */
import { createContext, useState, useEffect } from 'react';
import socketIOClient, { Socket } from "socket.io-client";
import { useNavigate } from 'react-router';

/* Project Imports */
import { ServerToClientEvents, ClientToServerEvents } from '../types/socket';
import { redirect } from '../utils/functions/navigation';

const SocketContext = createContext<any>(null);

const SocketProvider = (props: ChildProps) => {
    const navigate = useNavigate();

    const [socket, setSocket] = useState<Socket<ServerToClientEvents, ClientToServerEvents> | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>("");
    
    useEffect(() => {
        const newSocket = socketIOClient('http://localhost:8080');

        // Add generic calls
        newSocket.on("setError", (message) => setErrorMessage(message));
        newSocket.on("redirectSuccess", (path) => redirect(navigate, path));

        setSocket(newSocket);
    }, []);

    return (<div>
        <SocketContext.Provider value={{ socket, errorMessage }}>{props.children}</SocketContext.Provider>
    </div>);
};

/* Types */
interface ChildProps {
    children: any;
}

export { SocketContext, SocketProvider };