import PriceSlider from './components/PriceSlider/PriceSlider';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header-app">
        <h1 className="main-title">Simple, traffic-based pricing</h1>
        <p className="sutitle">
          Sign-up for our 30-day trial. No credit card required.
        </p>
      </header>
      <PriceSlider />
    </div>
  );
}

export default App;
