import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Shop from './Pages/Shop.jsx';
import Cart from './Pages/Cart.jsx';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import AboutProduct from './Pages/AboutProduct.jsx';
import Context  from './Context/ContextProvider.jsx';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>,
  },
  {
    path : '/shop',
    element : <Shop/>,
  },
  {
    path : '/shop/cart',
    element : <Cart/>,
  },
  {
    path : "/shop/about_product",
    element : <AboutProduct />
  }
])

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={darkTheme}>
    <Context>
      <RouterProvider router={router}/>
    </Context>
  </ThemeProvider>
)
