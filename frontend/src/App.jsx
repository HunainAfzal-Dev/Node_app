import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect (() => { 
    axios.get('https://localhost:3000.com/jokes',) 
    .then(response => {
      setJokes(response.data)
    })
  })



  return (
    <>
    <div>
      Jokes: {jokes.length}
    </div>
    {jokes.map((joke , index ) => {
      <div key={joke.id}>
        <h2> {joke.title} </h2>
        <p> {joke.joke} </p>
      </div>
    })}
    </>
  )
}

export default App
