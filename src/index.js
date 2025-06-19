import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Body from './Body';
import AboutPage from './About';
import ContactPage from './Contact';
import Header from './Header';
import Footer from './Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />
  },
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/contact",
    element: <ContactPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
