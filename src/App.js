import './App.css';
// import './navbar.css'; 
 import About from './Components/About';
 import Alert from './Components/Alert';
 import Navbar from './Components/Navbar';
 import Create from './Components/Create';
 import Read from './Components/Read';
 import Update from './Components/Update';
 import TextForm from './Components/TextForm';
 import React, { useState } from 'react';
 import { HashRouter as Router, Routes, Route } from 'react-router-dom'

 
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode= ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled','success');
      document.title ="Farhan - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled','success');
      document.title ="Farhan - Light Mode";
    }
  }
  return (
    <>
    <Router>
     <Navbar title = 'Tech-Code' Abouthere= 'About' mode1={mode} toggleMode1={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/" element={<TextForm heading="Enter The Text To Analyze Below :-" showAlert={showAlert} mode1={mode}/>} />
      </Routes>   
     </div>
     <div className='curda'>
     <Routes>
      <Route exact path='/' element={<Create/>}/>
      <Route exact path='/read' element={<Read/>}/>
      <Route exact path='/update' element={<Update/>}/>
      </Routes>
     </div>
    </Router>   
    </>
  );
}

export default App;
