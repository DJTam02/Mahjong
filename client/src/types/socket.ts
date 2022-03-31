export interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
    errorMessage: (message: string) => void;
};
  
export interface ClientToServerEvents {
    joinRoom: (name: string, code: string, callback: Callback<string>) => void;
    createRoom: (name: string, callback: Callback<string>) => void;
};

export type Callback<T> = (payload: T) => void;
