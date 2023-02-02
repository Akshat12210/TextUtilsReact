import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#674188';
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.background = '#FFFBF5';
      document.title = "TextUtils";
    }
  }
  return (
    <>
    <ToastContainer autoClose={2000} toastStyle={{backgroundColor: mode === 'light' ? 'white' : 'blueviolet',color: mode === 'light' ? 'purple' : 'white'}}/>
        <Router>
          <Navbar title="TextUtils" mode={mode} toggle={toggleMode} />
          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={toast} />
            </Route>
          </Switch>
          <div style={{color: mode === 'light' ? 'black' : 'white'}}>
          <p className="text-center fw-bold">Made by <a className='
          footer' style={{textDecoration:"none", color: mode === 'light' ? 'black' : 'white'}} href="http://www.akshatmodani.live">Akshat Modani🚀</a></p>
          </div>
        </Router>
    </>
  );
}


