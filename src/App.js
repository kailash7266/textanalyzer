import logo from './logo.svg';
import './App.css';
import Navbar  from './components/Navbar/Index';
import './components/Navbar/Index.css';
import Menu from './components/Navbar/Menu';
import Textform from './components/Form/Textform';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Textform/>
      <Navbar title="TextUtils"/>
      <Menu/>
      </header>
    </div>
  );
}

export default App;
