import React, { useState } from 'react'

const Pokemon = () =>{
    const [value, setValue] = useState('')
    const [pokemonImg, setPokemonImg] = useState('')
    const [pokemonName, setPokemonName] = useState('')

    const changeValue =(e)=>{      
        setValue(e.target.value)
    }

        const addPokemon = (event) => {
            event.preventDefault()
            setPokemonName(value)
            const url = 'https://pokeapi.co/api/v2/pokemon/' + value
            fetch(url)
            .then (res=> res.json())
            .then(data => {
                setPokemonImg(data.sprites.front_default)
            })
            setValue('')
        }
    return (
        <div>
            <input value={value} onChange={changeValue}></input>
            <button onClick={addPokemon}>
                SEARCH POKEMON

            </button>
            <img src={pokemonImg}></img>
        </div>
    )
}
export default Pokemon