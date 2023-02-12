// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';


import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //whnether dark mode is enabled or not 
  const [alert, setAlert] = useState(null); 

  const showAlert = (message, type)=>{
      setAlert({
        msg : message,
        type: type
      })
      setTimeout(() =>{
        setAlert(null);
      }, 1500);

  }


 const removeBodyClasses = ()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-light')

 }

 const toggleMode = (cls)=>{
  removeBodyClasses();
  if(mode === 'light'){
    console.log(cls);
    document.body.classList.add('bg-'+cls);
    setMode('dark');
    document.body.style.backgroundColor ='#042743';
    showAlert("Dark mode has been enabled", "success")
    
  }
  else{
    setMode('light');
    document.body.style.backgroundColor ='white';
    showAlert("Light mode has been enabled", "success")
    
  }
 }


//   return (
//     <> 
//   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
//    <Alert alert={alert}/>
//   <div className='container my-3'>
// <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
// {/* <About/> */}
//   </div>
//   </>
//   );


return (
  <>
   
 {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
 
  <BrowserRouter>
 <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
   <div className='container my-3'>

    <Routes>
      <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces " mode={mode}/>}/>
      <Route path="/About" element={<About mode={mode} />} />
    </Routes>

    </div>
  </BrowserRouter>

  </>
);



}



export default App;