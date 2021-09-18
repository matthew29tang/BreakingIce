import logo from './logo.svg';
import './App.css';

import ButtonAppBar from './Components/ButtonAppBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
