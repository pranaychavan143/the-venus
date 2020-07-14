import React, { Component } from 'react';
import './resource/style.css';
import Header from './component/heder_footer/Header';
import Features from './component/featured';
import VunueNfo from './component/venueNfo';
import Highlights from './component/highlight';

class App extends Component
 {
   render(){
  return (
    <div className="App" style={{height:"1500px"}}>
      <Header/>
      <Features/>
      <VunueNfo/>
      <Highlights/>
    </div>
  );
}
 }

export default App;
