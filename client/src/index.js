import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';


import Content from "./layout/Content";
import Footer2 from "./layout/Footer2";
import Header from "./layout/Header";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      <Header/>
      <Content />
      <Footer2 />
    </App>
  </React.StrictMode>
);

reportWebVitals();
