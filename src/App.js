import logo from './logo.svg';
import './App.css';
import Cards from './components/cards/cards';
import Button from './components/button/button';
import ButtonUppercase from './components/buttonUppercase/buttonUppercase';
import ButtonClean from './components/buttonClean/buttonClean';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Cards />
        <Button />
        <ButtonUppercase />
        <ButtonClean />
      </header>
    </div>
  );
}

export default App;
