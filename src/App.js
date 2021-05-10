import './App.css';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <Timer time={5000} step={1000} autoStart={true} onTick={(time) => console.log('Time left ' + time)} />
      <Timer time={5998000} step={2000} autoStart={true} onTick={(time) => console.log('Time left ' + time)} />
    </div>
  );
}

export default App;
