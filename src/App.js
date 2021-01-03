import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App container-fluid">
      <header className="row">
        <div className="col-1">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="col-10 ReactTube">ReactTube</div>
        <div className="col-1"></div>
      </header>

    </div>
  );
}

export default App;
