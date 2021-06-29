import React from "react";
// import logo from '../../logo.svg';
import Header from '../../components/Header/Header';
import Promo from '../../components/Promo/Promo';
import NavTab from '../../components/NavTab/NavTab';
import './App.css';

function App() {
  return (
         <div className="page">
         <Header />
         <Promo />
         <NavTab />
            {/* <Header/> */}
            {/* Футер */}
        </div>
  );
}

export default App;
