import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import About from './components/About';
import TextForm from './components/TextForm'
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setalert] = useState(null);

  const showAlert= (message,type)=>{
    setalert({
      msg:message,
      type: type,
    })

    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const toggleMode= ()=>{
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor="#12083e";
      showAlert("Dark mode has been enabled!","success");
      // document.title="Textutils - Dark mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled!","success");
      // document.title="Textutils - Light mode";
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" abouttext="About Us" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<TextForm heading="Try TextUtils - Word counter, Charecter counter, remove extra spaces" mode={mode} showAlert={showAlert}/>}>
        </Route>
        <Route exact path="/about" element={<About mode={mode}/>}>
        </Route>
      </Routes> 
    </div> 
    </Router>
    </>
  );
}

export default App;
