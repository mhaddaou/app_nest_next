import { useEffect } from 'react';
import io from 'socket.io-client';

const ENDPOINT = 'http://localhost:4000';

const Chat = () => {
  useEffect(() => {
    const socket = io(ENDPOINT);
    
    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });
    
    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });
    
    socket.on('chat', (message) => {
      console.log(`Received message: ${message}`);
    });
    
    return () => {
      socket.disconnect();
    };
  }, []);
  
  return (
    <div>
        <h1>hello</h1>
      {/* Render your chat UI here */}
    </div>
  );
};

export default Chat;
