// App.js
import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="0a2c1c10-c583-44da-b510-ee01ec0c771b"
      userName="Reacttest"
      userSecret="121212"
    />
  );
}

export default App;
