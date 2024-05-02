import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';


import Content from "./layout/Content";
import Footer2 from "./layout/Footer2";
import Header from "./layout/Header";

import Menu from './restaurant/Menu';

import { Food } from './restaurant/Food';

const menuData = new Food(1, "Pizza", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxMVIL5tWY7MfEvRDwYUMbPiODGF35YvbxOA&s", 100);


//HW1: try to pasds and render an array of food


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      <Header/>
      <Content>
        <Menu data={menuData} />
      </Content>
      <Footer2 />
    </App>
  </React.StrictMode>
);

reportWebVitals();
