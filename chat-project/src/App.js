import React from 'react';
// import Logo from './components/render-logo';
import Header from './components/render-header';
import Navigation from './components/render-nav';
import Content from './components/render-content';

import './App.css';

const App = () =>  {
  return (

    <div className="app-wrapper">
        <Header/>
        {/*<div><Logo/></div>*/}
        <Navigation/>
        <Content/>

    </div>
  );
}




export default App;
