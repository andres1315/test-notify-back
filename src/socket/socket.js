import http from 'http'
import { Server as SocketServer } from 'socket.io'
export const initSocket =  app =>{
  const serverHttp =http.createServer(app)
  const socket = new SocketServer(serverHttp,{
    cors:{
      origin:'*',
      credentials:true
    }
  })

  return {
    serverHttp,
    socket
  }
}