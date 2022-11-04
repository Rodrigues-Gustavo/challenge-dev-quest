import logo from './logo.svg';
import './App.css';
import Cards from './components/cards/cards';
import Button from './components/button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Cards />
        <Button />
      </header>
    </div>
  );
}

export default App;
