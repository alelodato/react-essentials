import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps name="Alessio!" age="I see you're 30," greeting="nice to meet you!" />
      <StatefulGreeting name="Alessio!" greeting="I'm a stateful class component!"/>
    </div>
  );
}

export default App;
