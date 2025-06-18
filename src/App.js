import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

// Then include the <Header /> component in your App's JSX
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Header />
        <h1>Hello World</h1>
        <Body />
        <Footer />
        
        
      </header>
    </div>
  );
}

export default App;
