import './App.css';
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import GPT3 from './components/GPT3'
import DALLE from './components/DALLE';

import logo from './loader/logo.svg'
import footer from './loader/footer.svg'

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
        <Route path='/' element={<GPT3 />} />
        <Route path='/image' element={<DALLE/>} />
      </Routes>

      <div className='FAQ'>
        <h2>FAQ</h2>

        <div className='FAQ-content'>
          <h3>What?</h3>
          <p>Created with React, TypeScript, Flask and PostgreSQL, this website allows you to communicate with OpenAI's  GPT-3 and DALL·E API Models all on a single webpage. Users can create an account to save their search queries and generated images.</p>

          <h3>Why?</h3>
          <p>I made this project as means of communicating with OpenAI's various API Models on a single web-page. </p>

          <p>If you like the project, feel free to reach out on <a href='https://www.linkedin.com/in/gaelzarco/' target='_blank' rel="noreferrer">LinkedIn</a>.</p>
        </div>
      </div>
        
      <footer>
        <a href='https://github.com/gaelzarco/aihub' target='_blank' rel='noreferrer'><img src={footer} alt='logo'/></a>
      </footer>
    </div>
  );
}

export default App;
