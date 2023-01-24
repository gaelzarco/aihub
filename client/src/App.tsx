import './App.css';
import { Routes, Route} from 'react-router-dom'

import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Landing from './components/Landing';
import NavBar from './components/NavBar'
import GPT3 from './components/GPT3'
import DALLE from './components/DALLE';
import Footer from './components/Footer';

import logo from './loader/logo.svg'

function App() {
  return (
    <div className="app">
      <div className='logo'>
        <a href='/'>
        <img src={logo} alt='logo'/>
        </a>

        <NavBar />
      </div>

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/create' element={<CreateAccount />} />
        <Route path='/login' element={<Login />} />
        <Route path='/chat' element={<GPT3 />} />
        <Route path='/image' element={<DALLE/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
