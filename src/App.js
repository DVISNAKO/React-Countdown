import './App.css';
import Countdown from 'react-countdown';




function App() {

  const Completionist = () => <span>Thanks for watch!</span>;

  return (
    <div className="App">
      <h1>
    <Countdown date={Date.now() + 10000}>
    <Completionist/>
    </Countdown>
      </h1>
    </div>
  );
}

export default App;
