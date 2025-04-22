import logo from './find-a-feeling-no-background.png';
import './App.css';
import { Button } from "./components/ui/button"

function App() {
  return (
    <div className="App">
      <header className="Find-a-Feeling">
        <img src={logo}  className="App-logo" alt="find-a-feeling logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          Find-a-Feeling
      </header>
      <Button>Click me</Button>

    </div>
  );
}

export default App;
