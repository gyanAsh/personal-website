import './App.css';
import Header from './Components/Header/Header';
import NavContact from './Components/Contact/Nav/NavContact';
import NavEmail from './Components/Contact/Nav/NavEmail';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <NavContact />
        <NavEmail/>
      </header>
    </div>
  );
}

export default App;
