import React, { useState,useRef } from 'react';

export default function Player() {
  const playerNameRef = useRef(null)
  const [enteredPlayerName, setEnteredPlayerName] = useState(null)
  
  const handleSubmit = () => {
   setEnteredPlayerName(playerNameRef.current.value )
 }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName?? "unknown entity"}</h2>
      <p>
        <input ref={playerNameRef} type="text"  />
        <button onClick={handleSubmit} >Set Name</button>
      </p>
    </section>
  );
}
