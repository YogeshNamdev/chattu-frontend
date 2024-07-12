import { createContext, useMemo, useContext, useEffect } from 'react'
import io from 'socket.io-client'
import { server } from './constants/config' // Ensure this points to your server URL

const SocketContext = createContext()

const getSocket = () => useContext(SocketContext)

const SocketProvider = ({ children }) => {
  const socket = useMemo(() => io(server, { withCredentials: true }), [])

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected with ID:', socket)
    })

    socket.on('connect_error', (error) => {
      console.error('Connection error:', error)
    })

    socket.on('disconnect', () => {
      console.log('Disconnected from server')
    })

    return () => {
      socket.off('connect')
      socket.off('disconnect')
      socket.off('connect_error')
    }
  }, [socket])

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  )
}

export { SocketProvider, getSocket }
