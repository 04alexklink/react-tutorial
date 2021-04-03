import './App.css';
import Greet from  './components/Greet'
import GreetClass from './components/GreetClass'
import MessageClass from './components/MessageClass'
import CounterClass from './components/CounterClass'

function App() {
  return (
    <div className="App">
      <Greet firstName='Ben' secondName='James'>
        <p>This is a children property</p>
      </Greet>
      <Greet firstName='Alex' secondName='Lewis'>
        <button>Action</button>
      </Greet>
     <Greet firstName='Adam' secondName='Kemp'/>
      {/* <GreetClass firstName='Ben' secondName='James'></GreetClass>
      <GreetClass firstName='Alex' secondName='Lewis'></GreetClass>
      <GreetClass firstName='Adam' secondName='Kemp'></GreetClass> */}
      {/* <MessageClass></MessageClass> */}
      <CounterClass></CounterClass>
    </div>
  );
}

export default App;
