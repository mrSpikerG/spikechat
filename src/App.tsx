import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Chat from './pages/chat/Chat';
import Adminpanel from './pages/adminpanel/Adminpanel';


function App() {
  return (

    <Router>
      <Routes >
        
        <Route path="/" element={<Main />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/admin" element={<Adminpanel />} />

      </Routes >
    </Router >

  );
}

export default App;
