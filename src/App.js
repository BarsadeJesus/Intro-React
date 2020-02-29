import React, { useState } from 'react'
import {render} from 'react-dom'
import './App.css';
import logo from './logo.svg';

const App = () => {
    //const [name, setName] = useState('Patty');
    const [count, setCount]= useState(0);

    const sumar = () => {
        setCount(count+1)
    }
    const restar = () => {
        setCount(count-1)
    }
    return (
    <div className='App' >
    <head className='App-header' >
        <img src={logo}></img>
        <div>{count}</div>
        <button onClick={sumar} >Sumar</button>
        <button onClick={restar} >Restar</button>
    </head>
    </div>
    )
}
export default App