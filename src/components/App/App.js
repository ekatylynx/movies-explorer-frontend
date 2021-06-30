import React from "react";
// import logo from '../../logo.svg';
import Header from '../../components/Header/Header';
import Promo from '../../components/Promo/Promo';
import NavTab from '../../components/NavTab/NavTab';
import AboutProject from '../../components/AboutProject/AboutProject';
import './App.css';

function App() {
  return (
         <div className="page">
         <Header />
         <Promo />
         <NavTab />
         <AboutProject />
            {/* <Header/> */}
            {/* Футер */}
        </div>
  );
}

export default App;
