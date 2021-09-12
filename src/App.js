import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './Components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine
            height = "100vh"
            projectID = "3b4e7772-22d3-422d-ba2c-e4cbe8f91192"
            userName = "KeithArogo"
            userSecret = "Keith"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            
        />
    );
    
}

export default App;
