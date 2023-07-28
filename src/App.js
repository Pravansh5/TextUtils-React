import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from 'react-router-dom';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');//wheather dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },4000);
  }

  const toggleMode = () => {
    if (mode == "light") {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode has been enabled","success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success")
    }

  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} abouttext="about" />
      <Alert alert={alert}/>
      {/* <Routes> */}
        {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="enter the text to analyze blow" mode={mode}/>}></Route> */}
        {/* <Route exact path="/about" element={<About/>}></Route> */}
      {/* </Routes> */}
      
      <div className="container">
        <TextForm showAlert={showAlert} heading="enter the text to analyze blow" mode={mode}/>
      </div>

      {/* <div className="contain" mx-3>
   <About/>
   </div> */}
  {/* </Router> */}
    </>);
}

export default App;

