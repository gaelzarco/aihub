import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Search from './components/Search'
import ImageGeneration from './components/ImageGeneration';

import './App.css';
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
        <Route path='/' element={<Search />} />
        <Route path='/image' element={<ImageGeneration/>} />
      </Routes>

      <div className='FAQ'>
        <h2>FAQ</h2>

        <div className='FAQ-content'>
          <h3>What?</h3>
          <p>This is a small project made with React/TypeScript and Flask. It features a PostgreSQL database for user authentication and search query storage. All search queries are driven by OpenAI's GPT-3 API Model.</p>

          <h3>Why?</h3>
          <p>I made this project as means of communicating with OpenAI's various API Models on a single web-page. Users can create an account to save their search queries, generated images, and more.</p>

          <p>If you like the project, feel free to reach out on <a href='https://www.linkedin.com/in/gaelzarco/' target='_blank' rel="noreferrer">LinkedIn</a>.</p>
        </div>
      </div>
        
      <footer>
        <img src={footer} alt='logo'/>
      </footer>
    </div>
  );
}

export default App;
