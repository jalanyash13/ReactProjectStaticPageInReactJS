import React from 'react';
import './App.css'; 
import BottomPage from './bottomPage';
import Middle from './middle';
import Top from './top';

function App() {
  return (
    <div className="container">
      <div className="area" id="top">
      <Top />
      </div>
      <div className="area" id="middle">
        <Middle/>
      </div>
      <div className="area" id="bottom">
        <BottomPage/>
      </div>
    </div>
  );
}

export default App;
