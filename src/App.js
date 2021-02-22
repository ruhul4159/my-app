import logo from './logo.svg';
import './App.css';

function App() {
  var person={
    name: "Dr. Mahfuz",
    job:"Singer"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Ruhul Amin</h2>
        <p>My first React App: {person.name+" "+person.job}</p>
      </header>
    </div>
  );
}

export default App;
