import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <MyComponent name="React Babu" price="50000"></MyComponent>
      <MyComponent name ="Google Mama" price ="45600"></MyComponent>
      <MyComponent name="Apple Chacha" price="45200"></MyComponent>
    </div>
  );
}

function MyComponent(props) {
  const [point, setPoint] = useState(1)

  const myStyle = {
    padding: '10px',
    borderRadius: '20px',
    margin: ' 20px'
  }

  const handleAddPoint = () =>{
    const newPoint = point * 2;
    setPoint(newPoint);
  }

  return (
    <div className="my-component" style={myStyle}>
      <h1>Yo yo mama! I am {props.name}</h1>
      <h3>How much Rate for you: {props.price} and I have points: {point}</h3>
     
      <button onClick = {handleAddPoint} >Add Points</button>
      <p style={{ color: "blue", fontWeight: "bold" }}>ok you are right place, so you can do this every thing </p>
    </div>
  )
}

export default App;
