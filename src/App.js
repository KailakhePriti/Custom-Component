import './App.css';
import Temp from './component/Temp';
import Cart from './component/Cart';
import first from './images/first.png';
import r1 from './images/r1.jpeg';
import r4 from './images/r4.jpg';
import r3 from './images/r3.jpg';
function App() {
  return (
    <div className="App">
        {/* <Temp/> */}
        <Cart cartname="Reactjs"
          carttext="React is a JavaScript library for building user interfaces.
          React is used to build single-page applications.
          React allows us to create reusable UI components."
          read="Learn About Reactjs"
          imgsrc={r3}
          link="https://reactjs.org"
          clickHere="Click Here"
        />
        <Cart cartname="Component"
          carttext="Components are independent and reusable bits of code.
           They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
          Components come in two types, Class components and Function components."
          read="Learn About Component"
          imgsrc={r1}
          link="https://reactjs.org"
          clickHere="Click Here"
          />
         

        <Cart 
          cartname="Router"
          carttext="React Router is a standard library for routing in React. It enables
            the navigation among views of various components in a React Application, 
            allows changing the browser URL, and keeps the UI in sync with the URL."
          read="Learn About Router" 
          imgsrc={r4}
          link="https://reactjs.org"
          clickHere="Click Here"
          />
          
        <Cart 
          cartname="Props"
          carttext="Props are arguments passed into React components.
              Props are passed to components via HTML attributes."
          read="Learn About Props" 
          imgsrc={first}
          link="https://reactjs.org"
          clickHere="Click Here"
          />
    </div>
  );
}

export default App;
