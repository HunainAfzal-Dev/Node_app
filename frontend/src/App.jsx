import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect (() => { 
    axios.get('http://localhost:3000/jokes',) 
    .then((response) => {
    console.log(response.data);
      setJokes(response.data)
    })
    .catch((error) => {
      console.error(error);
      });
  },[])


  return (
    <>
    <div>
      Jokes: {jokes.length}
    </div>
    {jokes.map((joke , index ) => (
      <div key={joke.id}>
        <h2> {joke.title} </h2>
        <p> {joke.joke} </p>
      </div>
    ))}
    </>
  )
}

export default App
