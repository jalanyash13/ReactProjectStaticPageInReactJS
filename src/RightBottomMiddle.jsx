import React from 'react'
import './App.css';
import RightBottomMiddleTop from './RightBottomMiddleTop';
import RightBottomMiddleBottom from './RightBottomMiddleBottom';
function RightBottomMiddle() {
  return (
    <div>
        <div className="topRight-bottomMiddle">
            <RightBottomMiddleTop/>
           </div>
          <div className="bottomRight-bottomMiddle">
          <RightBottomMiddleBottom/>
          </div>
    </div>
  )
}

export default RightBottomMiddle;