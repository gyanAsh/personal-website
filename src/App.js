import './App.css';
import Header from './Components/Header/Header';
import NavContact from './Components/Contact/Nav/NavContact';
import NavEmail from './Components/Contact/Nav/NavEmail';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <NavContact />
        <NavEmail/>
      </header>
      <div className="pagesContainer">
        <Home />
        <About/>
      </div>
    </div>
  );
}

export default App;
