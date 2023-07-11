import './App.css';
import Deals from './components/Deals';
import Discoveries from './components/Discoveries';
import NavBar from './components/NavBar';
import Slider from './components/Slider';

function App() {
  return (
    <>
      <NavBar />
      <Slider />
      <Discoveries />
      <Deals />
    </>
  );
}

export default App;
