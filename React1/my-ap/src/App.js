import Alert from './Alert';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm'; 
import React from 'react';
import {useState } from 'react';
function App() {
  const [mode, setmode] = useState('light');
  const [alert , setalert]=useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor='#0d0833';
      showAlert("Dark mode turned on", "success");
    } else {
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode turned on", "success");
    }
  };
  
  return (
    <>
      <Navbar title="DesiQna" link="Links" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} onClose={() => setalert(null)} />
      <TextForm heading="Enter the text to modify" mode={mode} showAlert={showAlert} />
      {/* <About/> */}
    </>
  );
}

export default App;
// functional based : react hooks..
// props : properties means data passing inside function ..
