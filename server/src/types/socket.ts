/* eslint-disable @typescript-eslint/no-extra-semi */
export interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
};
  
export interface ClientToServerEvents {
    joinRoom: (name: string, code: string, callback: (error: string, code: string) => void) => void;
    createRoom: (name: string, callback: (error: string, code: string) => void) => void;
};
  
export interface InterServerEvents {
    ping: () => void;
};
  
export interface SocketData {
    name: string;
    age: number;
};