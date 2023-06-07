
import './App.css';
import Component from './component.js'

function App() {
  return (
    <div className="App">
      <h1>Hello Dojo</h1>
      <h3>Things I need to do: </h3>
      <ul>
        <li>Learn React</li>
        <li>Build a React app</li>
        <li>Deploy the React app</li>
      </ul>
      <Component />
    </div>
  );
}


export default App;
