import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps name="Alessio!" age="I see you're 30," greeting="nice to meet you!" />
      <StatefulGreeting name="Alessio!" greeting="I'm a stateful class component!"/>
      <StatefulGreetingWithCallback />
      <StatefulGreetingWithPrevState />
      <EventsFunctional />
      <EventsClass />
      <ConditionalRenderingFunctional connected={true}/>
      <ConditionalRenderingClass />
    </div>
  );
}

export default App;
