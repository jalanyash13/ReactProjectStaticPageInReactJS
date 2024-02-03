import React from 'react';
import './App.css';
import BottomMiddle from './BottomMiddle';
import NavMiddle from './NavMiddle';

function Middle() {
  return (
    // <div className="area" id="middle">middle</div>
    <>
        <div className="nav-middle">
            <NavMiddle/>
        </div>
        <div className="bottom-middle">
            <BottomMiddle/>
        </div>
    </>
  )
}

export default Middle;