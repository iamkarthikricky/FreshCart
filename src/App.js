import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import 'react-tooltip/dist/react-tooltip.css'
import Home from './components/Home/home.js';
import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js';


function App() {
  return (
    <div className='main-container'>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App;
