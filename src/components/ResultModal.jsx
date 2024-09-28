import React from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import {createPortal} from 'react-dom';
const ResultModal = forwardRef(({  targetTime,timeRemaining,handleReset }, ref) => {
  const dialogRef = React.useRef(null);
  const userLost = timeRemaining <= 0;
  const formattedRemainingTime = (timeRemaining / 1000).toFixed(2);
const score=Math.round((1-timeRemaining/(targetTime *1000))*100)
  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current.showModal();
    },
   
  }));

  return createPortal(
    <dialog ref={dialogRef} className="result-modal">
      <h2>{userLost? 'You Lost' : `You Won! ${score}`} </h2>
      <p>The target time was <strong>{targetTime} seconds</strong></p>
      <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left</strong></p>

      <form method="dialog">
        <button onClick={handleReset}>Close</button>
      </form>
    </dialog>,
  document.getElementById('modal')


  );
});

export default ResultModal;
