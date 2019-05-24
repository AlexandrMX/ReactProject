import React from 'react';
// import Logo from './components/render-logo';
import Header from './components/header';
import Navbar from './components/navbar';
import Content from './components/content';

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
