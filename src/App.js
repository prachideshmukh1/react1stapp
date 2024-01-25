import React from 'react';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
import Homepage from './components/Homepage/Homepage';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='app'>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/learn' element={<h1>Learn Page</h1>}/>
        <Route path='/refresh' element={<h1>Refresh Page</h1>}/>
        <Route path='/community' element={<h1>Community Page</h1>}/>
        <Route path='/ourcommunity' element={<h1>OurCommunity Page</h1>}/>
        <Route path='/mycommunity' element={<h1>MyCommunity Page</h1>}/>
        <Route path='/blog' element={<h1>Blog Page</h1>}/>
        <Route path='/git' element={<h1>Git Page</h1>}/>
        <Route path='/github' element={<h1>Github Page</h1>}/>
        <Route path='/register' element={<h1>Register Page</h1>}/>
      </Routes>
      <Footer />
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
