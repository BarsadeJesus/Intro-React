import React from 'react'
import {render} from 'react-dom'
import './App.css';
import logo from './logo.svg';
import ComponenteContador from './components/contador'

const App = () => {
    //const [name, setName] = useState('Patty');
    const name= 'patty';
    const lastName ='barrientos';
    return (
    <div className='App' >
    <head className='App-header' >
        <img src={logo}></img>
       <ComponenteContador nameApp={name} lastNameApp={lastName} /> 
    </head>
    </div>
    )
}
export default App