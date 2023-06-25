// import logo from './logo.svg';
import React, {useState, useEffect} from 'react'
import './App.css';


function App() {
  const [data, setData] = useState()

  useEffect(() =>{
    fetch("/members")
    .then(res =>res.json())
    .then(data => console.log(data))
  },[])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
