import React, { useState, useRef } from "react";

const Connect = () => {
  const [connect, setConnect] = useState(true);
  const mouse = useRef();
  const enter = (e) => {
    if (e.target.innerText === "Connect") {
      e.target.disabled = true;
      e.target.innerText = "Loading...";
      e.target.style.cursor = "wait";
      mouse.current.style.cursor = "wait";
      setTimeout(() => {
        e.target.disabled = false;
        e.target.innerText = "Disconnect";
        setConnect(!connect);
        e.target.style.cursor = "default";
        mouse.current.style.cursor = "default";
      }, 2000);
    } else if (e.target.innerText === "Disconnect") {
      e.target.disabled = true;
      e.target.innerText = "Loading...";
      e.target.style.cursor = "wait";
      mouse.current.style.cursor = "wait";
      setTimeout(() => {
        e.target.disabled = false;
        e.target.innerText = "Connect";
        setConnect(!connect);
        e.target.style.cursor = "default";
        mouse.current.style.cursor = "default";
      }, 2000);
    }
  };

  return (
    <div ref={mouse} className='container-box'>
      <h1>{connect ? 'Disconnecting' : 'Connecting'}</h1>
      <button className='btnbottom' onClick={(e) => enter(e)}>Connect</button>
    </div>
  );
};

export default Connect;