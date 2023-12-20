import React from 'react';
import Header from './../Header/Header.jsx'
import Footer from './../Footer/Footer.jsx'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './../../Pages/Home/Home.jsx'
import About from './../../Pages/About/About.jsx'
import Products from '../../Pages/Product/Products.jsx'
import NotFound from '../../Pages/NotFound/NotFound.jsx';

//-->Root Index.js
//Pour ne pas repeter l'appel de nos comp header et footer dans nos comp on les inclues dans notre router
const Path = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Products/:id" element={<Products/>} />
      <Route path="/*" element={<NotFound/>} />
    </Routes>
    <Footer />
  </Router>
)

export default Path


