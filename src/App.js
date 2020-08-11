import React from 'react';
import './App.css';
import Navbar from "./Component/Navbar"
import Bg from "./Component/BackGround"
import NavMid from './Component/NavMid'
import CardImg from './Component/CardImg'
import Pagi from "./Component/Pagination"
import BtFooter from './Component/BtFooter'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
function App() {
  return (
    <div>
      <Navbar/>
      <Bg/>
      <NavMid/>
      <CardImg/>
      <Pagi/>
      <BtFooter/>
      <hr/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
