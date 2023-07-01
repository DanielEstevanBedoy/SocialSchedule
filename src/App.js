import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/dashboard'
import SignInSide from './pages/SignIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = "/DashBoard" element = {<Dashboard/>}/>
        <Route path = "/SignIn" element = {<SignInSide/>} />
      </Routes>
      </BrowserRouter>

      

      
    </div>
  );
}

export default App;
