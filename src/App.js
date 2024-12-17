import logo from './logo.svg';
import './App.css';
import Navbar  from './components/Navbar/Index';
import './components/Navbar/Index.css';
import Testimonials from './components/Navbar/Testimonials';
import Textform from './components/Form/Textform';
import Footer from './components/Navbar/Footer';
import Services from './components/Navbar/Services';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Textform/>
      <Navbar title="TextUtils"/>
      <Testimonials/>
      <Services/>
      <Footer/>
      </header>
    </div>
  );
}

export default App;
