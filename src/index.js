import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CurrentTime from './component/CurrentTime';
import CurrentDate from './component/CurrentDate';
import MainMenu from './component/GenerateMenu';
import SearchBox from './component/SearchBox';
import GetForcast from './component/GetForcast';
import News from './component/News';
import './index.css';


/* Menu will only be updated on refresh */
ReactDOM.render(<React.StrictMode><SearchBox/><GetForcast city="congleton"/></React.StrictMode>, document.getElementById("side-nav"))
ReactDOM.render(<React.StrictMode><MainMenu/></React.StrictMode>, document.getElementById('main-menu'))

function DOMUpdater(){
  ReactDOM.render(<React.StrictMode><CurrentTime/></React.StrictMode>, document.getElementById('clock-time'));
  ReactDOM.render(<React.StrictMode><CurrentDate/></React.StrictMode>, document.getElementById('clock-date'));
}

document.getElementById('search-box').value = ''
window.addEventListener('keyup', (e)=>{ if(e.code === 'Slash'){ document.getElementById('search-box').focus() } }, false)

/* Runs initially and then updates every x number of miliseconds */ 
DOMUpdater();
setInterval(() => { DOMUpdater() }, 500);


