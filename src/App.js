import './App.css';
import Header from './Header';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Body from './Body';
import AboutPage from './About';
import ContactPage from './Contact';
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

function App() {
  return (
    <>
      <Header />
      <Link to="/about">About</Link>
      <RouterProvider router={router}>
        <div className="App">
        </div>
      </RouterProvider>
      <Footer />
    </>
  );
}

export default App;
