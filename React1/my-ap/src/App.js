import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm'; 
import About from './About';

function App() {
  return (
    <>
      <Navbar title="DesiQna" link="Links" />
      <TextForm heading="Enter the text to modify" />
      <About/>
    </>
  );
}

export default App;
// functional based : react hooks..
// props : properties means data passing inside function ..
