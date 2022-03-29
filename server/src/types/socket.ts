/* eslint-disable @typescript-eslint/no-extra-semi */
interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
};
  
interface ClientToServerEvents {
    joinRoom: (name: string, code: string, callback: (error: string, code: string) => void) => void;
    createRoom: (name: string, callback: (error: string, code: string) => void) => void;
};
  
interface InterServerEvents {
    ping: () => void;
};
  
interface SocketData {
    name: string;
    age: number;
};