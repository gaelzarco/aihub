import { Routes, Route } from 'react-router-dom'

import Search from './components/Search'
import ImageGeneration from './components/ImageGeneration';

import './App.css';
import logo from './loader/logo.svg'

function App() {
  return (
    <div className="app">
      <div className='logo'>
        <a href='/'>
        <img src={logo} alt='logo'/>
        </a>
      </div>

      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/image' element={<ImageGeneration/>} />
      </Routes>

      <div className='FAQ'>
        <h2>FAQ</h2>

        <div className='FAQ-content'>
          <h3>What?</h3>
          <p>This is a small project made with React and Flask. It features a PostgreSQL database for user authentication and search query storage. All search queries are driven by OpenAI's GPT-3 API model.</p>

          <h3>Why?</h3>
          <p>I made this project as a proof of concept of what a future search engine could look like. Search engines today promote SEO optimized websites that want your time, money, and personal information. As the web grows saturated with ads, there will come a point where AI could replace the search engines of today and provide users with answers; not peddle endless amounts of consumerism.</p>

          <p>Heavily inspired by <a href='https://12ft.io/' target='_blank' rel="noreferrer">12ft.io</a>, I created this website to demonstrate what the search engines of the future could look like.</p>
        </div>
      </div>
        
      <footer>
        <h1>OpenAI Search</h1>
      </footer>
    </div>
  );
}

export default App;
