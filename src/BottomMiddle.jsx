import React from 'react';
import './App.css';
import LeftBottomMiddle from './LeftBottomMiddle';
import RightBottomMiddle from './RightBottomMiddle';

function BottomMiddle() {
  return (
    <>
    <div className="left-bottomMiddle">
            <LeftBottomMiddle/>   
        </div>
        <div className="right-bottomMiddle">
          <RightBottomMiddle/>
        </div>
    </>
  )
}

export default BottomMiddle;