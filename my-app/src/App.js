import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React, { useState } from 'react';

let name = "Harry";
function App() {
  const [mode, setMode] = useState('light'); //whnether dark mode is enabled or not 
 const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor ='#042743';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor ='white';
  }
 }
  return (
    <> 
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 
  <div className='container my-3'>
<TextForm heading="Enter the text to analyze below" mode={mode}/>
{/* <About/> */}
  </div>
  </>
  );
}

export default App;
