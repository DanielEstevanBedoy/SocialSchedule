import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import SignInSide from './pages/SignIn';
import MessagePage from './pages/messagesPage';
import NotificationsPage from './pages/notificationsPage'
import SearchPage from './pages/searchPage'
import MiniDrawer from './pages/dashboard';
import SettingsPage from './pages/settingsPage';
import ProfilePage from './pages/profilePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = "/Dashboard" element = {<MiniDrawer/>}/>
        <Route path ="/SignIn" element = {<SignInSide/>}/>
        <Route path ="/Messages" element = {<MessagePage/>}/>
        <Route path ="/Notifications" element = {<NotificationsPage/>}/>
        <Route path ="/Search" element = {<SearchPage/>}/>
        <Route path = "/Settings" element = {<SettingsPage/>}/>
        <Route path = "/Profile" element = {<ProfilePage/>}/>
      </Routes>
      </BrowserRouter>

      

      
    </div>
  );
}

export default App;
