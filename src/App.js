import Greet from  './components/Greet'
import GreetClass from './components/GreetClass'
import MessageClass from './components/MessageClass'
import CounterClass from './components/CounterClass'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NamesList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import Form from './components/Form'
import LifeCycleA from './components/LifeCycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo'
import FocusInput from './components/FocusInput'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'
import ClickCounter2 from './components/ClickCounter2'
import HoverCounter2 from './components/HoverCounter2'
import ParentForHoverAndClick from './components/ParentForHoverAndClick'
import ComponentC from './components/ComponentC'
import {UserProvider} from './components/userContext'
function App() {
  return (
    <div className="App">
      {/* <Greet firstName='Ben' secondName='James'>
        <p>This is a children property</p>
      </Greet>
      <Greet firstName='Alex' secondName='Lewis'>
        <button>Action</button>
      </Greet>
     <Greet firstName='Adam' secondName='Kemp'/> */}
      {/* <GreetClass firstName='Ben' secondName='James'></GreetClass>
      <GreetClass firstName='Alex' secondName='Lewis'></GreetClass>
      <GreetClass firstName='Adam' secondName='Kemp'></GreetClass> */}
      {/* <MessageClass></MessageClass> */}
      {/* <CounterClass></CounterClass> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}
      {/* <EventBind></EventBind> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <NamesList></NamesList> */}
      {/* <Stylesheet primary={true}></Stylesheet> */}
      {/* <Inline></Inline> */}
      {/* <Form></Form> */}
      {/* <LifeCycleA></LifeCycleA> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <Table></Table> */}
      {/* <ParentComp></ParentComp> */}
      {/* <RefsDemo></RefsDemo> */}
      {/* <FocusInput></FocusInput> */}
      {/* <ErrorBoundary>
      <Hero heroName={'Batman'}></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName={'Joker'}></Hero>
      </ErrorBoundary> */}
      {/* <ClickCounter2 name={'Alex'}></ClickCounter2>
      <HoverCounter2></HoverCounter2> */}
      {/* <ParentForHoverAndClick/> */}
      <UserProvider value='Alex K'>
      <ComponentC/>
      </UserProvider>
    </div>
  );
}

export default App;
