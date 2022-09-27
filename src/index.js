import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
//import Card from './Card';
import 'tachyons';
//import { robots } from './robots';//stavlja se ovo robots u viticaste zagrade jer je robots.js export samo,a ne export default
//import CardList from './CardList';
import App from './containers/App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);
//prilikom pravljenja aplikacije robofriends dodali smo robots.js da bi razumeo pogledaj klip u sekciji React klip Buliding react app 1-od nekog 9 minuta
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
