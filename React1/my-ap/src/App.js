import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm'; 
import About from './About';
import React from 'react';
import {useState } from 'react';
function App() {
  const [mode, setmode] = useState('light');
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor='#0d0833';
    } else {
      setmode('light');
      document.body.style.backgroundColor='white';
    }
  };
  return (
    <>
      <Navbar title="DesiQna" link="Links" mode={mode} togglemode={togglemode} />
      <TextForm heading="Enter the text to modify" mode={mode} />
      {/* <About/> */}
    </>
  );
}

export default App;
// functional based : react hooks..
// props : properties means data passing inside function ..
