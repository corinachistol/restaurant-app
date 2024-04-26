import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';


import Content from "./layout/Content";
import Footer from "./layout/Footer";
import Header from "./layout/Header";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      <Header/>
      <Content />
      <Footer />
    </App>
  </React.StrictMode>
);

reportWebVitals();
