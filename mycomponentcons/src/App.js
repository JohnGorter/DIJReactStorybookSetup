import logo from './logo.svg';
import './App.css';
import { Header } from 'mycomponentlib'

function App() {
  return (
    <div className="App">
      <Header
  onCreateAccount={() => {}}
  onLogin={function noRefCheck() {}}
  onLogout={function noRefCheck() {}}
  user={{
    name: 'Jane Gorter'
  }}
/>
    </div>
  );
}

export default App;
