import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';


import Content from "./layout/Content";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

import Menu from './restaurant/Menu';

import { Food, Money } from './restaurant/Food';


// const menuData = new Food(1, "Pizza", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxMVIL5tWY7MfEvRDwYUMbPiODGF35YvbxOA&s", 100);
const menuData = [
  new Food(1, "Pizza", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxMVIL5tWY7MfEvRDwYUMbPiODGF35YvbxOA&s", 
          new Money(1, 150, "MDL")),
  new Food(2, "Soup", "https://corso.md/public/foods/thumbs/version_550x0x550x0x1/d50fb2eb0d83602e9c28dbad1e7289d2.jpg", 
          new Money(2, 100, "MDL")),
  new Food(3, "Pasta con Verdura", "https://corso.md/public/foods/thumbs/version_550x0x550x0x1/6b38aa92af6c88b48e9659ce22fa7242.jpg", 
          new Money(3, 120, "MDL")),
  new Food(4, "Fresh Salad", "https://corso.md/public/foods/thumbs/version_550x0x550x0x1/ffd79a42f9c7dbfb812214468094daf5.jpg", 
          new Money(4, 85, "MDL")),
];


//HW1: try to pasds and render an array of food


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      <Header/>
      <Content>
        <Menu data={menuData} />
      </Content>
      <Footer />
    </App>
  </React.StrictMode>
);

reportWebVitals();
