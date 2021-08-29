import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {

  const [mode, setMode] = useState('light') ;
  const [alert, setalert] = useState(null);
  const [modeText, setmodeText] = useState("Enable Dark Mode");


  const showAlert = (message,type) =>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1000);
      
  }
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      setmodeText("Disable Dark Mode");
      document.body.style.background='#6c757d';
      showAlert("dark mode has been enabled","success");
      document.title= "TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      setmodeText("Enable Dark Mode");
      document.body.style.background='white';
      showAlert("light mode has been enabled","success");
      document.title= "TextUtils";
    }
  } 
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggle={toggleMode} modeText={modeText}/>
      {/* <Navbar /> */}
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm  heading="Enter the text to Analyze below" mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
        </Router>  
      <Alert alert={alert}/>
      <div className="container my-3">
       {/* <About />  */}
      </div>
      

    </>
  );
}


