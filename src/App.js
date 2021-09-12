// import { ChatEngine } from 'react-chat-engine';

// import ChatFeed from './Components/ChatFeed';

// import './App.css';

// const App = () => {
//     return (
//         <ChatEngine
//             height = "100vh"
//             projectID = "3b4e7772-22d3-422d-ba2c-e4cbe8f91192"
//             userName = "KeithArogo"
//             userSecret = "Keith"
//             renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            
//         />
//     );
    
// }

// export default App;
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';
import './App.css';

const projectID = '3b4e7772-22d3-422d-ba2c-e4cbe8f91192';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"//length/height of thw WHOLE page
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;