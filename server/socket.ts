import { Server } from "socket.io";
import { Server as HTTPServer} from "http";
import { useSocketServer } from 'socket-controllers';

export default (httpServer : HTTPServer) => {
    const io = new Server(httpServer, {
        cors: {
            origin: "*"
        }
    })

    useSocketServer(io, { controllers: [__dirname + "/api/controllers/*.ts"] })

    return io;
}