import React from 'react';
// import Logo from './components/render-logo';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Content from './components/Content/content';

import './App.css';

const App = () =>  {
  return (

    <div className="app-wrapper">
        <Header/>
        {/*<div><Logo/></div>*/}
        <Navbar/>
        <Content/>


    </div>
  );
}




export default App;
