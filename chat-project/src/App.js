import React from 'react';
// import Logo from './components/render-logo';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Content from './components/Content/content';
import Login from './components/Login/login';

import './App.css';

const App = () =>  {
    let loged = true

    return (

    <div className="app-wrapper">

        <Login/>
        <Header/>
        {/*<div><Logo/></div>*/}
        <Navbar/>
        <Content/>


    </div>
  );
}




export default App;
